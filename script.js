  // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Product hover animations
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
// AUTH SWITCH
function showSignup() {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("signupBox").classList.remove("hidden");
}
function showLogin() {
    document.getElementById("signupBox").classList.add("hidden");
    document.getElementById("loginBox").classList.remove("hidden");
}
function signup() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const pass = document.getElementById("signupPass").value;
    if (!name || !email || !pass) {
        alert("Please fill all fields!");
        return;
    }
    alert("Account created! (Backend needed)");
}
function login() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;
    if (!email || !pass) {
        alert("Please enter email & password!");
        return;
    }
    alert("Login successful! (Backend needed)");
}
