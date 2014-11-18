# Knockout.Date

A simple binding to allow formatting of a date within the view

## Usage
The binding expects a date type and will output it in an optional format:
```
<div data-bind="date: someObservableDate"></div>
```

Or it can be called with a format option if you require more control over the output:
```
<div data-bind="date: { date: someObservableDate, format: 'dd MMM YY' }"></div>
```

The format specifiers can be found here:

https://code.google.com/p/datejs/wiki/FormatSpecifiers

Here is an example of what it does and how to use it.
[View Example](https://rawgithub.com/grofit/knockout.date/master/example.html)