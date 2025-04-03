// Handle image uploads
function handleImageUpload(input, imageNumber) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        const imageContainer = document.getElementById(`image${imageNumber}`);
        
        reader.onload = function(e) {
            // Create image element
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '15px';
            
            // Add fade-in animation
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease-in';
            
            // Clear previous content
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
            
            // Trigger fade-in
            setTimeout(() => {
                img.style.opacity = '1';
            }, 50);
        };
        
        reader.readAsDataURL(file);
    }
}

// Add floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.opacity = '0';
    heart.style.animation = `floatHeart ${Math.random() * 3 + 2}s linear forwards`;
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatHeart {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
}); 
