const buttonContainer = document.getElementById("buttonContainer");

/**
 * Plays the specified audio file.
 * @param {string} audioFile - The path to the audio file.
 */
const playSound = (audioFile) => {
  const audio = new Audio(audioFile);
  audio.play();
};

buttonContainer.addEventListener("click", (event) => {
  if (event.target.matches(".btnStyle")) {
    const button = event.target;
    const buttonId = button.id;

    button.classList.add("btnTransition");

    if (buttonId === "a") {
      playSound("../assets/tom.wav");
    } else if (buttonId === "s") {
      playSound("../assets/kick.wav");
    } else if (buttonId === "d") {
      playSound("../assets/snare.wav");
    } else if (buttonId === "j") {
      playSound("../assets/ride.wav");
    } else if (buttonId === "k") {
      playSound("../assets/hihat.wav");
    } else if (buttonId === "l") {
      playSound("../assets/openhat.wav");
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
      playSound("../assets/tom.wav");
    } else if (event.key === "s") {
      playSound("../assets/kick.wav");
    } else if (event.key === "d") {
      playSound("../assets/snare.wav");
    } else if (event.key === "j") {
      playSound("../assets/ride.wav");
    } else if (event.key === "k") {
      playSound("../assets/hihat.wav");
    } else if (event.key === "l") {
      playSound("../assets/openhat.wav");
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
