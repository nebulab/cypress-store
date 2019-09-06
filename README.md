# Cypress For Ruby on Rails Developers

![cypress for rails developers logo](https://raw.githubusercontent.com/twist900/cypress-store/master/logo.png)

[![CircleCI](https://circleci.com/gh/twist900/cypress-store.svg?style=svg)](https://circleci.com/gh/twist900/cypress-store)

This repository hosts the source code for my [Cypress For Ruby on Rails Developers](https://nebulab.it/blog/cypress-for-rails-developers/) article.

## Installation

Install Ruby dependencies:

    $ bundle

Install Node dependencies:

    $ yarn

Setup the database:

    $ bundle exec rake db:setup

## Run Cypress tests

Start the server in a test environment on port 5002:

    $ bin/rails server -e test -p 5002

Start the Cypress test runner:

    $ yarn cypress open --project ./spec
