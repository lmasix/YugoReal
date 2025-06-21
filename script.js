
// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Close mobile menu if open
    document.getElementById('navLinks').classList.remove('active');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize with home section active
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('[data-section="home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const producto = document.getElementById('producto').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Simple validation
    if (!nombre || !correo || !mensaje) {
        alert('Por favor completa todos los campos obligatorios.');
        return;
    }
    
    // Here you would typically send the form data to a server
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    
    // Reset form
    this.reset();
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('navLinks');
    
    if (!nav.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Phone number click handler for mobile
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        // This will work on mobile devices
        console.log('Calling:', this.href);
    });
});

// WhatsApp link enhancement
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Opening WhatsApp:', this.href);
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive animations
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(45, 80, 22, 0.95), rgba(139, 69, 19, 0.95))';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--verde-bosque), var(--marron-nogal))';
        header.style.backdropFilter = 'none';
    }
});

// Feature cards hover effect
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});