const email = document.getElementById('mce-EMAIL');
const change = document.getElementById('change');
const button = document.getElementById('mc-embedded-subscribe');

button.onclick = function (){
    if(email.value == ''){
        Swal.fire({
            title: 'Error!',
            text: 'Please fill in your email before submitting',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          return false;
    } else {
        validateEmail(email);
    }
}

function validateEmail(inputText){
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailFormat)){
        change.innerHTML = 'Thanks for Subscribing';
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully subscribed',
            showConfirmButton: false,
            timer: 1500
          })
        true;
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Email is not valid',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          return false;
    }
}