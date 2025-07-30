(function () {
              const widget = document.getElementById("accordion-widget");
              const SECTIONS = Array.from(widget.querySelectorAll(".section"));
              const IMG_EL = widget.querySelector("#display-image");
              const DURATION = 8000; // cycle duration
              const FADE = 500; // fade duration
              let timeoutId;

              function updateImage(newSrc) {
                IMG_EL.classList.add("fade-out");
                setTimeout(() => {
                  IMG_EL.src = newSrc;
                  IMG_EL.onload = () => IMG_EL.classList.remove("fade-out");
                }, FADE);
              }

              function activate(idx, skipFade = false) {
                // reset all
                SECTIONS.forEach((sec) => {
                  sec.classList.remove("active");
                  const bar = sec.querySelector(".progress-bar");
                  bar.style.animation = "none";
                  bar.style.width = "0";
                });
                // activate this one
                const sec = SECTIONS[idx];
                sec.classList.add("active");

                // swap image (or set directly if skipFade)
                if (skipFade) {
                  IMG_EL.src = sec.dataset.image;
                } else {
                  updateImage(sec.dataset.image);
                }

                // animate its bar
                const bar = sec.querySelector(".progress-bar");
                void bar.offsetWidth;
                bar.style.animation = `fill ${DURATION}ms linear forwards`;

                // schedule next
                clearTimeout(timeoutId);
                timeoutId = setTimeout(
                  () => activate((idx + 1) % SECTIONS.length),
                  DURATION
                );
              }

              // clicks jump immediately
              SECTIONS.forEach((sec, i) => {
                sec
                  .querySelector(".header-perks")
                  .addEventListener("click", () => activate(i));
              });

              // on load: show first instantly, then continue
              activate(0, true);
            })();