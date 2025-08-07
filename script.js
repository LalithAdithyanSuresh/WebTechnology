const formElements = document.querySelectorAll('input');
const REGEX_VALIDATIONS={
    username:/^[A-Za-z]+$/
};
// LIVE UPDATES
function addEventListeners(){
    formElements.forEach(element => {
        element.addEventListener('input',function(){
            validate(element);
        })
    });
}

function validateForm(){
    formElements.forEach(element => {
        console.log(element.value)
    })
}

function validate(inputElement){
    let name = inputElement.name;
    if(name in REGEX_VALIDATIONS){
        console.log(inputElement.value.match(REGEX_VALIDATIONS.name))
    }
}
addEventListeners();