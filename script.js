function openForm(){
  document.getElementById('modal').style.display='flex';
}

function closeForm(){
  document.getElementById('modal').style.display='none';
}

/* EMAILJS */
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();

  emailjs.sendForm(
    "service_chebe8x",
    "template_s10v7d9",
    this
  )
  .then(() => {
    alert("Wiadomość wysłana!");
    closeForm();
    this.reset();
  })
  .catch((error) => {
    console.log(error);
    alert("Błąd wysyłki");
  });
});

/* PARTICLES FIXED */
window.addEventListener("load", function () {
  tsParticles.load("tsparticles", {
    background: {
      color: "#050505"
    },
    particles: {
      number: { value: 55 },
      color: { value: "#d4af37" },
      links: {
        enable: true,
        color: "#d4af37",
        opacity: 0.15
      },
      move: {
        enable: true,
        speed: 0.5
      },
      size: { value: 2 },
      opacity: { value: 0.4 }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  });
});