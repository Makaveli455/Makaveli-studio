function openForm(){
  document.getElementById('modal').style.display='flex';
}

function closeForm(){
  document.getElementById('modal').style.display='none';
}

// EMAILJS SEND (AKTYWNY SYSTEM)

document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();

  emailjs.sendForm(
    "service_chebe8x",
    "template_s10v7d9",
    this
  )
  .then(() => {
    alert("Wiadomość wysłana poprawnie!");
    closeForm();
    this.reset();
  })
  .catch((error) => {
    console.log("Błąd:", error);
    alert("Coś poszło nie tak. Spróbuj ponownie.");
  });
});

tsParticles.load("tsparticles", {
  background: {
    color: "#050505"
  },
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#d4af37"   // złoty minimal (premium gold)
    },
    links: {
      enable: true,
      color: "#d4af37",
      opacity: 0.15
    },
    move: {
      enable: true,
      speed: 0.6
    },
    size: {
      value: 2
    },
    opacity: {
      value: 0.4
    }
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