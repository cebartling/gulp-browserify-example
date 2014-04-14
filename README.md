gulp-browserify-example
=======================

A small example of using gulp.js and Browserify together for a web application.  This example is based off the
[example from Dan Tello](http://viget.com/extend/gulp-browserify-starter-faq).  Thanks Dan for the foundation.
This example goes beyond what Dan put together and adds in some Bower stuff for obtaining Twitter Bootstrap 3.
Also, I had to use the browserify-shim functionality in the gulp browserify task to get the Twitter Bootstrap
JavaScript pieces working under Browserify.  Hopefully this example is helpful to others looking to do some of the
things I've done in this simple sample application.


Installation
------------

This assumes that you have Node.js installed.  If you don't, go get it for your platform of choice. The npm
tool comes with the Node.js runtime. From the root directory of this repository:

1. Install gulp globally so you have access to the gulp command: `npm install -g gulp` 
2. Install the node modules: `npm install`
3. Install Compass (assumes you have Ruby installed): `gem install compass`.  We use SASS in our example.
4. Retrieve bower components via gulp and bower: `gulp setup`.  This will pull down Twitter Bootstrap 3.x and Modernizr.
5. Build everything and serve it through gulp: `gulp`.  If Chrome doesn't automatically come up, navigate with a
browser to http://localhost:8080.

