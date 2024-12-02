
    /*-----GSAP ANIMATION-----*/
gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll('.animate span');

elements.forEach(selector => {
    gsap.from(selector, {
        y: 300,
        rotation: 15,
        duration: 4,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: selector,
            start: 'top 120%',
            end: 'bottom 90%',
            toggleActions: "play none none none"
        }
    });
});

 /*-----ABOUT ANIMATION-----*/
 gsap.to("#about-section .main-title", {  
    scrollTrigger: {  
        trigger: "#about-section",  
        start: "top 80%",  
        toggleActions: "play none none reverse",  
    },  
    opacity: 1,  
    y: 0,  
    duration: 1,  
    ease: "power1.out"  
}); 

 /*-----IMAGE ANIMATION-----*/
 gsap.to("#image-section .overlay", {
    scrollTrigger : {
        trigger : "#image-section",
        start : 'top 90%',
        end : "bottom bottom",
        scrub : 1
    },

    width : '86vw',
 });

 /*-----IMAGE ANIMATION-----*/
 gsap.fromTo("#exhibit .article", {
    opacity : 0, 
    y : 100   
 }, {
    opacity: 1, 
    y : 100, 
    duration : 1,
    stagger : 0.2,
    scrollTrigger: {
        trigger : "#exhibit .article",
        start : 'top 70%',
        end : 'bottom 70%',
        toggleActions : "play none none none"
    }, 
 })

 document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offset = 80;
            const targetPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/*-----------------------HEADER BG---------------------*/
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(255, 255, 255, 0.9)"; /* Slight opacity */
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; /* Add shadow for depth */
    } else {
        header.style.background = "transparent";
        header.style.boxShadow = "none";
    }
});

/*-----------------------EXHIBIT IMG ANIMATION---------------------*/

document.querySelectorAll('#exhibit img').forEach((img) => {
    img.addEventListener('mouseover', (e) => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseout', (e) => {
        img.style.transform = 'scale(1)';
    });
});

/*-----------------------HIDDEN EXHIBIT---------------------*/
document.getElementById("see-all").addEventListener("click", function (event) {
    event.preventDefault(); 
    const hiddenItems = document.querySelectorAll(".hidden");
    hiddenItems.forEach((item) => {
        item.classList.remove("hidden"); 
    });
    this.style.display = "none";
});

/*-----------------------ABOUT READ MORE---------------------*/
document.getElementById('read-more-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const fullText = document.getElementById('full-text');
    fullText.classList.toggle('hidden');
    
    if (fullText.classList.contains('hidden')) {
        this.innerHTML = 'Read More';
    } else {
        this.innerHTML = 'Read Less';
    }
});

gsap.to("#about-section .overlay", {
    scrollTrigger: {
        trigger: "#about-section",
        start: "top 90%",
        end: "bottom bottom",
        scrub: 1,
    },
    width: "86vw", 
});



 /*-----------------------SMOOTH SCROLL---------------------*/
 // Initialize Lenis
 const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Default easing
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


