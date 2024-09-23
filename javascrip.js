// MENU ICON NAVBAR
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    // STICKY NAVBAR    
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', scrollPosition > 100);

    // REMOVE MENU ICON NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// DARK LIGHT MODE
const darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.addEventListener('click', () => {
    const isSun = darkModeIcon.classList.contains('bx-sun');
    darkModeIcon.classList.toggle('bx-moon', isSun);
    darkModeIcon.classList.toggle('bx-sun', !isSun);
    document.body.classList.toggle('dark-mode');
});

// SCROLL REVEAL
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

function leiaMais() {
    const pontos = document.getElementById("pontos");
    const maisTexto = document.getElementById("mais");
    const btnLeiaMais = document.getElementById("btnLeiaMais");

    const isHidden = pontos.style.display === "none";
    pontos.style.display = isHidden ? "inline" : "none";
    maisTexto.style.display = isHidden ? "none" : "inline";
    btnLeiaMais.innerHTML = isHidden ? "Leia Mais" : "Leia Menos";
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `*Nome:* ${name}%0A*Email:* ${email}%0A*Número:* ${number}%0A*Assunto:* ${subject}%0A*Mensagem:* ${message}`;
    const whatsappUrl = `https://wa.me/5571986821061?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
});
