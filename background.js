chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: [
    	"*://*.deredactie.be/*",
    	"*://*.vrt.be/vrtnws/*",
    	"*://*.demorgen.be/*",
    	"*://*.standaard.be/*",
    	"*://*.hln.be/*"
    ]},
    ["blocking"]
);