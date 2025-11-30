// Bursty chaos: Lizards and buttons get randomized "wiggle"
window.addEventListener('DOMContentLoaded', function() {
  var lizards = document.querySelectorAll('.lizard-gallery img');
  lizards.forEach(function(lizard, i) {
    setTimeout(function() {
      lizard.style.transform = `scale(1.39) rotate(${(i-2)*18}deg)`;
      lizard.style.filter = "brightness(2.15) drop-shadow(0 0 180px #ffd700)";
      setTimeout(function() {
        lizard.style.transform = "";
        lizard.style.filter = "";
      }, 690);
    }, 210 + i*133);
  });
  // Extra chaos for center lizard
  var centerLizard = lizards[2];
  if(centerLizard) {
    let up = true;
    setInterval(function() {
      centerLizard.style.transform = up ? "scale(1.19) rotate(-12deg)" : "scale(1.22) rotate(18deg)";
      centerLizard.style.filter = up ? "brightness(1.9) drop-shadow(0 0 118px #e6242e)" : "brightness(2.11) drop-shadow(0 0 160px #ffd700)";
      up = !up;
    }, 1200);
  }
});

// Buttons sparkle, wiggle, flash
window.addEventListener('DOMContentLoaded', function() {
  var heroBtns = document.querySelectorAll('.hero-btn');
  heroBtns.forEach(function(btn, i){
    let tick=0;
    setInterval(function(){
      btn.style.transform = `scale(1.${tick%3+1}) rotate(${(tick%14)-7}deg)`;
      btn.style.boxShadow = tick%2==0 ?
        "0 0 50px 22px #ffd700, 0 0 42px 7px #e6242e" :
        "0 0 106px 52px #1fe6ff, 0 0 29px 5px #ffd700";
      btn.style.filter = (tick%2==0)? "brightness(1.29)" : "brightness(1.39)";
      tick++;
    }, 419 + i*99);
  });
});

// Marquee: emojis randomly flip upside down!
window.addEventListener('DOMContentLoaded', function() {
  var marquee = document.querySelector('.marquee');
  if(marquee) {
    let flip = false;
    setInterval(function() {
      marquee.style.transform = flip ? "scaleY(-1)" : "";
      flip = !flip;
    }, 2100);
  }
});

// Marching lizards animation in ribbon/footer
window.addEventListener('DOMContentLoaded', function() {
  function marchLizards(selector) {
    var list = document.querySelectorAll(selector);
    let big = true;
    setInterval(function(){
      list.forEach(function(span){
        span.style.fontSize = big ? "2em" : "1.5em";
      });
      big = !big;
    }, 610);
  }
  marchLizards('.marching-lizards');
  marchLizards('.marching-lizards-footer span');
});
