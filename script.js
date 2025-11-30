// Hero lizard burst entry and chaos
window.addEventListener('DOMContentLoaded', function() {
  var lizards = document.querySelectorAll('.lizard-gallery img');
  lizards.forEach(function(lizard, i) {
    setTimeout(function() {
      lizard.style.transform = `scale(1.41) rotate(${(i-2)*18}deg)`;
      lizard.style.filter = "brightness(2.05) drop-shadow(0 0 140px #ffd700)";
      setTimeout(function() {
        lizard.style.transform = "";
        lizard.style.filter = "";
      }, 650);
    }, 180 + i*160);
  });
  // Chaotic infinite pulse for center lizard
  var centerLizard = lizards[2];
  if(centerLizard) {
    let up = true;
    setInterval(function() {
      centerLizard.style.transform = up ? "scale(1.18) rotate(-8deg)" : "scale(1.22) rotate(7deg)";
      centerLizard.style.filter = up ? "brightness(1.6) drop-shadow(0 0 84px #e6242e)" : "brightness(2.0) drop-shadow(0 0 120px #ffd700)";
      up = !up;
    }, 1000);
  }
});

// Wiggle and bling for hero buttons even on page load
window.addEventListener('DOMContentLoaded', function() {
  var heroBtns = document.querySelectorAll('.hero-btn');
  heroBtns.forEach(function(btn, i){
    let tick=0;
    setInterval(function(){
      btn.style.transform = `scale(1.${tick%3+1}) rotate(${(tick%8)-4}deg)`;
      btn.style.boxShadow = tick%2==0 ?
        "0 0 45px 19px #ffd700, 0 0 30px 9px #e6242e" :
        "0 0 68px 32px #1fe6ff, 0 0 17px 5px #ffd700";
      tick++;
    }, 410 + i*97);
  });
});
