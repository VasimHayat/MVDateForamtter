

/** 
   * mv date format 
   *         {String} pattern
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
   *  Escape character is ~. Example: MVDateFormatter.format(new Date(), "~Y~m~d i~s ~md");
   */ 


function MVDateFormatter(){

    this.weekFullEn = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"],

        this.monthFullEn = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"],


        this.dateSuffix = [
            "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th",
            "th", "th", "th", "th", "th", "th", "th", "th", "th", "th",
            "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"],

        this.format = function (d, pattern) {
            if (typeof pattern != "string") return;
            var dYear = d.getFullYear();
            var dMonth = d.getMonth();
            var dDate = d.getDate();
            var dDay = d.getDay();
            var dHours = d.getHours();
            var dMinutes = d.getMinutes();
            var dSeconds = d.getSeconds();
            var res = "";
            for (var i = 0, len = pattern.length; i < len; i++) {
                var c = pattern.charAt(i);
                switch (c) {
                    case "~":
                        if (i == len - 1) break;
                        res += pattern.charAt(++i);
                        break;
                    case "Y": res += dYear; break;
                    case "y": res += dYear.toString().substr(2, 2); break;

                    case "m": res += this.preZero(dMonth + 1); break;
                    case "M": res += dMonth + 1; break;
                    case "F": res += monthFullEn[dMonth]; break;
                    case "f": res += monthFullEn[dMonth].substr(0, 3); break;


                    case "N": res += this.isoDay(dDay); break

                    case "d": res += this.preZero(dDate); break;
                    case "D": res += dDate; break;
                    case "w": res += dDay; break;

                    case "W": res += weekFullEn[dDay]; break;
                    case "v": res += weekFullEn[dDay].substr(0, 3); break;


                    case "a": res += this.ampm(dHours); break;
                    case "A": res += this.ampm(dHours).toUpperCase(); break;
                    case "H": res += this.preZero(dHours); break;
                    case "h": res += this.preZero(this.from24to12(dHours)); break;
                    case "g": res += this.from24to12(dHours); break;
                    case "G": res += dHours; break;
                    case "i": res += this.preZero(dMinutes); break;
                    case "s": res += this.preZero(dSeconds); break;
                    case "t": res += this.lastDayOfMonth(d); break;
                    case "L": res += this.isLeapYear(dYear); break;
                    case "z": res += this.dateCount(dYear, dMonth, dDate); break;
                    case "S": res += this.dateSuffix[dDate - 1]; break;
                    default: res += c; break;
                }
            }
            return res;
        }

    this.preZero = function (value) {
        return (parseInt(value) < 10) ? "0" + value : value;
    },

        this.from24to12 = function (hours) {
            return (hours > 12) ? hours - 12 : hours;
        },

        this.ampm = function (hours) {
            return (hours < 12) ? "am" : "pm";
        },

        this.isoDay = function (day) {
            return (day == 0) ? "7" : day;
        },

        this.lastDayOfMonth = function (dateObj) {
            var tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);
            tmp.setTime(tmp.getTime() - 1);
            return tmp.getDate();
        },

        this.isLeapYear = function (year) {
            var tmp = new Date(year, 0, 1);
            var sum = 0;
            for (var i = 0; i < 12; i++) {
                tmp.setMonth(i);
                sum += this.lastDayOfMonth(tmp);
            }
            return (sum == 365) ? "0" : "1";
        },

        this.dateCount = function (year, month, date) {
            var tmp = new Date(year, 0, 1);
            var sum = -1;
            for (var i = 0; i < month; i++) {
                tmp.setMonth(i);
                sum += this.lastDayOfMonth(tmp);
            }
            return sum + date;
        }
}
  

const mvDateFormatter = new MVDateFormatter();
Date.prototype.format = function (dateFmt) {  
    return mvDateFormatter.format(this, dateFmt);
}
  
