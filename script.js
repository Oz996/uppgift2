



// Av någon anledning så stannar "vänligen acceptera villkoren" texten efter man tryckt registrera utan att checka boxen,
// men den funkar om man checkar av den i början, ingen aning vad felet är.

// Försökte göra en frivillig checkbox men lyckades inte sepera dem två från varandra, sköt upp uppgiften till sista dagen
// så har inte lika mycket tid som jag velat.

// Får inte lösenordet att skrivas i consolen efter man fyllt i allt korrekt


const form = document.querySelector('#regForm');

const validateText = (id) => {
    const input = document.querySelector(id)

    console.log(input)

    if (input.value.trim() === ''){
        console.log("Error, ogiltigt för/efternamn")
         return setError(input)
        
    } else if (input.value.length < 2) {
         
        console.log("Error, ogiltigt för/efternamn")
        return setError(input)
         
    }
    else{
        return setSuccess(input)
    }
    }

    

const validateEmail = (id) => {
    const email = document.querySelector(id)

    const regEx = /^[\w-\.]+@([\w]+\.)+[\w-]{2,6}$/

    if (email.value.trim() ==='') {
        
        console.log("Error, ogiltigt email")
        return setError(email)
    }
    else if (!regEx.test(email.value)){
          
          console.log("Error, ogiltigt email")
          return setError(email)
    }
    else {
        return setSuccess(email)
    }
}
const validatePassword = (id) => { 
 const input = document.querySelector (id)

  if (input.value.trim() === '') {
    console.log("Error, ogiltigt lösenord")
    return setError(input)
  }
  else{
    return setSuccess(input)
  }

}




const setSuccess = (input) => {
    input.classList.remove('is-invalid');
        return true;
}


const setError = (input) => {
    input.classList.add('is-invalid');
        input.focus();
        return false;
}

const validateCheck= (id) => {
    const checkbox = document.querySelector(id)
    if (!checkbox.checked) {
        console.log("Error, du måste acceptera villkoren")
        return setError(checkbox)
    }
    else if (checkbox.checked) { 
         return setSuccess(terms)
         
    }
    }




    form.addEventListener('submit',e => {
        e.preventDefault() 
        
     

 
        const errors = [];
    
       
        for (let i = 0; i < form.length; i++) {
        
          if (form [i].type === 'text') {
              errors [i] = validateText('#' + form[i].id)
          }
          else if (form [i].type === 'email')  { 
              errors [i] = validateEmail('#' + form[i].id)
         }
          else if (form [i].type === 'checkbox') {
              errors [i] = validateCheck ('#' + form[i].id)
            }
         else if (form [i].type === 'password') {
            errors [i] = validatePassword ('#' + form[i].id)
          }
          else if (form [i].type === 'repeatPassword') {
            errors [i] = validateCheck ('#' + form[i].id)
          }
         }
      
      
         console.log (errors)

         if (errors.includes(false)) {
            console.log('Fel i formuläret')
         }
         else {
            console.log ('Allt är i ordning')
            console.log (firstName.value + " " + lastName.value + " " + email.value + " " + password.value)
         }





      }) 