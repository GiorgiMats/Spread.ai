(() => {
          // self‑contained to avoid globals
          const phrases = [
            "Win big, Win Often",
            "Earn Passive Income While They Sleep",
            "Join The AI Revolution",
            "Graduate From Gambling To Investing",
            "Turn $50 Into $50,000",
          ];

          const el = document.getElementById("title-anim-word");
          let idx = 0,
            dur = 350; // ms

          function cycle() {
            /* 1️⃣ animate old phrase out ↓ */
            el.classList.add("title-anim-out");

            setTimeout(() => {
              /* 2️⃣ swap text */
              idx = (idx + 1) % phrases.length;
              el.textContent = phrases[idx];

              /* 3️⃣ animate new phrase in ↓ */
              el.classList.remove("title-anim-out");
              el.classList.add("title-anim-in");

              /* 4️⃣ tidy up after animation ends */
              setTimeout(() => el.classList.remove("title-anim-in"), dur);
            }, dur); // wait for OUT animation to finish
          }

          /* run every 4 s – tweak as desired */
          setInterval(cycle, 4000);
        })();