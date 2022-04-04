const contactForm = document.querySelector('.contact-form');
const inputName = document.getElementById('input-name');
const inputPhone = document.getElementById('input-numberphone');
const inputEmail = document.getElementById('input-email');
const inputContent = document.getElementById('input-content');
const arrInput = [inputName, inputPhone, inputEmail, inputContent];

arrInput.forEach((self) => {
    userFocus(self);
});

inputName.addEventListener('blur', checkNameBlur);
inputPhone.addEventListener('blur', checkPhoneBlur);
inputEmail.addEventListener('blur', checkEmailBlur);
inputContent.addEventListener('blur', checkContentBlur);

contactForm.addEventListener('submit', (e) => {
    let isValid = arrInput.every((self) => {
        return self.value !== '';
    });
    if(isValid){
        alert('Gui thanh cong');
        contactForm.submit();
    }
    else{
        e.preventDefault();
        checkNameBlur();
        checkPhoneBlur();
        checkEmailBlur();
        checkContentBlur();
    }
})