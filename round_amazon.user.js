// ==UserScript==
// @name amazon_round
// @match http://*.amazon.com/*
// @description Rounds prices on Amazon to the nearest half-dollar
// @author sigloiv
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

roundPricesForClass("price")
roundPricesForClass("priceLarge")
roundPricesForClass("red t14")
roundPricesForClass("listprice")