// ==UserScript==
// @name     Filter Bubble ID Selector
// @version  1
// @grant    none
// @include  https://bubble.labs.vu.nl/data/export
// ==/UserScript==

var actions = [
	{
		keyCodeList: [17, 13], // Ctrl+Enter
		actionFunction: function(){selectIDs();}
	}
]

var keyCodeMap = {};

mapContains = function(keyCode) {
	return keyCodeMap[keyCode];
}

containsAllAndOnly = function(keyCodeList) {
	return keyCodeList.length == Object.keys(keyCodeMap).filter(item => keyCodeMap[item]).length && keyCodeList.every(mapContains);
}

onkeydown = onkeyup = function(e) {
	e = e || event; // to deal with IE
	if (e.type == 'keydown') {
		keyCodeMap[e.keyCode] = true;
	}
	keyCodeMap[e.keyCode] = e.type == 'keydown';
	actions.forEach(function(element) {
		if (containsAllAndOnly(element.keyCodeList)) {
			element.actionFunction();
		}
	});
}

selectIDs = function() {
	var idString = prompt("Please enter the list of ID's.", "Format should be ['id1','id2'...]");
	if (idString == null || idString == "") {
		alert("Something went wrong.");
	} else {
		var idList = JSON.parse(idString.replace(/'/g,"\""));
		for (var i=0; i<idList.length; i++) {
			document.getElementById("source_" + idList[i]).click();
		}
	} 
}