// Sidebar Toggle
document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Profile Menu Toggle
function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
    
    // Close menu when clicking outside
    document.addEventListener('click', function closeMenu(e) {
        if (!e.target.closest('.header-right')) {
            profileMenu.style.display = 'none';
            document.removeEventListener('click', closeMenu);
        }
    });
}

// Content Navigation
function showContent(contentId, element) {
    // Hide all content

    function showContent(contentId, clickedElement) {
        // Sembunyikan semua konten
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });
    
        // Tampilkan konten yang dipilih
        document.getElementById(contentId).classList.remove('hidden');
    
        // Hapus kelas aktif dari semua link navigasi
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
    
        // Tambahkan kelas aktif ke link yang diklik
        clickedElement.classList.add('active');
    }
    
    // Tambahkan event listener untuk setiap link menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.getAttribute('href').substring(1);
            showContent(contentId, this);
        });
    });
    
    // Tampilkan dashboard secara default saat halaman dimuat
    document.addEventListener('DOMContentLoaded', function() {
        showContent('dashboard', document.querySelector('.nav-link[href="#dashboard"]'));
    });
    function showContent(contentId, element) {
        // Sembunyikan semua konten
        const allContents = document.querySelectorAll('.content-section');
        allContents.forEach(content => {
            content.style.display = 'none';
        });
    
        // Tampilkan konten yang dipilih
        const selectedContent = document.getElementById(contentId);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }
    
        // Hapus kelas active dari semua link
        const allLinks = document.querySelectorAll('.nav-link');
        allLinks.forEach(link => {
            link.classList.remove('active');
        });
    
        // Tambahkan kelas active ke link yang diklik
        if (element) {
            element.classList.add('active');
        }
    
        // Log untuk debugging
        console.log('Showing content:', contentId);
        console.log('Selected element:', selectedContent);
    }
    
    // Inisialisasi saat halaman dimuat
    document.addEventListener('DOMContentLoaded', function() {
        // Tampilkan dashboard secara default
        showContent('dashboard', document.querySelector('a[href="#dashboard"]'));
    
        // Tambahkan event listener untuk semua link menu
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const contentId = this.getAttribute('href').replace('#', '');
                showContent(contentId, this);
            });
        });
    });