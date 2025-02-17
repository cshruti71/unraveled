// GSAP Animations for Opening Page
gsap.from(".fade-in-text", { opacity: 0, duration: 5, delay: 1 });
//flicker
const light = document.querySelector(".flicker-light");

if (light) {
  function flicker() {
    const intensity = Math.random() * 0.3 + 0.7; // Random opacity between 0.7 and 1
    const blur = Math.random() * 20 + 50; // Random blur effect (a little more intense)

    light.style.opacity = intensity;
    light.style.boxShadow = `0 0 ${blur}px rgba(255, 255, 200, ${intensity})`;

    setTimeout(flicker, Math.random() * 500 + 100); // Random flicker speed between 100ms - 600ms
  }

  flicker();
}
setTimeout(() => {
  console.log("Updating page content..."); // Debugging log

  // Replace body content with the new layout
  document.body.innerHTML = `
    <div class="background">
      <audio id="whisper-audio" src="assets/whispers.mp3"></audio>
      <div class="whispers">
        <p class="whisper-option" id="play-audio">Listen to the Last Words</p>
        <a href="room.html" class="whisper-option">Follow the Shadow</a>
        <p class="whisper-option" id="restart">Forget</p>
      </div>
    </div>
  `;

  // Apply background styling
  document.body.style.backgroundImage = 'url("assets/background-image.jpg")';
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundRepeat = "no-repeat";

  // Re-add event listener for playing audio
  const audio = document.getElementById("whisper-audio");
  const playAudioButton = document.getElementById("play-audio");

  playAudioButton.addEventListener("click", () => {
    audio.play();
    console.log("Audio played.");
  });

  // Re-add event listener for restart (reloads page)
  document.getElementById("restart").addEventListener("click", () => {
    location.reload();
  });

  console.log("Page updated and event listeners reattached.");
}, 3000);

// Opening Section Interactions
const whisperOptions = document.querySelectorAll(".whisper-option");
const audio = document.getElementById("whisper-audio");

whisperOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    const action = e.target.getAttribute("data-action");
    if (action === "play-audio") {
      audio.play();
    } else if (action === "restart") {
      location.reload();
    }
  });
});

// The Room Section Interactions
const memories = document.querySelectorAll(".memory");

memories.forEach((memory) => {
  memory.addEventListener("click", () => {
    const text = memory.querySelector(".memory-text");
    text.classList.toggle("hidden");
  });
});

// The Spiral Section Interactions
const thoughtsInput = document.getElementById("thoughts");

if (thoughtsInput) {
  thoughtsInput.addEventListener("input", () => {
    gsap.to(thoughtsInput, { opacity: 0, duration: 2 });
  });
}
