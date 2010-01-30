require 'net/http'
require 'json'
require 'money'
class Product < ActiveRecord::Base
  validates_presence_of :number, :description, :cents, :qoh
  validates_numericality_of :number, :cents, :qoh
  #money :price, :cents => :cents, :currency => "USD"
#  composed_of :price, :class_name => "Money",
#                      :constructor => Proc.new{|cents| Money.new(cents)},
#                      :converter => Proc.new{|cents| Money.new(cents)},
#                      :mapping => [%w(cents cents)]
  STORE_URI = "http://store.discobiscuits.com/pre_order.json"

  def self.sync
    Rails.logger.debug("Fetching Json Data")
    products_hash = fetch_json
    Rails.logger.debug("found #{products_hash.size} json products")
    products_hash.each do |prod|
      prod.delete("id")
      product = Product.find_or_create_by_number(prod)
      Rails.logger.debug("Product #{product.number} is a new product") if product.new_record?
      status = product.update_attributes(prod)
      if status
        Rails.logger.debug("Product #{product.number} has been saved and is #{product.sold_out? ? "NOT" : ""} in stock")
      else
        Rails.logger.error("THERE WAS AN ERROR UPDATING PRODCT #{product.number}")
      end
    end
  end

  def self.fetch_json
    JSON.parse(fetch_response)
  end

  def self.fetch_response
    log_request(store_uri) do
      Net::HTTP.get(store_uri)
    end
  end

  def self.store_uri
    URI.parse(STORE_URI)
  end

  def self.log_request(uri)
    result = nil
    ms = Benchmark.ms { result = yield }
    log_info("PlanetAnthem::StoreRequest", ms, uri)
    result
  end

  def self.log_info(name, ms, uri)
    return unless defined?(Rails.logger)
    Rails.logger.debug { "%s (%.1fms) %s" % [name, ms, uri] }
  end

  def sold_out?
    qoh < 1
  end

  def price=(val)
    self.cents = val.to_money.cents
  end

  def price
    Money.new(cents)
  end

end
