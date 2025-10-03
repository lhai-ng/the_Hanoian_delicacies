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
const header = document.querySelector("header");
const display = document.querySelectorAll(".display");
const texts = document.querySelectorAll(".text");
const heroImages = document.querySelectorAll("#hero img");
const hero = document.querySelector("#hero");

const audioSwitch = document.querySelector(".audio-switch");
const soundOn = document.querySelector(".sound-on");
const soundOff = document.querySelector(".sound-off");
const bars = document.querySelectorAll(".wave-animation .bar");
const audio = document.querySelector("audio");
let isPlaying = true;

function playAudio(isPlaying) {
  if (isPlaying) {
    soundOn.style.display = "block";
    soundOff.style.display = "none";
    bars.forEach((bar, index) => {
      bar.anim = gsap.fromTo(bar, {
        scaleY: .8,
      }, {
        scaleY: 1.1,
        duration: .7,
        yoyo: true,
        repeat: -1,
        ease: 'sine.out',
        delay: index * .15,
      });
    })
    audio.volume = .4;
    audio.play();
  } else {
    soundOn.style.display = "none";
    soundOff.style.display = "block";
    bars.forEach((bar) => {
      if (bar.anim) {
        bar.anim.kill();
      }
      bar.anim = gsap.to(bar, {
        scaleY: 1,
        duration: .3,
        ease: "sine.out",
      })
    })
    audio.pause()
  }
}

audioSwitch.onclick = () => {
  playAudio(isPlaying);
  isPlaying = !isPlaying;
}


const tl1 = gsap.timeline();
anchorsPreloader.forEach((anchor, index) => {
  const delay = index === 0 ? .5 : 0;
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
    delay: .2,
    duration: .4,
    ease: "power4.out",
  });
  }
})

tl1.to(preloader, {
  yPercent: -105,
  duration: 1.8,
  borderRadius: "50%",
  ease: "expo.inOut",
  onStart: () => {
    playAudio(false);
  }
},"<");

tl1.from(header, {
  yPercent: -100,
  ease: "sine.out",
  duration: 2.5,
}, "<")

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

setupSplits(display, 1.75, "sine.out", 100, .1);
setupSplits(texts, 2, "sine.out", 100, .1);

heroImages.forEach((img, index) => {
  const imageWrapper = Object.assign(document.createElement("div"), { className: `image-wrapper-${index+1}`});
  img.replaceWith(imageWrapper);
  imageWrapper.appendChild(img);

  img.anim = tl1.from(img, {
    duration: 2.5,
    ease: "power2.out",
    xPercent: -100,
    delay: 0,
  }, "<");
});

tl1.to(hero, {
  scrollTrigger: {
    trigger: hero,
    start: 'top 0%',
    end: 'bottom 5%',
    scrub: true,
  },
  top: "-640px",
  ease: "power2.out"
}, "<");





