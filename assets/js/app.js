/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}


/*----- Smooth scroll for navigation links----*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Youtuber", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



// Modal functionality
function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    switch (projectId) {
        case 1:
            modalTitle.textContent = ' Emitra';
            modalDescription.textContent = `
This eCommerce project is a simple web application developed using HTML, CSS, and JavaScript. 
It provides basic functionalities for browsing products.

Features:
- Product Listing: Display a catalog of available products with images, descriptions, and prices.
- Responsive Design: Ensure the application is responsive and works well on different devices.

 
`;;
            break;
        case 2:
            modalTitle.textContent = 'Movie-Search-web-app';
            modalDescription.textContent = `
The Movie Search App allows users to search for movies and view details such as ratings, release date, cast, and plot summaries. 
The app fetches real-time movie data from an external API (e.g., OMDb API or The Movie Database API) and presents it in an easy-to-use, responsive interface. 
Users can search for any movie by title, and the app dynamically displays relevant results.

 
`;;
            break;
        case 3:
            modalTitle.textContent = ' Dashboard';
            modalDescription.textContent = "I've just wrapped up a fully responsive dashboard project built using React.js, Material-UI, Firebase, and Zustand. This project leverages the power of modern web development tools to deliver a seamless user experience across all devices. Authentication was handled using Auth0, ensuring robust security and smooth user onboarding. I also integrated Firebase for real-time data management, which powers key features like adding, editing, and deleting products. For data visualization, Google Charts was used to make complex data easy to understand at a glance. Throughout the project, I worked with a range of packages to bring together the functionality and design needed for an efficient, user-friendly interface. This has been a great opportunity to deepen my skills, and I'm thrilled with how everything came together!"
                ;
            break;
    }
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}




/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)


// Form validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-control');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get values from the input fields
        const name = form.querySelector('.input-field[name="name"]').value.trim();
        const email = form.querySelector('.input-field[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        // Validate form fields
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return; // Exit if validation fails
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return; // Exit if email is invalid
        }

        alert('Message sent successfully!');
        form.reset(); // Reset the form
    });
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
