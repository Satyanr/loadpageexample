const loadpage = document.getElementById("loadpage");
const landing = document.getElementById("LandingPage");


var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("percent");
    var width = 0;
    var id = setInterval(frame, 100);

    function frame() {
      if (width >= 100) {
      	loadpage.style.display = "none";
      	landing.style.display = "flex";
        clearInterval(id);
      } else {
        width++;
        elem.innerHTML = width  + "%";
      }
    }
  }
}
