var crsr =document.querySelector("#cursor")
var blur =document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left =dets.x+30+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left =dets.x-100+"px"
    blur.style.top=dets.y-100+"px"
})
var h4all =document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
})
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95c11e"
        crsr.style.backgroundColor="#95c11e"
    })
})
gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",//scroll kya ho raha hai
        // markers:true,//to remove markers from screen ,make it false
        start:"top -7%",//start markers top se 10% pr
         end:"top -7%",
        scrub:1
    },////NEVER FORGET THIS COMMA
    
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        top:"top -20%",
        end:"top -350%",
        scrub:2,
    },///NEVER FORGET THIS COMMA AT THE END
});

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:2,
    duration:5,
    stragger:0.4, //elements will be selected one after another
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:3
    }
})
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#.card",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 55%",
//         scrub:1
//     }
// })

gsap.from("#colon1",{
    y:-60,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        bottom:"top 42%",
        scrub:7

    }
})
gsap.from("#colon2",{
    y:60,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 52%",
        bottom:"top 43%",
        scrub:4

    }
})

//ehat are you waiting for not working
gsap.from("#page4 h1",{
    y:6,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 13%",
        bottom:"top 13%",
        scrub:6
    
    }
})