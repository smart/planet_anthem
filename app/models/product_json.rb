require 'net/http'
require 'json'
require 'money'
class ProductJson
  attr_accessor :number, :description, :cents, :qoh, :cents, :store_id
  STORE_URI = "http://store.discobiscuits.com/pre_order.json"

  def self.all
    Rails.logger.debug("Fetching Json Data")
    products_hash = fetch_json
    Rails.logger.debug("found #{products_hash.size} json products")
    products_hash.collect do |prod|
      prod["store_id"] = prod.delete("id")
      ProductJson.new(prod)
    end[0...2500]
  end

  def initialize(attrs = {})
    attrs.each do |k,v|
      self.send("#{k}=", v)
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
    qoh.to_i < 1
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

  def image_path
    "products/#{image_name}.jpg"
  end

  def mosaic_image_path
    RAILS_ROOT + "/public/images/products/mosaic/#{image_name}_tile.jpg"
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
      when "Signed CD and hand Jon the Becker on Stage"
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
      when "Signed CD and Hot Air Balloon Ride With Band"
        "signed_CD-hab"
      when "Signed CD and Marc manages your Facebook page for 24 hours"
        "signed_CD-facebook"
      when "Signed CD and Johnny R. Goode runs lights at your office"
        "signed_CD-lights"
      when "Signed CD and Magner sits on the toilet in your dorm room while you interview him for your school paper"
        "signed_CD-toilet"
      when "Signed CD and Copy of Planet Anthem and a free copy of the Disco Biscuits next studio album due out in 2017"
        "signed_CD"
      when "Signed CD and Barber will hide under your bed & whisper the lyrics to Konkrete"
        "signed_CD-under_the_bed"
      when "Signed CD and Biscuits will play the Pacific Northwest"
        "signed_CD-pac_nor_west"
      when "Signed CD and Smoke medicinal marijuana with Marc Brownstein"
        "signed_CD-medical_marijuana"
      when "Signed CD and Guided tour by Barber of the air ducts at the Electric Factory"
        "signed_CD-air_duct"
      when "Signed CD and Trip with Barber post-show to a local Dunkin Donuts and a Wawa to make his \"Cake from Ultra Heaven\""
        "signed_CD-dunkin_donuts"
      when "Signed CD and Barber will explain to your kid's 2nd grade teacher that Green actually is a primary color"
          "signed_CD-primary_colors"
        else
        ""
    end
  end

end
