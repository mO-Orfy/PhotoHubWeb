document.addEventListener('mousemove', function (event) {
    var div = document.querySelector(".glasses1");
    var bb = div.getBoundingClientRect();
    var cx = bb.left + bb.width / 2, cy = bb.top + bb.height / 2;
    var angle = Math.atan2(event.y - cy, event.x - cx);
    
    div.style.transform = "rotate(" + angle + "rad)"
  })

  document.addEventListener('mousemove', function (event) {
    var div = document.querySelector(".glasses2");
    var bb = div.getBoundingClientRect();
    var cx = bb.left + bb.width / 2, cy = bb.top + bb.height / 2;
    var angle = Math.atan2(event.y - cy, event.x - cx);
    
    div.style.transform = "rotate(" + angle + "rad)"
  })