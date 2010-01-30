# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_planet_anthem2_session',
  :secret      => '96c4b17f5c75f6077fe5fce7c24131abca3a9227405256eaf458933c6cb73837dd4dfc70e734426941e463a79159ff21ed896db50ee862775a6abddf8cf34955'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
