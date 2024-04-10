

gsap.from(".moon", {
    duration: 1, rotate: -20, yoyo:true
});
gsap.to ('.moon', {
duration: 2, x: '-50%', repeat: -1, yoyo:true
})
gsap.to(".moon", {
    duration: 2, rotate: 20, repeat: -1, yoyo:true
});


gsap.from(".starSmall" , {
    duration: 2, repeat: -1, rotate: 360, scale: 1.5, y: '70%', yoyo:true, delay: 2
});
gsap.from(".starLarge", {
    duration:2, rotate: 360, scale: 2, y: '50%', repeat: -1, yoyo:true
});
gsap.to([".starSmall", ".starLarge"], {
    duration: 2, x: '20%', y: '-5%', repeat: -1, yoyo:true, delay: 2
});



gsap.from(".earthEyes", {
    duration: 4, x: '10%', y: '20%', repeat: -1, yoyo:true
});
gsap.to(".earthEyes", {
    duration: 3, y: '-10%', repeat: -1, yoyo:true
});