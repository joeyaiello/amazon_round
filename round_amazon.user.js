// ==UserScript==
// @match http://*.amazon.com/*
// ==/UserScript==


var node = document

function roundPricesForClass(className)
{
var prices = node.getElementsByClassName(className)
for (i = 0; i <= (prices.length - 1); i++) {
	tempPrice = prices[i].innerText.substr(1)
	tempPrice *= 2
	tempPrice = Math.round(tempPrice)
	tempPrice /= 2
	prices[i].innerText = "$" + tempPrice.toFixed(2)
	}
}

roundPricesForClass("priceLarge")
roundPricesForClass("red t14")
