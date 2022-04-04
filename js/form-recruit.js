const inputName = document.getElementById('input-name');
const inputBirth = document.getElementById('input-birth');
const inputPhone = document.getElementById('input-numberphone');
const inputAddress = document.getElementById('input-address');
const inputLink = document.getElementById('input-link');
const inputExper = document.getElementById('input-exper');
const form_recruitment = document.querySelector('.form-recruitment');
const arrInput = [inputName, inputBirth, inputPhone, inputAddress, inputLink, inputExper];


arrInput.forEach((self) => {
    self.addEventListener('focus', userFocus(self));
});

// input - fullName
inputName.addEventListener('blur', checkNameBlur);

// input - birth
inputBirth.addEventListener('blur', checkBirthBlur);

// input - numberphone
inputPhone.addEventListener('blur', checkPhoneBlur);

//input - address
inputAddress.addEventListener('blur', checkAddressBlur);

//input - link
inputLink.addEventListener('blur', checkLinkBlur);

//input - exper
inputExper.addEventListener('blur', checkExperBlur);

form_recruitment.addEventListener('submit', (e) => {
    let isValid = arrInput.every((self) => {
        if (self.value !== '') {
            return self;
        }
    });
    if (isValid) {
        swal("GỬI THÀNH CÔNG", "CHÚNG TÔI SẼ LIÊN HỆ BẠN KHI CÓ THỂ", "success");
        form_recruitment.reset();
        e.preventDefault();
    }
    else {
        e.preventDefault();
        checkNameBlur();
        checkBirthBlur();
        checkPhoneBlur();
        checkAddressBlur();
        checkLinkBlur();
        checkExperBlur();
    }
});



