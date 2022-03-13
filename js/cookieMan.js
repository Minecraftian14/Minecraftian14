const GITHUB_DATA = 'temp_github_user_repos_data_made_to_reduce_api_calls_only_ever';
const PERMANENT = 'pseudo_permanent_cookie_making_expiry_date_property_tag';

function setCookie(cookie_name, cookie_value, expiry /* in days */) {
  // let expiration_date = new Date();
  // if (expiry === PERMANENT)
  //   expiration_date.setFullYear(expiration_date.getFullYear() + 1);
  // else expiration_date.setTime(expiration_date.getTime() + (expiry /*dd*/ * 24 /*hh*/ * 60 /*mm*/ * 60 /*ss*/ * 1000 /*ms*/));
  // document.cookie += String.format('{0}={1}; expires={2}; paths=/',
  //   cookie_name, cookie_value, expiration_date.toUTCString());
  // console.log('Current status of cookies... = ' + document.cookie);
  localStorage.setItem(cookie_name, cookie_value);
}

function getCookie_possiblyRecreatingItAgain(cookie_name, create_value) {
  // if (!hasCookie(cookie_name))
  //   setCookie(cookie_name, create_value(), PERMANENT);
  // return getCookie(cookie_name);
  let value = localStorage.getItem(cookie_name);
  if (value == null) {
    value = create_value();
    setCookie(cookie_name, value);
  }
  return value;
}

function getCookie(cookie_name) {
  // cookie_name += "=";
  // let register = document.cookie.split(';');
  // for (let i = 0; i < register.length; i++) {
  //   let entry = register[i];
  //   while (entry.charAt(0) === ' ') entry = entry.substring(1); // Remove useless spaces
  //   if (entry.indexOf(cookie_name) === 0)
  //     return entry.substring(cookie_name.length, entry.length);
  // }
  // return "";
  return localStorage.getItem(cookie_name);
}

function hasCookie(cookie_name) {
  // let entry = getCookie(cookie_name);
  // return entry !== "";
  let value = localStorage.getItem(cookie_name);
  return value != null;
}
