console.log(domainName("http://google.com"));

/*
https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example
 */

function domainName(url){
    url = new URL(url,'http://'+url).hostname.toString().replace('www.',"");
    return url.substring(0,url.indexOf('.'))
}