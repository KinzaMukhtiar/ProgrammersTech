const contactForm= document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //serviceid, templeteid; #form, publickey
    emailjs.sendForm('service_tskfowd', 'template_wrdb4n5', '#contact-form', 'n_biHBP0oXyYtpzxM')
   .then(() => {
    //show sent message
    contactMessage.textContent = 'Message sent succesfully!'
   //remove message after five second
   setTimeout(() =>{ 
   contactMessage.textContent = ''
   }, 5000)
   //clear input fields
   contactForm.reset()
})
}

contactForm.addEventListener('submit',sendEmail)