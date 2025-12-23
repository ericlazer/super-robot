// NEXIO Main JavaScript

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 1. LOADER LOGIC
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const progress = document.getElementById('loader-progress');

    // TradFi style: Deterministic loading bar
    const tl = gsap.timeline({
        onComplete: () => {
            gsap.to(loader, { autoAlpha: 0, duration: 0.5 });
            initAnimations();
        }
    });

    tl.to(progress, { width: '100%', duration: 1.5, ease: "power2.inOut" });
});

// 2. SMOOTH SCROLL with Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
});

window.lenis = lenis;

function smoothScroll(e, targetId) {
    e.preventDefault();
    lenis.scrollTo(targetId, { offset: 0, duration: 1.5 });
}

// Make smoothScroll globally available
window.smoothScroll = smoothScroll;

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

// 3. MOBILE MENU LOGIC
const mobileMenu = document.getElementById('mobile-menu');
window.isMenuOpen = false;

window.toggleMenu = function() {
    window.isMenuOpen = !window.isMenuOpen;
    gsap.to(mobileMenu, {
        x: window.isMenuOpen ? '0%' : '100%',
        duration: 0.6,
        ease: "power3.inOut"
    });
}

window.closeMenu = function() {
    if (window.isMenuOpen) {
        window.toggleMenu();
    }
}

// 4. ANIMATIONS (Restrained, Professional Fades)
function initAnimations() {
    const textReveals = document.querySelectorAll('.reveal-text');

    textReveals.forEach(text => {
        gsap.to(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 90%",
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out"
        });
    });
}
