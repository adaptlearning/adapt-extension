import Adapt from 'core/js/adapt';
import Backbone from 'backbone';
import ExtensionView from 'extensions/adapt-extension/js/ExtensionView';

export default class Extension extends Backbone.Controller {
  initialize() {
    // Listen to when the data is all loaded
    this.listenTo(Adapt, 'app:dataReady', this.onDataReady);
  }

  onDataReady() {
    console.log('Plugin has loaded and data is ready');
  }
}
