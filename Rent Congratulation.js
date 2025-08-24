  <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
<script>
  (function(){
    emailjs.init("yfonXBK6R72NxeF6m"); 
  })();
</script>

<script>
    const form = document.getElementById("rentForm");
    const daysInput = document.getElementById("days");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = new URLSearchParams(window.location.search).get("car");
      const pricePerDay = parseInt(new URLSearchParams(window.location.search).get("price"));
      const total = pricePerDay * daysInput.value;

      showConfirmation(
        `Your rent is confirmed!<br>
        Car: ${name}<br>
        Days: ${daysInput.value}<br>
        Total: Rs ${total}`
      );

      emailjs.send("service_2x0mdrf", "template_iaiw9pq", {
  name: document.getElementById("fullName").value,
  car: name,
  days: daysInput.value,
  total: pricePerDay * daysInput.value,
  email: document.getElementById("email").value,
  phone: document.getElementById("mobile").value
})
.then(() => {
  console.log("✅ Email sent to customer");
})
.catch(err => console.error("❌ Email failed", err));
  })();
</script>

<script>
function showConfirmation(message) {
  const overlay = document.getElementById("confirmation-overlay");
  const msg = document.getElementById("confirmation-message");
  msg.innerHTML = message;
  overlay.style.display = "flex";
  startConfetti();
}

// Confetti Effect
function startConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const confetti = Array.from({length:150}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 0.5 + 0.5,
    color: `hsl(${Math.random()*360},100%,50%)`
  }));

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x,c.y,c.r,0,Math.PI*2,true);
      ctx.fillStyle=c.color;
      ctx.fill();
    });
    update();
    requestAnimationFrame(draw);
  }
  function update() {
    confetti.forEach(c => {
      c.y+=c.d*4;
      if(c.y>canvas.height){
        c.y= -10;
        c.x=Math.random()*canvas.width;
      }
    });
  }
  draw();
}
</script>

<!-- Confirmation Overlay -->
<div id="confirmation-overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; display:flex; justify-content:center; align-items:center; flex-direction:column; color:white; font-family:sans-serif; text-align:center;">
  <h1>🎉 Congratulations!</h1>
  <p id="confirmation-message">Your rent is confirmed.</p>
  <button onclick="document.getElementById('confirmation-overlay').style.display='none'" style="margin-top:20px; padding:10px 20px; border:none; background:#ff6600; color:white; border-radius:8px; cursor:pointer;">Close</button>
  <canvas id="confetti-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;"></canvas>
</div>