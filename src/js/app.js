const buttonContainer = document.getElementById("buttonContainer");

/**
 * Plays the specified audio file.
 * @param {string} audioFile - The path to the audio file.
 */
const audioFiles = {
  tom: new Audio("../assets/tom.wav"),
  kick: new Audio("../assets/kick.wav"),
  snare: new Audio("../assets/snare.wav"),
  ride: new Audio("../assets/ride.wav"),
  hihat: new Audio("../assets/hihat.wav"),
  openhat: new Audio("../assets/openhat.wav"),
};

const playSound = (audio) => {
  audio.currentTime = 0;
  audio.play();
};

buttonContainer.addEventListener("click", (event) => {
  if (event.target.matches(".btnStyle")) {
    const button = event.target;
    const buttonId = button.id;

    button.classList.add("btnTransition");

    if (buttonId === "a") {
      playSound(audioFiles.kick);
    } else if (buttonId === "s") {
      playSound(audioFiles.snare);
    } else if (buttonId === "d") {
      playSound(audioFiles.ride);
    } else if (buttonId === "j") {
      playSound(audioFiles.tom);
    } else if (buttonId === "k") {
      playSound(audioFiles.openhat);
    } else if (buttonId === "l") {
      playSound(audioFiles.hihat);
    }

    button.addEventListener(
      "transitionend",
      () => {
        button.classList.remove("btnTransition");
      },
      { once: true }
    );
  }
});

document.addEventListener("keydown", (event) => {
  const button = document.querySelector(`.btnStyle[id="${event.key}"]`);
  if (button) {
    button.classList.add("btnTransition");

    if (event.key === "a") {
      playSound(audioFiles.kick);
    } else if (event.key === "s") {
      playSound(audioFiles.snare);
    } else if (event.key === "d") {
      playSound(audioFiles.ride);
    } else if (event.key === "j") {
      playSound(audioFiles.tom);
    } else if (event.key === "k") {
      playSound(audioFiles.openhat);
    } else if (event.key === "l") {
      playSound(audioFiles.hihat);
    }

    button.addEventListener(
      "transitionend",
      () => {
        button.classList.remove("btnTransition");
      },
      { once: true }
    );
  }
});

window.addEventListener("load", () => {
  Object.values(audioFiles).forEach((audio) => {
    audio.load();
  });
});
