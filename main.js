// Setup Three.js Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg-canvas'), antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 5, 10);

// Entrance Animation Trigger
document.getElementById('enter-btn').addEventListener('click', () => {
    gsap.to('#loader', { opacity: 0, duration: 1.5, onComplete: () => {
        document.getElementById('loader').classList.add('hidden');
        showOverlay('about');
    }});
    // Camera zoom into room
    gsap.to(camera.position, { z: 5, duration: 2, ease: "power2.inOut" });
});

// Character Movement Logic
window.moveCharacter = function(zone) {
    // Hide all overlays
    document.querySelectorAll('.overlay').forEach(el => el.classList.remove('visible'));

    if(zone === 'projects') {
        // 1. Animate Camera to the "Right Wall"
        gsap.to(camera.position, { x: 5, duration: 1.5 });
        // 2. Show Projects after move
        setTimeout(() => showOverlay('projects'), 1500);
    } else {
        gsap.to(camera.position, { x: 0, duration: 1.5 });
        setTimeout(() => showOverlay('about'), 1500);
    }
}

function showOverlay(id) {
    const el = document.getElementById('overlay-' + id);
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('visible'), 10);
}

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
