/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Développeur Web', 'Freelancer', 'Développeur Full-Stack'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const form = document.querySelector('#signup');
const nameEl = document.forms.formValidate.name;
const emailEl = document.forms.formValidate.email;
const phoneEl = document.forms.formValidate.phone;
const subjectEl = document.forms.formValidate.subject;
const messageEl = document.forms.formValidate.message;
 
function isRequired(elementValue) {
    if (elementValue === '') {
        return false;
    } else {
        return true;
    }
}

function isBetween(lenght, min, max) {
    if (lenght < min || lenght > max) {
        return false;
    } else {
        return true;
    }
}

function isNameValid(elementValue){
    const re = new RegExp("^(?!.*\\b(afpa|root|deus)\\b)[a-zA-Z]+$");
    return re.test(elementValue);
}

function isValidEmail(email) {
    const regex = /^(?!root@afpa\.fr$|afpa@afpa\.com$|deus@afpa\.org$|.*@yopmail\.com$)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isValidPhone(phone) {
    const regex = new RegExp("^(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.-]*\\d{2}){4}$");
    return regex.test(phone);
}

function isValidSubject(subject) {
    const regex = new RegExp(/^[a-zA-Z0-9\s\-._()]+$/);
    return regex.test(subject);
}

function isValidMessage(message) {
    const regex = new RegExp(/^(?=(\S+\s*){20})[\s\S]{1,700}$/);
    return regex.test(message);
}

function showError(input, message) {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const fieldName = input.id;
    let errorEl = document.querySelector(`#${fieldName}-error`);

    if (errorEl) {
        // Mettre à jour le message d'erreur existant
        errorEl.textContent = message;
    } else {
        // Créer un nouveau message d'erreur et l'insérer après le champ de formulaire
        errorEl = document.createElement('small');
        errorEl.textContent = message;
        errorEl.classList.add('error-message');
        errorEl.id = `${fieldName}-error`;
        formField.appendChild(errorEl);
    }
}

function showSuccess(input) {
    const formField = input.parentElement;
    formField.classList.remove('error');//Class css
    formField.classList.add('success');//Class css
    const errorEl = formField.querySelector('small');
    errorEl.textContent = "";
    const previousErrorEL = formField.querySelector('small');
    if (previousErrorEL) {
        previousErrorEL.remove();
    }
}

const checkname = () => {
    let valid = false
    const min = 3;
    max = 25
    const name = nameEl.value.trim();
    if (!isRequired(name)) {
        showError(nameEl, "le nom d'utilistateur ne peut pas être vide");
    }else if (!isBetween(name.length, min, max)) {
        showError(
            nameEl,
            `Le nom d'utilistateur doit avoir entre ${min} et ${max} caractères`
        )
    }else if (!isNameValid(name)) {
        showError(nameEl, 'Le nom d\'utilisateur doit contenir que des lettres');
    }else {
        showSuccess(nameEl);
        valid = true;   
    }
return valid;
}

const checkemail = () => {
    const email1 = "root@afpa.fr";
    const email2 = "afpa@afpa.com";
    const email3 = "deus@afpa.org";
    const email4 = "user@example.com";
    const email5 = "test@yopmail.com";
    let valid = false
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, "l'email ne peut pas être vide");
    }else if (!isValidEmail(email)) {
        showError(emailEl, "l'email n'est pas valide");
    }else if (email === email1 || email === email2 || email === email3 || email === email4 || email === email5) {
        showError(emailEl, "l'email n'est pas valide");
    }else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
    }

    const checkphone = () => {
        let valid = false
        const phone = phoneEl.value.trim();
        if (!isRequired(phone)) {
            showError(phoneEl, "le numero de telephone ne peut pas être vide");
        }else if (!isValidPhone(phone)) {
            showError(phoneEl, "le numero de telephone n'est pas valide");
        }else {
            showSuccess(phoneEl);
            valid = true;
        }
        return valid;
    }

    const checksubject = () => {
        let valid = false
        const subject = subjectEl.value.trim();
        if (!isRequired(subject)) {
            showError(subjectEl, "le sujet ne peut pas être vide");
        }else if (!isValidSubject(subject)) {
            showError(subjectEl, "le sujet n'est pas valide");
        }else {
            showSuccess(subjectEl);
            valid = true;
        }
        return valid;
    }

    const checkmessage = () => {
        let valid = false
        const message = messageEl.value.trim();
        if (!isRequired(message)) {
            showError(messageEl, "Veuillez entrer votre message");
        }else if (!isValidMessage(message)) {
            showError(messageEl, "le message n'est pas valide");
        }else {
            showSuccess(messageEl);
            valid = true;
        }
        return valid;
    }

const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const subject = document.getElementById('subject');

    function sendEmail() {
        const bodyMessage = `Nom : ${fullName.value}<br>Email : ${email.value}<br>Telephone : ${phone.value}<br>Sujet : ${subject.value}<br>Message : ${message.value}`


        Email.send({
            SecureToken : "12287b89-856b-462e-ae03-83403c1dfd1e",
            Host : "smtp.elasticemail.com",
            Username : "moussaDevPro028@gmail.com",
            Password : "EC68341C9A996D5D6F0D46B6DD9DB0605C7E",
            To : 'moussaDevPro028@gmail.com',
            From : "moussaDevPro028@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        }).then(
          message => {
            if (message === 'OK') {
                Swal.fire({
                    title: "Success!",
                    text: "Votre message a bien été envoyé!",
                    icon: "success"
                  });
            }
          }
        );  
    }

    form.addEventListener('submit',(e) => {
        e.preventDefault();

        sendEmail();

        form.reset();
        return false;

        let nameOk = checkname();
        let emailOk = checkemail();
        let phoneOk = checkphone();
        let subjectOk = checksubject();
        let messageOk = checkmessage();

        let isFormValid = nameOk && emailOk && phoneOk && subjectOk && messageOk;
        if (isFormValid) {
            console.log("le formulaire est valide");;
        }

    });

    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args);
            }, delay);
        };
    };

    form.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'name':
                checkname();
                break;
            case 'email':
                checkemail();
                break;
            case 'phone':
                checkphone();
                break;
            case 'subject':
                checksubject();
                break;
            case 'message':
                checkmessage();
                break;
        }
    }));



   

    

