document.addEventListener("DOMContentLoaded", function() {
    var monikaButton = document.getElementById("monikaButton");
    var sayoriImage = document.getElementById("sayoriImage");
    var natsukiImage = document.getElementById("natsukiImage");
    var yuriImage = document.getElementById("yuriImage");
    var body = document.body;
    var audio = document.querySelector("audio");
    var clickSound = document.getElementById("clickSound");

    var backgroundMusic = document.querySelector("audio");
    
    backgroundMusic.setAttribute("src", "assets/audio/music.mp3");
    
    document.addEventListener("click", function() {
        backgroundMusic.play();
    });

    var zoomLevel = 1;
    var verticalPosition = 0;
    var yuriXpos = 0;

    monikaButton.addEventListener("mouseover", function() {
        monikaButton.src = "assets/img/button_hover.png";
    });

    monikaButton.addEventListener("mouseout", function() {
        monikaButton.src = "assets/img/button.png";
    });

    monikaButton.addEventListener("click", function() {
        clickSound.currentTime = 0;
        clickSound.play();

        zoomLevel += 0.1;
        verticalPosition += 10;
        yuriXpos += 5

        sayoriImage.style.transform = "scale(" + zoomLevel + ") translateY(" + verticalPosition + "px)";
        natsukiImage.style.transform = "scale(" + zoomLevel + ") translateY(" + verticalPosition + "px)";
        yuriImage.style.transform = "scale(" + zoomLevel + ") translateY(" + verticalPosition + "px) translateX(" + yuriXpos + "px)";

        if (zoomLevel >= 3.5) {
            backgroundMusic.pause();
            audio.setAttribute("src", "assets/audio/justmonika.mp3");
            audio.play();

            monikaButton.remove();
            sayoriImage.remove();
            natsukiImage.remove();
            yuriImage.remove();

            body.style.backgroundImage = "url('assets/img/justmonika.jpg')";
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center";
            body.style.backgroundRepeat = "no-repeat";
            
            var randomImageIndex = Math.floor(Math.random() * 4) + 1; // Génère un nombre aléatoire entre 1 et 4
            var randomImage = document.createElement("img");
            randomImage.setAttribute("src", "assets/img/chatbox/cb" + randomImageIndex + ".png");
            randomImage.setAttribute("alt", "Random Image");
            randomImage.style.position = "fixed";
            randomImage.style.bottom = "10px";
            randomImage.style.left = "50%";
            randomImage.style.transform = "translateX(-50%)";
            randomImage.style.width = "1300px"; // Ajuster la taille de l'image selon vos besoins
            document.body.appendChild(randomImage);
        }
    });
});
