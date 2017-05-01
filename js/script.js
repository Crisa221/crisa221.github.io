// sidebar
var mySidebar = document.getElementById("mySidebar");

// effetto overlay sul div-overlay
var overlayBg = document.getElementById("myOverlay");

//toglie effetti da far vedere insomma bla bla
function w3_open(){
  if (mySidebar.style.display === 'block'){
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "none";
  }
}

// chiusura della sidebar con il bottone....WOW che figata
function w3_close(){
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
