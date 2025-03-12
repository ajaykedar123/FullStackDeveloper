document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-music");
    let playBtn = document.getElementById("playBtn");
    let pauseBtn = document.getElementById("pauseBtn");
    let volumeControl = document.getElementById("volumeControl");
    let notification = document.getElementById("notification");
    let message = document.getElementById("message");

   
    if (!audio || !playBtn || !pauseBtn || !volumeControl || !notification || !message) {
        console.error("One or more elements are missing!");
        return;
    }

    
    let autoplayAttempt = audio.play();

    if (autoplayAttempt !== undefined) {
        autoplayAttempt.then(() => {
            notification.classList.add("hidden");
        }).catch(() => {
            notification.classList.remove("hidden");
        });
    }

   
    playBtn.addEventListener("click", () => {
        audio.play();
        message.innerText = "🎵 Playing song...";
        message.style.color = "green";
        notification.classList.add("hidden");
    });

   
    pauseBtn.addEventListener("click", () => {
        audio.pause();
        message.innerText = "⏸️ Paused song.";
        message.style.color = "red";
    });

  
    volumeControl.addEventListener("input", () => {
        audio.volume = volumeControl.value;
    });

    
    audio.volume = 1;
    volumeControl.value = 1;
});
