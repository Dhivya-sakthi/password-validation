var myInput = document.getElementById("psw");
        var letter = document.getElementById("letter");
        var number = document.getElementById("number");
        var special = document.getElementById("special");
        var length = document.getElementById("length");
        myInput.onkeyup = function(){
            var lowerCaseLetters = /(?=.*[a-z])(?=.*[A-Z])/;
            if(myInput.value.match(lowerCaseLetters)){
                letter.classList.remove("invalid");
                letter.classList.add("valid")
            }   else{
                letter.classList.remove("valid");
                letter.classList.add("invalid")
            }  
            var numbers = /[0-9]/g;
            if(myInput.value.match(numbers))  
            {
                number.classList.remove("invalid");
                number.classList.add("valid");
            } else{
                number.classList.remove("valid");
                number.classList.add("invalid");
            }
            var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
            if(myInput.value.match(specialCharacters))
            {
                special.classList.remove("invalid");
                special.classList.add("valid");


            } else {
                special.classList.remove("valid");
                special.classList.add("invalid");
            }
             if(myInput.value.length >= 8){
                length.classList.remove("invalid");
                length.classList.add("valid");
             }else{
                length.classList.remove("valid");
                length.classList.add("invalid");
             }
        }
        let showPasswordBtn = document.querySelector('.show-password');
        showPasswordBtn.addEventListener('click',() => {
            showPasswordBtn.classList.toggle('fa-eye');
            showPasswordBtn.classList.toggle('fa-eye-slash');
            myInput.type = myInput.type === 'password'? 'text': 'password';

        })
        // password strength checker
         
        var strengthMeter = document.getElementById("strength-meter");


myInput.addEventListener('keyup', function() {
    var password = myInput.value;
    var strength = 0;

    // for password strength
    var lowerCase = /[a-z]/;
    var upperCase = /[A-Z]/;
    var numbers = /[0-9]/;
    var specialChars = /[!@#$%^&*(),.?":{}|<>]/;

    // Check each condition and add to strength
    if (password.match(lowerCase)) strength += 1;
    if (password.match(upperCase)) strength += 1;
    if (password.match(numbers)) strength += 1;
    if (password.match(specialChars)) strength += 1;
    if (password.length >= 8) strength += 1;

    // password strength with macth color and width
    if (strength <= 2) {
        strengthMeter.style.width = '25%';
        strengthMeter.style.backgroundColor = 'red';
        
    } else if (strength == 3 || strength == 4) {
        strengthMeter.style.width = '50%';
        strengthMeter.style.backgroundColor = 'orange';
        
    } else if (strength == 5) {
        strengthMeter.style.width = '70%';
        strengthMeter.style.backgroundColor = 'green';
    
    } else {
        strengthMeter.style.width = '0%';
    
    }
});

