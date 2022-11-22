const mail =document.getElementById('input')
const NotifyBtn = document.getElementById('notify-btn');
const alertText = document.getElementById('text');
const input = document.getElementById('input')



const validateEmail =  () =>{
    const mailformat = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if(!mail.value.match(mailformat)){
        alertText.textContent = 'Please enter a valid email address';
        input.style.borderColor = 'red';
        // console.log('not match');
        return false;
    }
    else {
        input.style.borderColor = 'green';
        // console.log('match');
        alertText.textContent = '';
        return true;
    }
};

