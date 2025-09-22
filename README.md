[index.html.txt](https://github.com/user-attachments/files/22456252/index.html.txt)
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para mi niña 💛</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div id="star-container"></div>

    <div id="content-container">
        <div id="text-container">
            <p>
                Te amo muchísimo mi niña, nunca dejaré de hacerlo 💛<br>
                y tampoco quería dejarte sin tus flores amarillas 🌻<br>
                Te amo muchísimo
            </p>
        </div>
        <img class="flower-image" src="ramo.jpg" alt="Un ramo de flores amarillas">
    </div>

    <script src="script.js"></script>
</body>
</html>
[script.js.txt](https://github.com/user-attachments/files/22456265/script.js.txt)
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
[style.css.txt](https://github.com/user-attachments/files/22456285/style.css.txt)
body {
    background-color: #000;
    margin: 0;
    overflow: hidden;
    font-family: 'Arial', sans-serif;
    color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#star-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
}

.star {
    position: absolute;
    color: #fff;
    opacity: 0;
    animation: twinkle 5s infinite ease-in-out;
}

@keyframes twinkle {
    0%, 100% { opacity: 0; transform: scale(0.5); }
    50% { opacity: 1; transform: scale(1.2); }
}

#content-container {
    position: absolute;
    top: 15%;
    z-index: 10;
    text-align: center;
    padding: 20px;
}

#text-container {
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    line-height: 1.5;
    text-shadow: 0 0 15px #ffd700, 0 0 25px #ffd700;
    margin-bottom: 20px;
}

.flower-image {
    width: 250px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255, 255, 0, 0.7);
    transition: transform 0.5s ease-in-out;
}

.flower-image:hover {
    transform: scale(1.1);
}

@media (max-width: 768px) {
    #text-container {
        font-size: 1.2em;
    }
    .flower-image {
        width: 180px;
    }
}
