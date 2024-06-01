// Animation for the moon

// Rotation start
gsap.from(".moon", {
    duration: 1, rotate: -20, yoyo:true
});
// Movement and rotation end
gsap.to ('.moon', {
duration: 2, x: '-50%', repeat: -1, yoyo:true
})
gsap.to(".moon", {
    duration: 2, rotate: 20, repeat: -1, yoyo:true
});


// Animation for Stars

// Animation for movement, rotation and scale with different values for the small and large
// Using delay so the stars don't have the exact same movement
gsap.from(".starSmall" , {
    duration: 2, repeat: -1, rotate: 360, scale: 1.5, y: '70%', yoyo:true, delay: 2
});
gsap.from(".starLarge", {
    duration:2, rotate: 360, scale: 2, y: '50%', repeat: -1, yoyo:true
});
// Animation for the stars end point
gsap.to([".starSmall", ".starLarge"], {
    duration: 2, x: '20%', y: '-5%', repeat: -1, yoyo:true, delay: 2
});


// Animation for Earth eyes

// Animation for movment of the eyes
gsap.from(".earthEyes", {
    duration: 4, x: '10%', y: '20%', repeat: -1, yoyo:true
});
// Animation for movment of the eyes end
gsap.to(".earthEyes", {
    duration: 3, y: '-10%', repeat: -1, yoyo:true
});