(() => {
    const heroSection = document.getElementById('hero-section');
    const canvas = document.getElementById('fire-canvas');
    
    if (!heroSection || !canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const PALETTE = [
        '235, 156, 110',
        '217, 114, 91',
        '245, 203, 134'
    ];

    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }

    class FireParticle {
        constructor(x, y) {
            this.x = x + (Math.random() - 0.5) * 14;
            this.y = y + (Math.random() - 0.5) * 10;
            this.size = Math.random() * 8 + 4;
            this.speedY = Math.random() * -1.8 - 0.6;
            this.speedX = (Math.random() - 0.5) * 1.2;
            this.life = 1.0;
            this.decay = Math.random() * 0.03 + 0.02;
            this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.size *= 0.96;
            this.life -= this.decay;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.life * 0.65})`;
            ctx.fill();
        }
    }

    // Restringe a emissão de partículas à área da Hero para evitar overhead de renderização
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        for (let i = 0; i < 3; i++) {
            particles.push(new FireParticle(mouseX, mouseY));
        }
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw();

            if (p.life <= 0 || p.size <= 0.5) {
                particles.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
})();