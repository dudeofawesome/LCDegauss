// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('Degaussing ' + tab.url + "!");

	var script = "var a = document.createElement(\"span\");" +
				 "a.id=\"deguassSoundURL\";" +
				 "a.style.display=\"none\";" +
				 "document.body.appendChild(a);" +
				 "document.getElementById(\"deguassSoundURL\").innerHTML=\"" + chrome.extension.getURL("resources/degauss.ogg") + "\";";
	chrome.tabs.executeScript({
		code: script
	});

	chrome.tabs.executeScript({
		file: 'resources/client.js'
	});

	chrome.tabs.insertCSS({
		file: "resources/style.css"
	});

	// var dgSFX = new Audio();
	// dgSFX.src = "resources/degauss.ogg";
	// window.setTimeout(function () {
	// 	dgSFX.play();
	// }, 1500);
	// dgSFX.play();
});