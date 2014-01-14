var Picker = require('ribcage-picker')
  , cal = require('node-calendar')
  , Calendar = new cal.Calendar()
  , each = require('lodash.foreach')
  , keys = require('lodash.keys')
  , DatePicker
  , createDays
  , createMonths
  , createYears
  , MIN_YEAR = 1970;

DatePicker = function (opts) {
  opts = opts || {};

  var slots = {}
    , picker
    , allowFuture = !!opts.allowFuture
    , defaultDate = opts.defaultDate || new Date()
    , years = createYears(allowFuture)
    , months = createMonths()
      // node-calendar months are 1 indexed, but date is 0-indexed
    , days = createDays(defaultDate.getMonth() + 1, defaultDate.getFullYear());

  slots.month = {
    values: months
  , defaultKey: keys(months)[defaultDate.getMonth()]
  };

  slots.day = {
    values: days
  , defaultKey: defaultDate.getDate()
  };

  slots.year = {
    values: years
  , defaultKey: defaultDate.getFullYear()
  };

  picker = new Picker({
    slots: slots
  , offsetParent: opts.offsetParent
  , onChange: function (newSelection, key, slot) {
      if(key && slot) {
        this.trigger('change:' + key, newSelection[key], slot, key);
      }
      else {
        this.trigger('change', newSelection);
      }

      if(key == 'month' || key == 'year') {
        picker.setSlot('day', {values: createDays(newSelection.month.value, newSelection.year.value)});
      }
    }
  });

  return picker;
};

createYears = function (allowFuture) {
  var max_year = (new Date()).getFullYear()
    , ret = {};

  if(allowFuture) {
    max_year = 2112;
  }

  for(var i = MIN_YEAR, ii = max_year; i<=ii; ++i) {
    ret[i] = i;
  }

  return ret;
};

createMonths = function () {
  var ret = {};

  ret['January'] =    cal.JANUARY;
  ret['Feburary'] =   cal.FEBRUARY;
  ret['March'] =      cal.MARCH;
  ret['April'] =      cal.APRIL;
  ret['May'] =        cal.MAY;
  ret['June'] =       cal.JUNE;
  ret['July'] =       cal.JULY;
  ret['August'] =     cal.AUGUST;
  ret['September'] =  cal.SEPTEMBER;
  ret['October'] =    cal.OCTOBER;
  ret['November'] =   cal.NOVEMBER;
  ret['December'] =   cal.DECEMBER;

  return ret;
};

createDays = function (month, year) {
  var days = Calendar.itermonthdays(year, month)
    , ret = {}
    , val;

  for(var i=0, ii=days.length; i<ii; ++i) {
    val = days[i];

    if(val)
      ret[val] = val;
  }

  return ret;
};

module.exports = function RibcageDatePicker () {
  function F() { return DatePicker.apply(this, arguments); }
  F.prototype = DatePicker.prototype;
  return new F();
};
