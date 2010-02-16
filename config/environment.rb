# Be sure to restart your server when you modify this file

# Specifies gem version of Rails to use when vendor/rails is not present
RAILS_GEM_VERSION = '2.3.5' unless defined? RAILS_GEM_VERSION

# Bootstrap the Rails environment, frameworks, and default configuration
require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  # Settings in config/environments/* take precedence over those specified here.
  # Application configuration should go into files in config/initializers
  # -- all .rb files in that directory are automatically loaded.

  # Add additional load paths for your own custom dirs
  config.load_paths += %W( #{RAILS_ROOT}/app/presenters )

  # Specify gems that this application depends on and have them installed with rake gems:install
  # config.gem "bj"
  # config.gem "hpricot", :version => '0.6', :source => "http://code.whytheluckystiff.net"
  # config.gem "sqlite3-ruby", :lib => "sqlite3"
  # config.gem "aws-s3", :lib => "aws/s3"

  # Only load the plugins named here, in the order given (default is alphabetical).
  # :all can be used as a placeholder for all plugins not explicitly named
  # config.plugins = [ :exception_notification, :ssl_requirement, :all ]

  # Skip frameworks you're not going to use. To use Rails without a database,
  # you must remove the Active Record framework.
  # config.frameworks -= [ :active_record, :active_resource, :action_mailer ]

  # Activate observers that should always be running
  # config.active_record.observers = :cacher, :garbage_collector, :forum_observer

  # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
  # Run "rake -D time" for a list of tasks for finding time zone names.
  config.time_zone = 'UTC'
  config.gem 'haml', :lib => 'haml', :version => '>=2.2.0'

  # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
  # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}')]
  # config.i18n.default_locale = :de
end

Sass::Plugin.options[:template_location] = File.join(RAILS_ROOT,"app","stylesheets")

=begin
sprites
"./signed_CD-biscuits_remix_your_song_tile.jpg :background-position 36"
"./signed_CD-dinner_tile.jpg :background-position 54"
"./signed_CD-drum_lesson_tile.jpg :background-position 72"
"./signed_CD-eagles_game_tile.jpg :background-position 90"
"./signed_CD-encephalous_crime_tile.jpg :background-position 108"
"./signed_CD-golfcart_ride_tile.jpg :background-position 126"
"./signed_CD-guitar_lesson_tile.jpg :background-position 144"
"./signed_CD-hand_guitar_tile.jpg :background-position 162"
"./signed_CD-house_show_tile.jpg :background-position 180"
"./signed_CD-keyboard_lesson_tile.jpg :background-position 198"
"./signed_CD-limited_edition_tshirt_tile.jpg :background-position 216"
"./signed_CD-live_download_tile.jpg :background-position 234"
"./signed_CD-open_for_db_tile.jpg :background-position 252"
"./signed_CD-play_during_actual_show_tile.jpg :background-position 270"
"./signed_CD-play_during_soundcheck_tile.jpg :background-position 288"
"./signed_CD-poster_tile.jpg :background-position 306"
"./signed_CD-prank_call_tile.jpg :background-position 324"
"./signed_CD-setlist_tile.jpg :background-position 342"
"./signed_CD-shots_tile.jpg :background-position 360"
"./signed_CD-side_stage_access_tile.jpg :background-position 378"
"./signed_CD-sing_on_record_tile.jpg :background-position 396"
"./signed_CD-sing_with_friends_tile.jpg :background-position 414"
"./signed_CD-song_request_tile.jpg :background-position 432"
"./signed_CD-tennis_tile.jpg :background-position 450"
"./signed_CD-ticket_access_one_year_tile.jpg :background-position 468"
"./signed_CD-voicemail_tile.jpg :background-position 486"
"./signed_CD-your_face_on_website_tile.jpg :background-position 504"
"./signed_CD_tile.jpg :background-position 522"
"./signed_CD_tile_tile.jpg :background-position 540"
"./TLA-CD_release_show-3.15_tile.jpg :background-position 558"
"./TLA-CD_release_show-3.16_tile.jpg :background-position 576"
=end