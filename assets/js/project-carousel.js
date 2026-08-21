document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("[data-carousel]");

  if (!carousel) {
    return;
  }

  const track = carousel.querySelector("[data-carousel-track]");
  const cards = Array.from(track.querySelectorAll(".project-card"));

  const previousButton = carousel.querySelector("[data-carousel-prev]");

  const nextButton = carousel.querySelector("[data-carousel-next]");

  const dotsContainer = document.querySelector("[data-carousel-dots]");

  if (!track || cards.length === 0) {
    return;
  }

  /*
   * -------------------------------------------------------
   * STATE
   * -------------------------------------------------------
   */

  let currentIndex = 0;

  let itemsPerView = getItemsPerView();

  let autoPlayTimer = null;

  const autoPlayDelay = 5000;

  /*
   * -------------------------------------------------------
   * DETERMINE ITEMS PER VIEW
   * -------------------------------------------------------
   */

  function getItemsPerView() {
    const width = window.innerWidth;

    if (width <= 680) {
      return 1;
    }

    if (width <= 980) {
      return 2;
    }

    return 3;
  }

  /*
   * -------------------------------------------------------
   * MAXIMUM SLIDE
   * -------------------------------------------------------
   */

  function getMaxIndex() {
    return Math.max(0, cards.length - itemsPerView);
  }

  /*
   * -------------------------------------------------------
   * UPDATE CAROUSEL
   * -------------------------------------------------------
   */

  function updateCarousel() {
    itemsPerView = getItemsPerView();

    const maxIndex = getMaxIndex();

    /*
     * Make sure current index
     * remains valid after resize.
     */

    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    /*
     * Calculate card width.
     */

    const cardWidth = cards[0].getBoundingClientRect().width;

    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;

    const offset = currentIndex * (cardWidth + gap);

    track.style.transform = `translateX(-${offset}px)`;

    updateButtons();

    updateDots();
  }

  /*
   * -------------------------------------------------------
   * BUTTON STATE
   * -------------------------------------------------------
   */

  function updateButtons() {
    const maxIndex = getMaxIndex();

    if (cards.length <= itemsPerView) {
      previousButton.disabled = true;
      nextButton.disabled = true;

      return;
    }

    previousButton.disabled = currentIndex <= 0;

    nextButton.disabled = currentIndex >= maxIndex;
  }

  /*
   * -------------------------------------------------------
   * DOTS
   * -------------------------------------------------------
   */

  function createDots() {
    if (!dotsContainer) {
      return;
    }

    dotsContainer.innerHTML = "";

    const totalSlides = getMaxIndex() + 1;

    for (let index = 0; index < totalSlides; index++) {
      const dot = document.createElement("button");

      dot.type = "button";

      dot.className = "carousel-dot";

      dot.setAttribute("aria-label", `Go to project slide ${index + 1}`);

      dot.addEventListener("click", function () {
        goToSlide(index);

        restartAutoPlay();
      });

      dotsContainer.appendChild(dot);
    }
  }

  /*
   * -------------------------------------------------------
   * UPDATE DOTS
   * -------------------------------------------------------
   */

  function updateDots() {
    if (!dotsContainer) {
      return;
    }

    const dots = dotsContainer.querySelectorAll(".carousel-dot");

    dots.forEach(function (dot, index) {
      dot.classList.toggle("is-active", index === currentIndex);
    });
  }

  /*
   * -------------------------------------------------------
   * GO TO SLIDE
   * -------------------------------------------------------
   */

  function goToSlide(index) {
    const maxIndex = getMaxIndex();

    currentIndex = Math.max(0, Math.min(index, maxIndex));

    updateCarousel();
  }

  /*
   * -------------------------------------------------------
   * NEXT
   * -------------------------------------------------------
   */

  function nextSlide() {
    const maxIndex = getMaxIndex();

    if (currentIndex >= maxIndex) {
      /*
       * Return to first slide.
       */

      currentIndex = 0;
    } else {
      currentIndex++;
    }

    updateCarousel();
  }

  /*
   * -------------------------------------------------------
   * PREVIOUS
   * -------------------------------------------------------
   */

  function previousSlide() {
    const maxIndex = getMaxIndex();

    if (currentIndex <= 0) {
      /*
       * Go to the last possible position.
       */

      currentIndex = maxIndex;
    } else {
      currentIndex--;
    }

    updateCarousel();
  }

  /*
   * -------------------------------------------------------
   * BUTTON EVENTS
   * -------------------------------------------------------
   */

  previousButton.addEventListener("click", function () {
    previousSlide();

    restartAutoPlay();
  });

  nextButton.addEventListener("click", function () {
    nextSlide();

    restartAutoPlay();
  });

  /*
   * -------------------------------------------------------
   * AUTOPLAY
   * -------------------------------------------------------
   */

  function startAutoPlay() {
    stopAutoPlay();

    /*
     * Don't autoplay if there
     * aren't enough cards.
     */

    if (cards.length <= itemsPerView) {
      return;
    }

    autoPlayTimer = setInterval(nextSlide, autoPlayDelay);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);

      autoPlayTimer = null;
    }
  }

  function restartAutoPlay() {
    stopAutoPlay();

    startAutoPlay();
  }

  /*
   * -------------------------------------------------------
   * PAUSE ON HOVER
   * -------------------------------------------------------
   */

  carousel.addEventListener("mouseenter", stopAutoPlay);

  carousel.addEventListener("mouseleave", startAutoPlay);

  /*
   * -------------------------------------------------------
   * PAUSE WHEN FOCUSED
   * -------------------------------------------------------
   */

  carousel.addEventListener("focusin", stopAutoPlay);

  carousel.addEventListener("focusout", function (event) {
    /*
     * Only restart if focus
     * has left the carousel.
     */

    if (!carousel.contains(event.relatedTarget)) {
      startAutoPlay();
    }
  });

  /*
   * -------------------------------------------------------
   * TOUCH / SWIPE
   * -------------------------------------------------------
   */

  let touchStartX = 0;

  let touchEndX = 0;

  carousel.addEventListener(
    "touchstart",
    function (event) {
      touchStartX = event.changedTouches[0].screenX;
    },
    {
      passive: true,
    },
  );

  carousel.addEventListener(
    "touchend",
    function (event) {
      touchEndX = event.changedTouches[0].screenX;

      handleSwipe();
    },
    {
      passive: true,
    },
  );

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

    const minimumSwipe = 50;

    if (Math.abs(swipeDistance) < minimumSwipe) {
      return;
    }

    if (swipeDistance < 0) {
      nextSlide();
    } else {
      previousSlide();
    }

    restartAutoPlay();
  }

  /*
   * -------------------------------------------------------
   * KEYBOARD NAVIGATION
   * -------------------------------------------------------
   */

  carousel.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      nextSlide();

      restartAutoPlay();
    }

    if (event.key === "ArrowLeft") {
      previousSlide();

      restartAutoPlay();
    }
  });

  /*
   * -------------------------------------------------------
   * WINDOW RESIZE
   * -------------------------------------------------------
   */

  let resizeTimer;

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function () {
      itemsPerView = getItemsPerView();

      createDots();

      updateCarousel();

      restartAutoPlay();
    }, 150);
  });

  /*
   * -------------------------------------------------------
   * INITIALIZE
   * -------------------------------------------------------
   */

  createDots();

  updateCarousel();

  startAutoPlay();
});
