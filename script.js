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