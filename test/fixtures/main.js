var DatePicker = require('../../datePicker')
  , Ribcage = require('ribcage-view')
  , Backbone = require('backbone')
  , $ = require('jquery-browserify')
  , phantom = require('phantom-limb')
  , AppView
  , App;

Backbone.$ = $;

AppView = Ribcage.extend({
  template: require('./app.hbs')
, afterInit: function () {
    var self = this;

    this.picker = new DatePicker({
      allowFuture: false
    });

    this.listenTo(this.picker, 'change', function () {
      self.$('.date').text(self.context().date.toString());
    });
  }
, afterRender: function () {
    var self = this;

    this.appendSubview(this.picker, this.$('.spinholder'));
    this.picker.render();
  }
, context: function () {
    var vals = this.picker.getValues();

    return {
      date: vals.month.value + '/' + vals.day.value + '/' + vals.year.value
    };
  }
});

App = new AppView({
  el: $('#app')
});

window.App = App;
