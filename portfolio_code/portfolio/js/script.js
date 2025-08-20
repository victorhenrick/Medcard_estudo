// Portfolio Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe illustration elements
    const illustrationElements = document.querySelectorAll('.desktop-computer, .laptop, .mobile-phone, .code-icon, .books-stack, .coffee-cup, .design-block');
    
    illustrationElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Avatar hover effect
    const avatar = document.querySelector('.avatar-image');
    if (avatar) {
        avatar.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        avatar.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Code icon pulse effect
    const codeIcon = document.querySelector('.code-icon');
    if (codeIcon) {
        codeIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        codeIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Laptop screen glow effect
    const laptopScreen = document.querySelector('.laptop-screen');
    if (laptopScreen) {
        laptopScreen.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.5)';
            this.style.transition = 'box-shadow 0.3s ease';
        });

        laptopScreen.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    }

    // Mobile phone tilt effect
    const mobilePhone = document.querySelector('.mobile-phone');
    if (mobilePhone) {
        mobilePhone.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(-5deg) scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        mobilePhone.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    }

    // Parallax effect for illustration elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.workspace-illustration > *');
        
        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.1;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Typing animation for code lines
    function animateCodeLines() {
        const codeLines = document.querySelectorAll('.code-line');
        codeLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.width = '0';
                line.style.animation = 'none';
                
                setTimeout(() => {
                    line.style.width = line.classList.contains('short') ? '60%' : '100%';
                    line.style.transition = 'width 1s ease';
                    line.style.animation = 'codeGlow 2s ease-in-out infinite alternate';
                }, 100);
            }, index * 200);
        });
    }

    // Start code animation
    setTimeout(animateCodeLines, 1000);
    
    // Repeat code animation every 5 seconds
    setInterval(animateCodeLines, 5000);

    // Add floating animation to design elements
    function addFloatingAnimation() {
        const floatingElements = ['.code-icon', '.coffee-cup', '.design-block'];
        
        floatingElements.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.animation = `float 3s ease-in-out infinite`;
                element.style.animationDelay = `${index * 0.5}s`;
            }
        });
    }

    // Add floating keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);

    addFloatingAnimation();

    // Smooth reveal animation for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
            heroSection.style.transition = 'opacity 1s ease, transform 1s ease';
        }, 300);
    }
});

