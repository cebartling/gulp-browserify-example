_ = require 'underscore'
Backbone = require 'backbone'
Backbone.$ = require 'jquery'
Marionette = require 'backbone.marionette'
HomeView =  require '../views/home-view'
ContactsView =  require '../views/contacts-view'
AboutView =  require '../views/about-view'

module.exports = Marionette.AppRouter.extend

    routes:
        'home': 'showHome'
        'contacts': 'showContacts'
        'about': 'showAbout'

    showHome: ->
        view = new HomeView(el: 'div.main-content')
        view.render()

    showContacts: ->
        view = new ContactsView(el: 'div.main-content')
        view.render()

    showAbout: ->
        view = new AboutView(el: 'div.main-content')
        view.render()

