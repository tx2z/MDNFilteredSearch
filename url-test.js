// regexp to match github repo URLs
var r = /^(#\S+)\s+|\s(#\S+)\s+/; // check on http://www.regexper.com to be sure

var passes = [
    '#azerty ',
    '#javascript WeakMap',
    ' #azerty ',
    'bla #azerty ',
    'bla #azerty #yo ',
];

var fails = [
    '#azerty', // maybe not finished yet
    'bla #azerty', // maybe not finished yet
    '# azerty ',
    'lol#',
    'lol# ',
    '#',
];
    
console.log('passes', passes.every(function(s){
    return s.match(r);
}) ? 'ok' : 'ko');
console.log('fails', fails.every(function(s){
    return !s.match(r);
}) ? 'ok' : 'ko');