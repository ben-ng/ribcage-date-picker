ribcage-date-picker
==============

This is a widget that mimics the native "slot-machine" style pickers now ubiquitious on our mobile devices. It extends from [`ribcage-picker`](http://npmjs.org/package/ribcage-picker).

`ribcage-date-picker` is a [Backbone](http://backbonejs.org/) view, best served with the other great components in the [ribcage-ui](https://github.com/Techwraith/ribcage-ui) collection.

Yes, it correctly handles leap years!

Usage
-----

#### Creating A Quantity Picker

```js
var Picker = require('ribcage-date-picker')
  , picker;

picker = new Picker({
  allowFuture: true
, defaultDate: new Date() // Defaults to current date
});
```

### Listening for changes
```js
picker.on('change', function (selection) {
  // Do something with the current selection
  console.log(selection.day.value);   // 1-indexed day of month (1 - 28/29/30/31)
  console.log(selection.month.value); // 1-indexed month in year (1 - 12)
  console.log(selection.month.key);   // Full name of month, e.g. November
  console.log(selection.year.value);  // full year, e.g. 2112
});
```

License & Acknowledgements
--------------------------

Copyright (c) 2013 Ben Ng, http://benng.me

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
