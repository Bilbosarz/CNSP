// Chaotic wiggle for hero lizard images EVEN ON PAGE LOAD
window.addEventListener('DOMContentLoaded', function() {
  var lizards = document.querySelectorAll('.lizard-gallery img');
  lizards.forEach(function(lizard, i) {
    // Staggered initial "pop-in" effect (bigger/zoom with rotation)
    setTimeout(function() {
      lizard.style.transform = `scale(1.35) rotate(${(i-2)*17}deg)`;
      lizard.style.filter = "brightness(1.45) drop-shadow(0 0 90px #ffd700)";
      setTimeout(function() {
        lizard.style.transform = "";
        lizard.style.filter = "";
      }, 580);
    }, 200 + i*180);
  });

  // Chaotic infinite hover pulse for center lizard
  var centerLizard = lizards[2];
  if(centerLizard) {
    let up = true;
    setInterval(function() {
      centerLizard.style.transform = up ? "scale(1.17) rotate(-8deg)" : "scale(1.22) rotate(7deg)";
      centerLizard.style.filter = up ? "brightness(1.34) drop-shadow(0 0 44px #e6242e)" : "brightness(1.46) drop-shadow(0 0 70px #ffd700)";
      up = !up;
    }, 1100);
  }
});

// Fun infinite wiggle on buttons (on page load, in addition to CSS)
window.addEventListener('DOMContentLoaded', function() {
  var heroBtns = document.querySelectorAll('.hero-btn');
  heroBtns.forEach(function(btn, i){
    let tick=0;
    setInterval(function(){
      btn.style.transform = `scale(1.${tick%3+1}) rotate(${(tick%8)-4}deg)`;
      btn.style.boxShadow = tick%2==0 ?
        "0 0 38px 16px #ffd700, 0 0 21px 4px #e6242e" :
        "0 0 58px 24px #1fe6ff, 0 0 9px 5px #ffd700";
      tick++;
    }, 430 + i*101);
  });
});
