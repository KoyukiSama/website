function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle('open');

    const overlay = document.getElementById("overlay");
    overlay.classList.toggle('show');
}

document.getElementById("toggleSidebar").addEventListener('click', toggleSidebar);

// Add event listeners to all anchor tags within the sidebar
document.querySelectorAll('#sidebar a').forEach(anchor => {
    anchor.addEventListener('click', toggleSidebar);
});