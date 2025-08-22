document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        if (link.getAttribute('href') && !link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const url = this.getAttribute('href');
                const overlay = document.getElementById('transition-overlay');
                overlay.style.display = 'flex';

                setTimeout(() => {
                    window.location.href = url;
                }, 1200); // Match the car animation speed
            });
        }
    });
});
