const formElements = document.querySelectorAll('input');
const REGEX_VALIDATIONS={
    username:/^[A-Za-z0-9_]{3,16}$/,
    email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

function addEventListeners(){
    formElements.forEach(element => {
        element.addEventListener('input',function(){
            validate(element);
        })
    });
}

// Final verification
function validateForm(){
    let pass = "";
    formElements.forEach(element => {
        let name = element.name;
        if(name in REGEX_VALIDATIONS){
            const regex = REGEX_VALIDATIONS[name];
            if(!element.value.match(regex)){
                element.parentElement.classList.add('field-error');
                return;
            }else{
                element.parentElement.classList.remove('field-error');
            }
        }
        // Password Check
        if(name=='password'){
            pass = element.value;
            if(pass.length <=3){
                element.parentElement.classList.add('field-error');
                return;
            }
        }else if(name == 'Cpassword' && pass != element.value){
            element.parentElement.classList.add('field-error');
            return;
        }
    });
    let message = "";
    formElements.forEach(element => {
        message += `${element.name} : ${element.value} \n`
    });
    alert(message);
}
// Live updates
function validate(inputElement){
    let name = inputElement.name;
    if(name in REGEX_VALIDATIONS){
        const regex = REGEX_VALIDATIONS[name];
        if(!inputElement.value.match(regex)){
            inputElement.parentElement.classList.add('field-error');
        }else{
            inputElement.parentElement.classList.remove('field-error');
        }
    }
    if(name == 'password' || name == 'Cpassword'){
        inputElement.parentElement.classList.remove('field-error');
    }
}
addEventListeners();