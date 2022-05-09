import Adapt from 'core/js/adapt';
import Backbone from 'backbone';
import ExtensionView from 'extensions/adapt-extension/js/adapt-extensionView';

export default class Extension extends Backbone.Controller {
  initialize() {
    // Listen to when the data is all loaded
    Adapt.listenTo('app:dataReady', function() {
      console.log('Plugin has loaded and data is ready');
    });
  }
}
