### Momentjs .fromNow() alternative

 The Moment.js library documents the "buckets" into which the "FROM NOW" deltas fall.
 To mimic this logic using milliseconds since epoch, let's calculate rough estimates of
 all the offsets. Then, we simply need to find the lowest matching bucket.
 --
 https://momentjs.com/docs/#/displaying/fromnow/
 0 to 44 seconds --> a few seconds ago
 45 to 89 seconds --> a minute ago
 90 seconds to 44 minutes --> 2 minutes ago ... 44 minutes ago
 45 to 89 minutes --> an hour ago
 90 minutes to 21 hours --> 2 hours ago ... 21 hours ago
 22 to 35 hours --> a day ago
 36 hours to 25 days --> 2 days ago ... 25 days ago
 26 to 45 days --> a month ago
 45 to 319 days --> 2 months ago ... 10 months ago
 320 to 547 days (1.5 years) --> a year ago
 548 days+ --> 2 years ago ... 20 years ago
 --
 Here are the bucket delimiters in milliseconds:
 var MS_SECOND = 1000;
var MS_MINUTE = MS_SECOND * 60;
var MS_HOUR = MS_MINUTE * 60;
var MS_DAY = MS_HOUR * 24;
var MS_MONTH = MS_DAY * 30; // Rough estimate.
var MS_YEAR = MS_DAY * 365; // Rough estimate.


var FROM_NOW_JUST_NOW = MS_SECOND * 44;
var FROM_NOW_MINUTE = MS_SECOND * 89;
var FROM_NOW_MINUTES = MS_MINUTE * 44;
var FROM_NOW_HOUR = MS_MINUTE * 89;
var FROM_NOW_HOURS = MS_HOUR * 21;
var FROM_NOW_DAY = MS_HOUR * 35;
var FROM_NOW_DAYS = MS_DAY * 25;
var FROM_NOW_MONTH = MS_DAY * 45;
var FROM_NOW_MONTHS = MS_DAY * 319;