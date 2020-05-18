const urls = [
	"deredactie.be",
	"vrt.be/vrtnws",
	"demorgen.be",
	"standaard.be",
	"hln.be",
	"sporza.be"
].map(s => "*://*." + s + "/*");

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: urls},
    ["blocking"]
);