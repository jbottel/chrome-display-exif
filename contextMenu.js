function openTab(url) {
	var link = 'http://regex.info/exif.cgi?imgurl=' + encodeURIComponent(url);
	chrome.tabs.create({"url": link});
}

function openImageInEXIF(info,tab) {
	console.log("info: " + JSON.stringify(info));
	openTab(info.srcUrl);
}

// Create one context item for each context type.

var id = chrome.contextMenus.create({"title": "Get EXIF Data", "contexts":["image"],

		"onclick": openImageInEXIF});

