const username = document.getElementById('input-username');
const password = document.getElementById('input-password');
const userIcon = document.querySelector('.user-icon');
const passIcon = document.querySelector('.pass-icon');
const formLogin = document.querySelector('.form-login');

const arrInput = [username, password];

var userFocus2 = (inputNode, iconNode) => {
    inputNode.addEventListener('keydown', (e) => {
        let messNode = e.target.nextElementSibling;
        messNode.textContent = '';
        inputNode.style.border = '2px solid rgb(4, 171, 226)';
        messNode.classList.add('hide');
        iconNode.style.color = 'grey';
    });
}

userFocus2(username,userIcon);
userFocus2(password, passIcon);

var checkUserBlur = () => {
    if(username.value === ''){
        errorMessage(username, 'Tên người dùng không hợp lệ');
        userIcon.style.color = 'red';
    }
    else{
        successMessage(username);
        userIcon.style.color = 'green';
    }
}

var checkPassBlur = () => {
    if(password.value === ''){
        errorMessage(password, 'Mật khẩu không thể để trống');
        passIcon.style.color = 'red';
    }
    else if(!validatePass(password.value)){
        errorMessage(password, 'Mật khẩu không hợp lệ');
        passIcon.style.color = 'red';
    }
    else if(validatePass(password.value)){
        successMessage(password);
        passIcon.style.color = 'green';
    }
    else{
        successMessage(password);
        passIcon.style.color = 'green';
    }
}
username.addEventListener('blur', checkUserBlur);
password.addEventListener('blur', checkPassBlur);


formLogin.addEventListener('submit', (e) => {
    let isValid = arrInput.every((self) => {
        return self.value !== '';
    });
    if(isValid){
        alert('Dang nhap thanh cong');
        e.target.submit();
    }
    else{
        e.preventDefault();
        checkUserBlur();
        checkPassBlur();
    }
});