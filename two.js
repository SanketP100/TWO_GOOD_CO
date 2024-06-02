function loco() {

    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}
loco()

var tl = gsap.timeline()

tl.to("#nav>#nav-part1>svg", {
    transform: "translateY(-100%)",
    scrollTrigger:{
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -5",
        scrub: 1
    }
})


tl.to("#nav>#nav-part2>links>a", {
    transform: "translateY(-100%)",
    scrollTrigger:{
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top 5%",
        end: "top -5",
        scrub: 1
    }
})


function page1videoAnim() {
    var vc = document.querySelector("#vid-con")
    var pbtn = document.querySelector("#play")

    vc.addEventListener("mouseenter", function () {
        gsap.to(pbtn, {
            opacity: 1,
            scale: 1,
        })
    })
    vc.addEventListener("mouseleave", function () {
        gsap.to(pbtn, {
            opacity: 0,
            scale: 0,
        })
    })
    vc.addEventListener("mousemove", function (dit) {
        gsap.to(pbtn, {
            left: dit.x - 170,
            top: dit.y - 170
        })
    })
}
page1videoAnim()

function loadinganim() {
    gsap.from("#h1div h1 ", {
        y: 100,
        opacity: 0,
        stagger: .2

    })
    gsap.from("#page1 #vid-con", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        stagger: .2

    })

}
loadinganim()

function mouse() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
            top: dets.y,
            left: dets.x
        })
    })
}
mouse()

function page4crsranim() {

    var shop = document.querySelectorAll(".shop")
    shop.forEach(function (dits) {
        dits.addEventListener("mouseenter", function () {
            gsap.to("#crsr", {
                transform: `translate(-50%,-50%) scale(1)`,

            })
        })
        dits.addEventListener("mouseleave", function () {
            gsap.to("#crsr", {
                transform: `translate(-50%,-50%) scale(0)`,

            })
        })
    })

    document.querySelector("#shop1").addEventListener("mouseenter", function (elme) {
        gsap.to("#crsr", {
            backgroundColor: "#d4d0d3"

        })
    })
    document.querySelector("#shop2").addEventListener("mouseenter", function (elme) {
        gsap.to("#crsr", {
            backgroundColor: "#e6dfd7"

        })
    })
    document.querySelector("#shop3").addEventListener("mouseenter", function (elme) {
        gsap.to("#crsr", {
            backgroundColor: "#fdaefd71"

        })
    })
    document.querySelector("#shop4").addEventListener("mouseenter", function (elme) {
        gsap.to("#crsr", {
            backgroundColor: "#B4D5B6"

        })
    })

}
page4crsranim()

function horiztlcrolla() {
    var cards = document.querySelector("#page5-part1")

    cards.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            event.currentTarget.scrollLeft += event.currentTarget.clientWidth
        }
        else {
            event.currentTarget.scrollLeft -= event.currentTarget.clientWidth

        }
    })
}
horiztlcrolla()

function btnboxAnim() {
    
var btn = document.querySelector("#page5-part2>#btn-box>#btn>#button1")
var btnBox = document.querySelector("#page5>#page5-part2>#btn-box")
var flag = 0

btn.addEventListener("click", function () {
    if (flag == 0) {
        btn.style.opacity="0"
        // color="#fff"
        btnBox.style.height = "343px"
        btnBox.style.width = "23.3%"
        btnBox.style.backgroundColor = "#000"
        btnBox.style.position = "absolute"
        btnBox.style.borderRadius = "30px"
        btnBox.style.overflow = "hidden"
        btnBox.style.display = "flex"
        btnBox.style.flexDirection = "column"
        btnBox.style.alignItems = "center"
        btnBox.style.justifyContent = "flex-start"
        btnBox.style.transition = "all ease .2s"
opacity=1
        flag = 1
    }
    else {
        btn.style.opacity="1"
        btnBox.style.height = "50px"
        btnBox.style.width = "23.3%"
        btnBox.style.overflow = "hidden"
        btnBox.style.borderRadius = "30px"
opacity=0
        flag = 0
    }

})
}
btnboxAnim()
