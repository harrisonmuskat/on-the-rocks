source 'https://rubygems.org/'

gem 'rails', '~> 5.0.0'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'foundation-rails'
gem 'devise'

group :test do
  gem 'coveralls', require: false
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :development, :test do
  gem 'capybara'
  gem 'factory_girl_rails'
  gem 'launchy'
  gem 'pry-rails'
  gem 'rspec-rails'
  gem 'shoulda-matchers', git: 'https://github.com/thoughtbot/shoulda-matchers.git', branch: 'rails-5'
  gem 'valid_attribute'
  gem 'dotenv-rails'
  gem 'database_cleaner'
  gem 'faker'
end

group :production do
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
