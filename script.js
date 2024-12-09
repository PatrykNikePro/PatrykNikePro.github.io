
document.addEventListener('DOMContentLoaded', function() {
    const imageBoxes = document.querySelectorAll('.image-box');

    imageBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05)';
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)';
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
