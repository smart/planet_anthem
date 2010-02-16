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
      prod["store_id"] = prod.delete("id")
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

  def self.recent_sell_out_ids
    find(:all, :conditions => "qoh = 0", :order => "sold_out_at desc", :limit => 300, :select => "id").map(&:id)
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

  def qoh=(value)
    if self.qoh > 1 && value.to_i == 0
      self.sold_out_at = Time.now
    end
    super(value)
  end

  def html_class
    description.split(" ").last.try(:underscore)
  end

  def image_path
    "products/#{image_name}.jpg"
  end

  def image_class
    image_name.downcase.underscore.gsub("3.15", "three_fifteen").gsub("3.16", "three_sixteen")
  end

  def image_name
    case description
      when "Signed CD"
        "signed_CD"
      when "Signed CD and Limited Edition Tshirt"
        "signed_CD-limited_edition_tshirt"
      when "Signed CD and Limited Edition Poster"
        "signed_CD-poster"
      when "Signed CD and Dinner with Magner in an any City"
        "signed_CD-dinner"
      when "Signed CD and Drum Lesson with Allen before a show"
        "signed_CD-drum_lesson"
      when "Signed CD and Brownie Leaves your Outgoing Voicemail Message"
        "signed_CD-voicemail"
      when "Signed CD and write setlist with Marc for one show"
        "signed_CD-setlist"
      when "Signed CD and song request any show"
        "signed_CD-song_request"
      when "Signed CD and Hand Barber Gubson Guitar on Stage"
        "signed_CD-hand_guitar"
      when "Signed CD and Shots of Jameson with Magner (Magner buys the shots)"
        "signed_CD-shots"
      when "Signed CD and First Initial Pressing of Biscuits first CD Encephalous Crime"
        "signed_CD-encephalous_crime"
      when "Signed CD and Prank Call the Umphreys Guys with the Biscuits Help"
        "signed_CD-prank_call"
      when "Signed CD and Play a song with the band during soundcheck"
        "signed_CD-play_during_soundcheck"
      when "Signed CD and play a song with the band during an actual show!"
        "signed_CD-play_during_actual_show"
      when "Signed CD and sidestage access at any show (Space Permitting and must still buy tickets)"
        "signed_CD-side_stage_access"
      when "Signed CD and After Show Pass"
        "signed_CD-after_show_access"
      when "Signed CD and Guitar Lesson with Barber at any show"
        "signed_CD-guitar_lesson"
      when "Signed CD and Bass Lesson with Brownstein at any show"
        "signed_CD-bass_lesson"
      when "Signed CD and Keyboard Lesson with Magner at any show"
        "signed_CD-keyboard_lesson"
      when "Signed CD and golf cart ride with Brownstein at Camp Bisco"
        "signed_CD-golfcart_ride"
      when "Signed CD and open for the biscuits at a show"
        "signed_CD-open_for_db"
      when "Signed CD and ticket access to all shows for a year"
        "signed_CD-ticket_access_one_year"
      when "Signed CD and Disco Biscuits will play a show at your house"
        "signed_CD-house_show"
      when "Signed CD and Sing on Next Biscuits Record"
        "signed_CD-sing_on_record"
      when "Signed CD and get free live download of any show"
        "signed_CD-live_download"
      when "Signed CD and your face is front of Disco Biscuits website for a day"
        "signed_CD-your_face_on_website"
      when "Signed CD and Disco Biscuits will Remix Your Song"
        "signed_CD-biscuits_remix_your_song"
      when "Signed CD and Tennis VS Barber"
        "signed_CD-tennis"
      when "Signed CD and Eagles Game with Magner (includes ticket)"
        "signed_CD-eagles_game"
      when "Signed CD and friends on stage to sing the \"HOOOOOOOOOOOOOO\" part in Basis at Camp Bisco (max 5 people)"
        "signed_CD-sing_with_friends"
      when "New CD and Ticket to CD Release Party Show at TLA in Philly on Monday 3/15"
        "TLA-CD_release_show-3.15"
      when "New CD and Ticket to CD Release Party Show at TLA in Philly on Tuesday 3/16"
        "TLA-CD_release_show-3.16"
      else
        ""
    end
  end

end
