var XMLHttpRequest = require('xhr2');
var request = new XMLHttpRequest();
request.open('GET', 'https://www.espn.com/nfl/story/_/id/35253675/2022-nfl-week-16-power-rankings-1-32-poll-pleasant-surprises', true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Connection complete
    var resp = request.responseText;
    var docu = document.createElement('div');
    doc.innerHTML = resp;
    document.body.appendChild(docu);
  } else {
    // Returned error 
  }
};
request.onerror = function() {
  // Connection error 
};
request.send();

