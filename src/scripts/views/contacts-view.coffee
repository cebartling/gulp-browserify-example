_ = require 'underscore'
Backbone = require 'backbone'
Backbone.$ = require 'jquery'
Marionette = require 'backbone.marionette'

module.exports = Marionette.ItemView.extend

    template: require '../templates/contacts-view'

    initialize: ->


    serializeData: ->
        {
        title: 'GrokEarth Contacts'
        description: 'Nothing much to say here.'
        }
