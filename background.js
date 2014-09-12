
var a,b,intervalId;

chrome.app.window.create('/html/a.html', {
  id: 'a',
  frame: 'none',
  singleton: true,
  resizable: true,
  bounds: {
    left: 100,
    top: 100,
    width: 300,
    height: 300,
  }
}, function(w) {
  console.log("Created Window A");
  a = w;
});


chrome.app.window.create('/html/b.html', {
  id: 'b',
  frame: 'none',
  singleton: true,
  resizable: true,
  alwaysOnTop: true,
  bounds: {
    left: window.screen.availWidth - 400,
    top: 100,
    width: 300,
    height: 300,
  }
}, function(w) {
  console.log("Created Window B");
  b = w;
});

console.log("Started TWindows");

intervalId = setInterval(function() {
  // Show window b and only window b without stealing focus.
  b.show(false);
}, 5000);
