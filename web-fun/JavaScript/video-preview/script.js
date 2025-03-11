document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("video");

    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();

    });
});