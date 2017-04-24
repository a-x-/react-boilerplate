import { Record, Map } from 'immutable';

export function getPageName () {
  return this.context.router.route.location.pathname.replace(/^\/|\d/g, '').replace(/\/$/, '').replace(/\//g, '-').replace(/\/$/, '') || 'index';
}

export function leftpad (width, str, char = '0') {
  const str_ = str.toString();
  const padLen = width - str_.length;
  return char.repeat(padLen > 0 ? padLen : 0) + str_;
}

export const backDomain = process.env.REACT_APP_MOCK ? undefined : '/api'; // see `< package.json jq .proxy` and prod.nginx.conf

export function get (path, opts) {
  /* eslint-disable */
  console.log('get', path, opts);
  /* eslint-enable */
  return fetch(encodeURI((backDomain || '') + path), opts).then(data => data.json());
}

export function post (path, opts) {
  return get(path, {...opts, method: 'POST'});
}

export function errorProcessor (reducer) {
  /* eslint-disable */
  return e => {
    console.log(reducer, 'error', e, new Error);
    alert(reducer + ' error\n\n' + e);
  };
  /* eslint-enable */
}

// todo: https://github.com/facebook/immutable-js/issues/1217
export function makeRecord (obj) {
  return Record(obj.toString() === '[object Object]' ? obj : obj.toJS())(obj);
}

/* eslint-disable */
// hack
Array.prototype.toArray = function toArray() {return this;};
/* eslint-enable */

// todo: https://github.com/facebook/immutable-js/issues/1218
Record.prototype.map = function RecordMap(fn) {
  return Map(this).reduce((record, val, key) => record.set(key, fn(val, key)), this);
};

Record.prototype.filter = function RecordFilter(fn) {
  return Map(this).reduce((record, val, key) => fn(val, key) ? record : record.remove(key), this);
};

export const arrayToObj = array => array.reduce((map, item) => ({...map, [item.id]: item.value}), {});

export const isSet = v => v !== '' && v !== undefined;

export const mapToQuery = map => Map(map)
  .filter(isSet)
  .map((v, k) => `${k}=${v}`)
  .join('&');
