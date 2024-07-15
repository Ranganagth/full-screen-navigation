function menuToggle() {
    let nav = document.getElementById("nav");
    let toggle = document.getElementById("toggle");
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
}

function showContact() {
    let contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
}
