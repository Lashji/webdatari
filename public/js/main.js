
 var p = window.location.pathname;
 var root = document.getElementsByTagName("body")[0];

  if (p.length === 0 || p === "/" || p.match(/^\/?index/)){
    root.style.backgroundImage = 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url("/images/background1.jpg")';
    
    console.log("on index");
} else {
    root.style.backgroundImage = "none";
}

