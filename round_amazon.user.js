// ==UserScript==
// @match http://*.amazon.com/*
// ==/UserScript==

var node = document
var prices = node.getElementsByClassName("priceLarge")
for (i = 0; i <= (prices.length - 1); i++)
{
tempPrice = prices[i].innerText.substr(1)
tempPrice *= 2
tempPrice = Math.round(tempPrice)
tempPrice /= 2
prices[i].innerText = "$" + tempPrice.toFixed(2)
}
var prices = node.getElementsByClassName("red t14")
for (i = 0; i <= (prices.length - 1); i++)
{
tempPrice = prices[i].innerText.substr(1)
tempPrice *= 2
tempPrice = Math.round(tempPrice)
tempPrice /= 2
prices[i].innerText = "$" + tempPrice.toFixed(2)
}