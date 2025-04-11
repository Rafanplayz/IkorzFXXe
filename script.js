// Create moving dots like getsolara.dev vibe
const bg = document.querySelector('.background');
for (let i = 0; i < 100; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.top = Math.random() * 100 + 'vh';
    dot.style.animationDuration = (5 + Math.random() * 5) + 's';
    bg.appendChild(dot);
}

// Add the forcefield effect for the dots
document.addEventListener('mousemove', (event) => {
    const dots = document.querySelectorAll('.dot');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    dots.forEach(dot => {
        const dotX = dot.offsetLeft;
        const dotY = dot.offsetTop;
        const distance = Math.sqrt(Math.pow(mouseX - dotX, 2) + Math.pow(mouseY - dotY, 2));
        const maxDistance = 100; // Max distance for forcefield effect

        // Calculate how far the dot should move
        const moveDistance = (maxDistance - distance) / maxDistance * 50; // Adjust the "50" to control distance
        const angle = Math.atan2(mouseY - dotY, mouseX - dotX);

        // Move the dot away from the mouse
        const offsetX = Math.cos(angle) * moveDistance;
        const offsetY = Math.sin(angle) * moveDistance;

        dot.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});
