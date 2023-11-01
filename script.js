var tl = gsap.timeline();


function time(){
    var a = 0
    setInterval(function(){
     a = a + Math.floor(Math.random()*40)
        if(a < 100){
          var h1loader =  document.querySelector("#loader h1")
           h1loader.innerHTML = a+"%"
        }else{
            a = 100
            h1loader.innerHTML = a+"%"
        }
    },150)
}

tl.to(".loader h1",{
    delay:.2,
    duration:1,
    onStart:time()
});
tl.to(".loader",{
    top:"-100vh",
    delay:.4,
    duration:1
})



tl.from(".logo",{
    x:100,
    duration:.5,
    opacity:0,
});
tl.from(".nav-list ul li a",{
    y:-200,
    duration:.5,
    opacity:0,
    stagger:0.2,
});
tl.from(".connect",{
    x:-300,
    duration:.5,
    opacity:0
});
tl.from(".HERO-H1 h1",{
    x:-200,
    duration:.5,
    opacity:0,
    stagger:0.5,
});
tl.from(".img img",{
    duration:.5,
    opacity:0,
    stagger:0.5,
})
tl.from("#scroll",{
    scale:0,
    opacity:0,
});
tl.to("#scroll",{
    y:30,
    repeat:-1,
    duration:.7,
    yoyo:true,
});
tl.from(".card-h1",{
    x:100,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:".card-h1",
        scroller:"body",
    }
});
gsap.from(".contact",{
    scale:0.5,
    opacity:0,
    duration:.2,
    scrollTrigger:{
        trigger:".cont",
        scroller:"body",
        scrub:1,
    }
})
gsap.from(".card-1 img",{
    scale:0.5,
    opacity:1,
    duration:.2,
    scrollTrigger:{
        trigger:"card",
        scroller:"body",
        pin:"true",
        scrub:1,
        end:"top -130%",
        start:"top 0",
        pin:true
    }
});
gsap.from(".card-1des",{
    x:600,
    opacity:1,
    duration:.2,
    scrollTrigger:{
        trigger:"card",
        scroller:"body",
        pin:"true",
        scrub:1,
        end:"top -130%",
        start:"top 0",
        pin:true
    }
});
gsap.from(".card-3 img",{
    scale:0.5,
    duration:.2,
    scrollTrigger:{
        trigger:"card-3",
        scroller:"body",
        pin:true,
        scrub:1,
    }
});
gsap.from(".card-3des",{
    x:600,
    duration:.2,
    scrollTrigger:{
        trigger:"card-3",
        scroller:"body",
        pin:true,
        scrub:1,
    }
});
gsap.from(".card-2 img",{
    scale:0.5,
    duration:.2,
    scrollTrigger:{
        trigger:"card-2",
        scroller:"body",
        pin:true,
        scrub:1,
    }
});
gsap.from(".card-2des",{
    x:-100,
    duration:.2,
    scrollTrigger:{
        trigger:"card-2",
        scroller:"body",
        scrub:1,
        pin:true
    }
});
gsap.from(".card-4 img",{
    scale:0.5,
    duration:.2,
    scrollTrigger:{
        trigger:"card-4",
        scroller:"body",
        pin:true,
        scrub:1,
    }
});
gsap.from(".card-4des",{
    x:-600,
    duration:.2,
    scrollTrigger:{
        trigger:"card-4",
        scroller:"body",
        scrub:1,
        pin:true
    }
});
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const name = document.getElementById("name-input").value;

    const doneMessage = document.getElementById("done-message");
    doneMessage.textContent = `Hi ${name}, we will reach you very soon.`;

    document.getElementById("cont").style.display = "none";
    document.getElementById("done").style.display = "block";
});

document.getElementById("ok-button").addEventListener("click", function () {
    document.getElementById("cont").style.display = "block";
    document.getElementById("done").style.display = "none";
});