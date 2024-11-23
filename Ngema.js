// Tab navigation functionality
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    const tabs = document.querySelectorAll('.tabs button');

    // Hide all sections and remove active class from tabs
    sections.forEach(section => section.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the clicked section and add active class to corresponding tab
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}

// Modal functionality to view certificate images
function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = src;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
