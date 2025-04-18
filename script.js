// Initialize timeline with infinite loop
const loopTL = gsap.timeline({repeat: -1});

// Animation sequence for each slide
function createSlideAnimation(index) {
    const img = `.imgContainer:nth-child(${index + 1}) img`;
    const text = `#text h1:nth-child(${index})`;
    const caption = `.imgContainer:nth-child(${index + 1}) .img-text`;
    
    // Slide enters
    loopTL.to(img, {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut"
    }, `+=${index === 1 ? 0 : 0.5}`);
    
    // Main text appears
    loopTL.fromTo(text, {
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out"
    }, "-=1");
    
    // Main text disappears
    loopTL.to(text, {
        opacity: 0,
        duration: 0.5
    }, "+=1.5");
    
    // Caption appears
    loopTL.to(caption, {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, "-=0.5");
    
    // Caption disappears
    loopTL.to(caption, {
        opacity: 0,
        duration: 0.5
    }, "+=1.5");
    
    // Slide exits (except last slide)
    if (index < 3) {
        loopTL.to(img, {
            opacity: 0,
            duration: 0.5
        }, "+=0.5");
    }
}

// Create animations for all 3 slides
createSlideAnimation(1);
createSlideAnimation(2);
createSlideAnimation(3);

// Reset at end of loop
loopTL.set(".imgContainer img", {
    width: "0%",
    opacity: 0
});