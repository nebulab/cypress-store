require 'database_cleaner'
require "factory_bot"
require "spree/testing_support/factories"
require "carmen"

Dir[Rails.root.join("spec", "support", "factories", "**", "*.rb")].each { |f| require f }

FactoryBot.find_definitions
