// Sticky Navbar & Active Link
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Sticky Scroll
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Scroll Spy
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Typing Effect for Python Code Block
const codeElement = document.getElementById('python-code');
if (codeElement) {
    const codeText = `class DataAnalyst:
    def __init__(self):
        self.name = "Sakshi Kokate"
        self.skills = ["Python", "SQL", "Viz"]
        self.passion = "Data Insights"

    def solve_problems(self):
        return "Efficient Solutions"
        
analyst = DataAnalyst()
print(analyst.solve_problems())`;

    let index = 0;
    function typeCode() {
        if (index < codeText.length) {
            codeElement.textContent += codeText.charAt(index);
            index++;
            setTimeout(typeCode, 20); // Typing speed
        }
    }

    // Start typing when section is in view
    const codeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeCode();
                codeObserver.unobserve(entry.target);
            }
        });
    });

    codeObserver.observe(document.querySelector('.code-block'));
}

// Reveal on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden-element').forEach(el => {
    observer.observe(el);
});

// Smooth Scroll for "Down" buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// WhatsApp Integration
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields!');
            return;
        }

        const phoneNumber = '917498436968'; // User's phone number
        const text = `Hi Sakshi, I'm ${name} (${email}). \n\nMessage: ${message}`;
        const encodedText = encodeURIComponent(text);

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        window.open(whatsappUrl, '_blank');
    });
}
