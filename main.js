import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const preloader = document.querySelector("#preloader");
const anchorsPreloader = document.querySelectorAll("#preloader h6");
const display = document.querySelectorAll(".display");
const texts = document.querySelectorAll(".text");

const tl1 = gsap.timeline();
anchorsPreloader.forEach((anchor, index) => {
  const delay = index === 0 ? .5 : 0
  tl1.set(document.documentElement, {
    paddingRight: "16px",
    overflow: "hidden",
  }
  )
  tl1.to(anchor, {
    opacity: 1,
    duration: 0.5,
    ease: "power1.out",
    delay: delay,
  });
  if (index !== (anchorsPreloader.length - 1)) {
    tl1.to(anchor, {
    opacity: 0,
    delay: .4,
    duration: .4,
    ease: "power4.out"
  });
  }
})

tl1.to(preloader, {
  yPercent: -105,
  duration: 1.8,
  borderRadius: "50%",
  ease: "expo.inOut"
},"<");

tl1.set(document.documentElement, {
  paddingRight: "0",
  overflow: "auto",
}, "<");

function setupSplits(
  elements, 
  duration, 
  ease, 
  yPercent, 
  stagger = .1,
  delay = 0
) {
  elements.forEach((element) => {
    element.split = new SplitText(element, {
      type: "lines, words, chars",
      linesClass: "split-line",
    })

    document.querySelectorAll(".split-line").forEach(el => {
      const wrapper = Object.assign(document.createElement("div"), { className: "split-parent" });
      el.replaceWith(wrapper);
      wrapper.appendChild(el);
    });

    element.anim = tl1.from(element.split.lines, {
      duration: duration,
      ease: ease,
      yPercent: yPercent,
      stagger: stagger,
      delay: delay,
    }, "<")
  })
}

setupSplits(display, 2.5, "sine.out", 100, .1);
setupSplits(texts, 3, "sine.out", 100, .1);






