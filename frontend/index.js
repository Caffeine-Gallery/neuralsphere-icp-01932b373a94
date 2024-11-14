import { backend } from "declarations/backend";

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add parallax effect to geometric background
    window.addEventListener('scroll', () => {
        const geometric = document.querySelector('.geometric-bg');
        const scrolled = window.pageYOffset;
        geometric.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Initialize neural network animation
    const createNeuralConnections = () => {
        const nodes = document.querySelectorAll('.neural-node');
        nodes.forEach(node => {
            node.style.animation = `pulse ${Math.random() * 2 + 1}s infinite`;
        });
    };

    createNeuralConnections();
});
