// Fungsi untuk menampilkan section yang dipilih
function showSection(sectionId) {
    // Sembunyikan semua section
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active');
    
    // Scroll ke atas halaman
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fungsi untuk scroll ke sub-content tertentu
function scrollToSubContent(subContentId) {
    const element = document.getElementById(subContentId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Event listener untuk menu utama
document.querySelectorAll('.menu-main').forEach(menuItem => {
    menuItem.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = this.getAttribute('data-target');
        showSection(targetSection);
    });
});

// Event listener untuk submenu items
document.querySelectorAll('.submenu-item').forEach(subItem => {
    subItem.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = this.closest('li').querySelector('.menu-main').getAttribute('data-target');
        const targetSubContent = this.getAttribute('data-target');
        
        // Tampilkan section yang sesuai
        showSection(targetSection);
        
        // Scroll ke sub-content setelah section ditampilkan
        setTimeout(() => {
            scrollToSubContent(targetSubContent);
        }, 100);
    });
});

// Inisialisasi - tampilkan section pertama
document.addEventListener('DOMContentLoaded', function() {
    showSection('analisis-kebutuhan');
});