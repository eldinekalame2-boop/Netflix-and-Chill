let videoPlayed = false;

function showMessage(response) {

  if (response === "Non") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";
    document.querySelector(".image").src = "images/gun.gif";

    document.getElementById("question").textContent = "Choisis bien 😈";

    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.style.display = "none";

    noButton.addEventListener("mouseover", () => {
      if (!videoPlayed) {
        const video = document.createElement("video");
        video.src = "Maroon 5 - Sugar.mp4#t=42";
        video.autoplay = true;
        video.muted = true; // IMPORTANT pour autoplay
        video.style.position = "fixed";
        video.style.top = "40%";
        video.style.left = "50%";
        video.style.transform = "translate(-50%, -50%)";
        video.style.width = "600px";
        document.body.appendChild(video);
        videoPlayed = true;
      }

      noButton.style.left = Math.random() * maxWidth + "px";
      noButton.style.top = Math.random() * maxHeight + "px";
    });
  }

  if (response === "Oui") {
    document.getElementById("question").textContent =
      "OUUIIII 💖 Rendez-vous le 14, Princesse";

    document.querySelector(".image").src = "images/dance.gif";

    const audio = document.createElement("audio");
    audio.src = "Minions Cheering.mp4";
    audio.play().catch(() => {});

    document.getElementById("no-button").remove();
    document.getElementById("yesButton").remove();
  }
}
