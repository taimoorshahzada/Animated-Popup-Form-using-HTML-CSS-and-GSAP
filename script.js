const pop = gsap.timeline({
    paused: "true"
})
pop.to(".popup-template", {
    duration: .8,
    opacity: 1,
    y: 0,
    scale: 1,
    ease: Power4.easeOut
})
pop.from(".popup-top, .form-row1 h1, .form-row1 input, .form-row1 textarea, .submit-popup", {
    duration: .5,
    opacity: 0,
    y: 15,
    stagger: {
        amount: .4
    }
},"-=.3")

function open_pop(){
    pop.play();
}
function close_pop(){
    pop.reverse();
}
