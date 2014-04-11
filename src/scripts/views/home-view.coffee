_ = require 'underscore'
Backbone = require 'backbone'
Backbone.$ = require 'jquery'
Marionette = require 'backbone.marionette'

module.exports = Marionette.ItemView.extend

    template: require '../templates/Home-view'

    initialize: ->


    serializeData: ->
        {
            title: 'GrokEarth Home'
            description: 'The home for GrokEarth'
        }
