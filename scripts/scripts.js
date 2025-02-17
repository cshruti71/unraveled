// GSAP Animations for Opening Page
gsap.from(".fade-in-text", { opacity: 0, duration: 5, delay: 1 });

// Opening Section Interactions
const whisperOptions = document.querySelectorAll(".whisper-option");
const audio = document.getElementById("whisper-audio");

whisperOptions.forEach(option => {
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
                                memories.forEach(memory => {
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