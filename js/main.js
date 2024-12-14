const splide = new Splide(".splide").mount();

splide.on("moved", () => {
    updateSlideIndex();
});

const updateSlideIndex = () => {
    document.querySelector(".slide-current-number").textContent = splide.index + 1;
    document.querySelector(".slide-length").textContent = splide.Components.Elements.slides.length;
};

updateSlideIndex();
