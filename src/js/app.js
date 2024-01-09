const buttonContainer = document.getElementById("buttonContainer");

buttonContainer.addEventListener("click", (event) => {
  if (event.target.matches(".btnStyle")) {
    // Memastikan yang diklik adalah tombol dengan kelas .btnStyle
    const button = event.target;
    console.log(button.id);
    button.classList.add("btnTransition"); // Tambahkan kelas btnTransition
    if (button.id === "a") {
      const tom = new Audio("../assets/tom.wav");
      tom.play();
      console.log("tombol a diklik");
    } else if (button.id === "s") {
      const kick = new Audio("../assets/kick.wav");
      kick.play();
      console.log("tombol s diklik");
    } else if (button.id === "d") {
      const snare = new Audio("../assets/snare.wav");
      snare.play();
      console.log("tombol d diklik");
    } else if (button.id === "j") {
      const ride = new Audio("../assets/ride.wav");
      ride.play();
      console.log("tombol j diklik");
    } else if (button.id === "k") {
      const hihat = new Audio("../assets/hihat.wav");
      hihat.play();
      console.log("tombol k diklik");
    } else if (button.id === "l") {
      const openhat = new Audio("../assets/openhat.wav");
      openhat.play();
      console.log("tombol l diklik");
    }

    button.addEventListener(
      "transitionend",
      () => {
        button.classList.remove("btnTransition"); // Hapus kelas setelah transisi selesai
      },
      { once: true }
    );
  }
});

document.addEventListener("keydown", (event) => {
  const button = document.querySelector(`.btnStyle[id="${event.key}"]`);
  button.classList.add("btnTransition");
  if (event.key === "a") {
    const tom = new Audio("../assets/tom.wav");
    tom.play();
    console.log("tombol a diklik");
  } else if (event.key === "s") {
    const kick = new Audio("../assets/kick.wav");
    kick.play();
    console.log("tombol s diklik");
  } else if (event.key === "d") {
    const snare = new Audio("../assets/snare.wav");
    snare.play();
    console.log("tombol d diklik");
  } else if (event.key === "j") {
    const ride = new Audio("../assets/ride.wav");
    ride.play();
    console.log("tombol j diklik");
  } else if (event.key === "k") {
    const hihat = new Audio("../assets/hihat.wav");
    hihat.play();
    console.log("tombol k diklik");
  } else if (event.key === "l") {
    const openhat = new Audio("../assets/openhat.wav");
    openhat.play();
    console.log("tombol l diklik");
  }
  button.addEventListener(
    "transitionend",
    () => {
      button.classList.remove("btnTransition"); // Hapus kelas setelah transisi selesai
    },
    { once: true }
  );
});
