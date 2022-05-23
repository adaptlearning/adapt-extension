import Adapt from 'core/js/adapt';
import Backbone from 'backbone';

export default class ExtensionView extends Backbone.View {

  className() { return 'extension'; }

  initialize() {
    // Listen to Adapt 'remove' event which is called
    // when navigating through the router
    // This cleans up zombie views and prevents memory leaks
    this.listenTo(Adapt, 'remove', this.remove);
    // On initialize start the render process
    this.preRender();
    this.render();
  }

  events() {
    return {
      'click .clickableElement': 'onElementClicked'
    };
  }

  preRender() {}

  render() {
    // Convert model data into JSON
    const data = this.model.toJSON();
    // Get handlebars template
    const template = Handlebars.templates.extension;
    // Push data into template and append template
    this.$el.html(template(data)).appendTo('#wrapper');
    // Defer is used here to make sure the template has rendered
    // before calling postRender
    // This way postRender can manipulate this view after it has
    // been rendered
    _.defer(() => {
      this.postRender();
    });

    // Return this so we can change the render method
    // this.render().$el.addClass('explode');
    return this;

  }

  postRender() {}

}
