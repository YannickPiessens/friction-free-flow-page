// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
}

// Form Submission Handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = 'Account Aanmaken...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Show success message
        showToast('Welkom aan boord! 🎉', 'Je account is succesvol aangemaakt. Laten we je eerste campagne starten!');
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Reset form
        event.target.reset();
    }, 1500);
}

// Toast Notification
function showToast(title, description) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-description">${description}</div>
        </div>
        <button class="toast-close" onclick="closeToast(this)">&times;</button>
    `;
    
    // Add toast to page
    document.body.appendChild(toast);
    
    // Show toast with animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Auto remove toast after 5 seconds
    setTimeout(() => {
        closeToast(toast.querySelector('.toast-close'));
    }, 5000);
}

// Close Toast
function closeToast(button) {
    const toast = button.parentElement;
    toast.classList.add('hide');
    
    setTimeout(() => {
        toast.remove();
    }, 300);
}

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Close mobile menu when clicking on links
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.remove('open');
        });
    });
});

// Add CSS for toast notifications
const toastStyles = `
.toast {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: white;
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 0.5rem;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    min-width: 300px;
    max-width: 400px;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
}

.toast.show {
    opacity: 1;
    transform: translateX(0);
}

.toast.hide {
    opacity: 0;
    transform: translateX(100%);
}

.toast-content {
    margin-right: 1rem;
}

.toast-title {
    font-weight: 600;
    font-size: 0.875rem;
    color: hsl(39, 39, 42);
    margin-bottom: 0.25rem;
}

.toast-description {
    font-size: 0.8rem;
    color: hsl(113, 113, 122);
    line-height: 1.4;
}

.toast-close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: hsl(113, 113, 122);
    padding: 0.25rem;
    line-height: 1;
}

.toast-close:hover {
    color: hsl(39, 39, 42);
}

@media (max-width: 640px) {
    .toast {
        right: 10px;
        left: 10px;
        min-width: auto;
        max-width: none;
    }
}
`;

// Inject toast styles
const styleSheet = document.createElement('style');
styleSheet.textContent = toastStyles;
document.head.appendChild(styleSheet);