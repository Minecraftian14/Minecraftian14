// https://stackoverflow.com/a/4673436
if (!String.format) {
  String.format = function (format) {
    let args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
  };
}

// https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
if (!String.escapeRegExp) {
  String.escapeRegExp = function (string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  };
}

// https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
if (!String.replaceAll) {
  String.replaceAll = function (str, find, replace) {
    return str.replace(new RegExp(String.escapeRegExp(find), 'g'), replace);
  };
}


if (!String.makeTitlable) {
  String.makeTitlable = function (str) {
    let fin = "";
    let flag_wasLastCharCollapsed = false;
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (/^[^a-zA-Z\d ]$/.test(ch)) {
        if (flag_wasLastCharCollapsed) continue;
        flag_wasLastCharCollapsed = true;
        fin += ' ';
      } else {
        flag_wasLastCharCollapsed = false;
        if (i > 0 && /^[A-Z]$/.test(ch) && /[^ A-Z]/.test(str.charAt(i - 1)))
          fin += ' ';
        fin += ch;
      }
    }
    fin = fin.replace(new RegExp('[ ]+', 'g'), " ");
    return fin;
  };
}
