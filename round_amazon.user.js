// ==UserScript==
// @name amazon_round
// @match http://*.amazon.com/*
// @description Rounds prices on Amazon to the nearest half-dollar
// @author sigloiv
// ==/UserScript==

var node2 = document

function roundPricesForClass(className)
{
	var prices = node2.getElementsByClassName(className)
	for (i = 0; i <= (prices.length - 1); i++) {
		if (prices[i].innerText.match(/\$[0-9]*\.[0-9][0-9]/)) {
			tempPrice = prices[i].innerText.match(/\$[0-9]*\.[0-9][0-9]/)[0].substr(1)
			tempPrice *= 2
			tempPrice = Math.round(tempPrice)
			tempPrice /= 2
			prices[i].innerText = prices[i].innerText.replace(/\$[0-9]*\.[0-9][0-9]/, "$" + tempPrice.toFixed(2))
		}
	}
}

roundPricesForClass("price")
roundPricesForClass("priceLarge")
roundPricesForClass("red t14")
roundPricesForClass("listprice")