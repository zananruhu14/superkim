document.addEventListener("DOMContentLoaded", () => {
  const letterImage = document.querySelector(".letter-image");

  const body = document.body;

  let clickCount = 0;

  if (letterImage) {
    letterImage.addEventListener("click", () => {
      if (clickCount === 0) {
        // First click: Open the envelope

        letterImage.classList.add("opened");

        clickCount = 1;
      } else if (clickCount === 1) {
        // Second click: Reveal the love message

        body.classList.add("love-revealed");

        clickCount = 2; // Prevent further clicks from doing anything

        // Optional: could remove the event listener here

        // letterImage.removeEventListener('click', arguments.callee);
      }

      // If clickCount is 2 or more, do nothing
    });
  } else {
    console.error("Element with class '.letter-image' not found.");
  }
});
