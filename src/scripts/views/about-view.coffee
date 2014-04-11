_ = require 'underscore'
Backbone = require 'backbone'
Backbone.$ = require 'jquery'
Marionette = require 'backbone.marionette'

module.exports = Marionette.ItemView.extend

    template: require '../templates/about-view'

    initialize: ->


    serializeData: ->
        {
        title: 'About GrokEarth'
        description: 'Just a little blurb about GrokEarth.'
        }
