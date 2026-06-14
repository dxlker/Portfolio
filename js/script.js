const aboutBtn = document.getElementById('about-btn');
const projectenBtn = document.getElementById('projecten-btn');
const contactBtn = document.getElementById('contact-btn');
const resumeBtn = document.getElementById('resume-btn');

const aboutWindow = document.getElementById('about-window');
const projectsWindow = document.getElementById('projects-window');
const contactWindow = document.getElementById('contact-window');
const resumeWindow = document.getElementById('resume-window');
const overlay = document.getElementById('cv-overlay');

const cvClose = document.querySelector('.cv__close');
const aboutClose = document.querySelector('.over-mij__close');
const projectsClose = document.querySelector('.projecten__close');
const contactClose = document.querySelector('.contact__close');

function closeEverything() {
    aboutWindow.classList.remove('active');
    projectsWindow.classList.remove('active');
    contactWindow.classList.remove('active');
    resumeWindow.classList.remove('active');
    overlay.classList.remove('active');
}

aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeEverything();
    aboutWindow.classList.add('active');
    overlay.classList.add('active');
});

projectenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeEverything();
    projectsWindow.classList.add('active');
    overlay.classList.add('active');
});

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeEverything();
    contactWindow.classList.add('active');
    overlay.classList.add('active');
});

resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeEverything();
    resumeWindow.classList.add('active');
    overlay.classList.add('active');
});

cvClose.addEventListener('click', closeEverything);
aboutClose.addEventListener('click', closeEverything);
projectsClose.addEventListener('click', closeEverything);
contactClose.addEventListener('click', closeEverything);
overlay.addEventListener('click', closeEverything);