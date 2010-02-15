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

  def html_class
    description.split(" ").last.try(:underscore)
  end

  def image_name
    case description
      when "Signed CD"
        "signed_CD.jpg"
      when "Signed CD and Limited Edition Tshirt"
        "signed_CD-limited_edition_tshirt.jpg"
      when "Signed CD and Limited Edition Poster"
        "signed_CD-poster.jpg"
      when "Signed CD and Dinner with Magner in an any City"
        "signed_CD-dinner.jpg"
      when "Signed CD and Drum Lesson with Allen before a show"
        "signed_CD-drum_lesson.jpg"
      when "Signed CD and Brownie Leaves your Outgoing Voicemail Message"
        "signed_CD-voicemail.jpg"
      when "Signed CD and write setlist with Marc for one show"
        "signed_CD-setlist.jpg"
      when "Signed CD and song request any show"
        "signed_CD-song_request.jpg"
      when "Signed CD and Hand Barber Gubson Guitar on Stage"
        "signed_CD-hand_guitar.jpg"
      when "Signed CD and Shots of Jameson with Magner (Magner buys the shots)"
        "signed_CD-shots.jpg"
      when "Signed CD and First Initial Pressing of Biscuits first CD Encephalous Crime"
        "signed_CD-encephalous_crime.jpg"
      when "Signed CD and Prank Call the Umphreys Guys with the Biscuits Help"
        "signed_CD-prank_call.jpg"
      when "Signed CD and Play a song with the band during soundcheck"
        "signed_CD-play_during_soundcheck.jpg"
      when "Signed CD and play a song with the band during an actual show!"
        "signed_CD-play_during_actual_show.jpg"
      when "Signed CD and sidestage access at any show (Space Permitting and must still buy tickets)"
        "signed_CD-side_stage_access.jpg"
      when "Signed CD and After Show Pass"
        "signed_CD-after_show_access.jpg"
      when "Signed CD and Guitar Lesson with Barber at any show"
        "signed_CD-guitar_lesson.jpg"
      when "Signed CD and Bass Lesson with Brownstein at any show"
        "signed_CD-bass_lesson.jpg"
      when "Signed CD and Keyboard Lesson with Magner at any show"
        "signed_CD-keyboard_lesson.jpg"
      when "Signed CD and golf cart ride with Brownstein at Camp Bisco"
        "signed_CD-golfcart_ride.jpg"
      when "Signed CD and open for the biscuits at a show"
        "signed_CD-open_for_db.jpg"
      when "Signed CD and ticket access to all shows for a year"
        "signed_CD-ticket_access_one_year.jpg"
      when "Signed CD and Disco Biscuits will play a show at your house"
        "signed_CD-house_show.jpg"
      when "Signed CD and Sing on Next Biscuits Record"
        "signed_CD-sing_on_record.jpg"
      when "Signed CD and get free live download of any show"
        "signed_CD-live_download.jpg"
      when "Signed CD and your face is front of Disco Biscuits website for a day"
        "signed_CD-your_face_on_website.jpg"
      when "Signed CD and Disco Biscuits will Remix Your Song"
        "signed_CD-biscuits_remix_your_song.jpg"
      when "Signed CD and Tennis VS Barber"
        "signed_CD-tennis.jpg"
      when "Signed CD and Eagles Game with Magner (includes ticket)"
        "signed_CD-eagles_game.jpg"
      when "Signed CD and friends on stage to sing the \"HOOOOOOOOOOOOOO\" part in Basis at Camp Bisco (max 5 people)"
        "signed_CD-sing_with_friends.jpg"
      when "New CD and Ticket to CD Release Party Show at TLA in Philly on Monday 3/15"
        "TLA-CD_release_show-3.15.jpg"
      when "New CD and Ticket to CD Release Party Show at TLA in Philly on Tuesday 3/16"
        "TLA-CD_release_show-3.16.jpg"
      else
        ""
    end
  end

end
