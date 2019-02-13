const url = require('url');

const myUrl = new URL('http://mywebsitte.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// Host (root domain)
console.log(myUrl.host);
// Hostname 
console.log(myUrl.hostname)