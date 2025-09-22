const starContainer = document.getElementById('star-container');
const numStars = 250;

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.textContent = '•';
    
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.fontSize = `${Math.random() * 2 + 1}px`;
    star.style.animationDuration = `${Math.random() * 5 + 3}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    starContainer.appendChild(star);
}