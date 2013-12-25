var DatePicker = require('../../datePicker')
  , Ribcage = require('ribcage-view')
  , AppView
  , App;

AppView = Ribcage.extend({
  template: require('./app.hbs')
, afterInit: function () {
    this.picker = new DatePicker({
      allowFuture: false
    });
  }
, afterRender: function () {
    var self = this;

    this.stopListening(this.picker);
    this.appendSubview(this.picker, this.$('.spinholder'));
    this.picker.render();
    this.picker.delegateEvents();

    this.listenTo(this.picker, 'change', function () {
      self.$('.date').text(self.context().date.toString());
    });
  }
, context: function () {
    var vals = this.picker.getValues();

    return {
      date: vals.month.value + '/' + vals.day.value + '/' + vals.year.value
    };
  }
});

App = new AppView({});
document.body.appendChild(App.el);
App.el.id = 'app';
App.render();
