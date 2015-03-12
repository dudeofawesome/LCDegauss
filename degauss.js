// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('Degaussing ' + tab.url + "!");

	// s.src = chrome.extension.getURL('resources/html2canvas.js');

	chrome.tabs.executeScript({
		file: 'resources/client.js'
	});

	chrome.tabs.insertCSS({
		file: "resources/style.css"
	});

	var dgSFX = new Audio();
	dgSFX.src = "resources/degauss.ogg";
	window.setTimeout(function () {
		dgSFX.play();
	}, 1500);
	// dgSFX.play();
});