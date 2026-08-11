// ========== Loading Screen ==========
const loadingScreen = document.getElementById('loadingScreen');
const complimentElement = document.getElementById('loadingCompliment');
const loadingPercent = document.getElementById('loadingPercent');
const loadingBarFill = document.getElementById('loadingBarFill');
const compliments = [
    'Processing data with style and precision.',
    'Removing all the bugs and glitches for a smooth experience.',
];

if (complimentElement) {
    complimentElement.textContent = compliments[Math.floor(Math.random() * compliments.length)];
}

const updateLoadingProgress = (progress) => {
    if (loadingPercent) {
        loadingPercent.textContent = `${progress}%`;
    }
    if (loadingBarFill) {
        loadingBarFill.style.width = `${progress}%`;
    }
};

window.addEventListener('load', () => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        updateLoadingProgress(Math.min(progress, 100));

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen?.classList.add('hidden');
            }, 300);
        }
    }, 25);
});

// ========== Mobile Menu Toggle ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========== Navbar Scroll Effect ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== Active Nav Link on Scroll ==========
const sections = document.querySelectorAll('section');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navAnchors.forEach(anchor => {
        anchor.classList.remove('active');
        if (anchor.getAttribute('href') === `#${current}`) {
            anchor.classList.add('active');
        }
    });
});

// ========== Scroll Reveal Animation ==========
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
