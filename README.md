# MVDateForamtter
MVDateForamtter

Install -  npm i mvdateformatter

Use - new Date().format("m/d/y");


Date Format Options


    *  Y : A full numeric representation of a year, 4 digits
     *  y : A two digit representation of a year 

   *  m : Numeric representation of a month, with leading zeros
   *  M : Numeric representation of a month, without leading zeros
   *  N : A full textual representation of a month, such as January or March
   *  n : A short textual representation of a month, three letters
  
   *  N : ISO-8601 numeric representation of the day of the week 
   *  d : Day of the month, 2 digits with leading zeros
   *  e : Day of the month without leading zeros
   *  w : Numeric representation of the day of the week
   *  W : A full textual representation of the day of the week
   *  D : A textual representation of a day, three letters 
   
   *  g : 12-hour format of an hour without leading zeros
   *  G : 24-hour format of an hour without leading zeros
   *  h : 12-hour format of an hour with leading zeros
   *  H : 24-hour format of an hour with leading zeros
   *  i : Minutes with leading zeros
   *  s : Seconds, with leading zeros
   *  a : Lowercase Ante meridiem and Post meridiem (am or pm)
   *  A : Uppercase Ante meridiem and Post meridiem AM or PM
   *  S : English ordinal suffix for the day of the month, 2 characters
   *  z : The day of the year (starting from 0)
   *  t : Number of days in the given month
   *  L : Whether it's a leap year
   *  Escape character is ~ Example: MVDateFormatter.format(new Date(), " ~ Y ~ m ~ d i ~ s ~ md");
