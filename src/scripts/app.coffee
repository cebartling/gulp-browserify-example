_ = require 'underscore'
Backbone = require 'backbone'
Backbone.$ = require 'jquery'
Marionette = require 'backbone.marionette'
AppRouter = require './core/app-router'
Bootstrap = require 'twbs_bootstrap'

application = new Marionette.Application()
application.addInitializer ->
    console.log 'Creating the app router...'
    new AppRouter()
    try
        console.log 'Starting the Backbone history...'
        Backbone.history.start()
    catch exc

console.log 'Starting the application...'
application.start()
console.log 'Application has started.'


