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


const historyH2s = document.querySelectorAll("#history h2");
const historyPs = document.querySelectorAll("#history p");
const historyH6s = document.querySelectorAll("#history h6");
const historyImgs = document.querySelectorAll("#history img");

const audioSwitch = document.querySelector(".audio-switch");
const soundOn = document.querySelector(".sound-on");
const soundOff = document.querySelector(".sound-off");
const bars = document.querySelectorAll(".wave-animation .bar");
const audio = document.querySelector("audio");
let isPlaying = true;

document.documentElement.style.height = '6459px';
document.body.style.height = '6459px';

const tl1 = gsap.timeline();

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

// Animation tl1 starts here
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
    window.scrollTo({
      top: 0,
      left: 0,
    });
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
  });
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

gsap.to(hero, {
  scrollTrigger: {
    trigger: hero,
    start: 'top 0%',
    end: '70% 0%',
    scrub: true,
  },
  top: "-640px",
  ease: "power2.out"
});

gsap.to(document.body, {
  scrollTrigger: {
    trigger: document.body,
    start: "1100px 100%",
    end: "1100px 20%",
    scrub: true,
  },
  background: "#3E1421",
  ease: "expo.out",
});

gsap.to(document.body, {
  scrollTrigger: {
    trigger: document.body,
    start: "3000px 30%",
    end: "3300px 5%",
    scrub: true,
    onEnter: () => {
      document.body.style.background = "#3E1421";
    }
  },
  background: "#FFECB7",
  ease: "expo.out(5)",
  immediateRender: false,
});

function setupScrollTriggerText(elements) {
  elements.forEach((element) => {
    element.split = new SplitText(element, {
      type: "lines, words, chars",
      linesClass: "split-line"
    })

    document.querySelectorAll(".split-line").forEach(el => {
      const wrapper = Object.assign(document.createElement("div"), { className: "split-parent" });
      el.replaceWith(wrapper);
      wrapper.appendChild(el);
    });

    element.anim = gsap.from(element.split.lines, {
      scrollTrigger: {
        trigger: element.split.lines,
        start: "top 90%",
        end: "bottom 30%",
        scrub: true,
        once: true,
      },
      ease: "power2.out",
      yPercent: 100,
      stagger: .1,
      duration: 1,
    })
  });
}

setupScrollTriggerText(historyH2s);
setupScrollTriggerText(historyPs);
setupScrollTriggerText(historyH6s);

historyImgs.forEach((img, index) => {
  const wrapper = document.createElement('div');
  wrapper.className = `history-img wrapper-${index+1}`;
  img.parentElement.insertBefore(wrapper, img);
  const vpPercent = ["30%", "15%", "45%", "10%"]
  
  gsap.to(wrapper, {
      scrollTrigger: {
        trigger: wrapper,
        start: "top 100%",
        end: `bottom ${vpPercent[index]}`,
        scrub: true,
        onUpdate: () => {
          let color = document.body.style.background;
          wrapper.style.background = color + '!important';
        },
      },
      ease: "expo.out",
      xPercent: 100,
      stagger: .1,
      duration: 1,
  }, "<")
});

// Menu animation
const contents = document.querySelector(".menu-content");
const preview = document.querySelector(".preview");
const previewImg = document.querySelector(".preview-image");

const bgPositions = [
  "0 0%", "0 7.14%", "0 14.29%", "0 21.43%", "0 28.57%", "0 35.71%",
  "0 42.86%", "0 50.01%", "0 57.14%", "0 64.29%", "0 71.43%", "0 78.57%",
  "0 85.71%", "0 92.86%", "0 100%",
];

// Hiện / ẩn preview
const displayPreview = () => {
  contents.addEventListener("mouseenter", () => {
    gsap.killTweensOf(preview);
    gsap.to(preview, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  contents.addEventListener("mouseleave", () => {
    gsap.killTweensOf(preview);
    gsap.to(preview, {
      scale: 0,
      duration: 0.7,
      ease: "expo.out"
    });
  });
};
displayPreview();

const movePreview = () => {
  const items = Array.from(contents.children);

  items.forEach((content, index) => {
    let tl; 

    content.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (tl) tl.kill();

      tl = gsap.timeline();
      tl.to(preview, {
        y: 120 * index,
        duration: 0.7,
        ease: "expo.out"
      })
      .to(previewImg, {
        backgroundPosition: bgPositions[index] || "0 0%",
        duration: 0.8,
        ease: "expo.out(1.9)",
      }, "<")
      .to(content, {
        background: "#FFCB38",
        duration: 0.8,
        ease: "power2.out",
      }, "<");
    });

    content.addEventListener("mouseleave", () => {
      if (tl) tl.kill();
      gsap.to(content, {
        background: "#FFECB7",
        duration: 0.7,
        ease: "back.out"
      });
    });
  });
};
movePreview();

const toHistory = document.querySelector(".to-history");
const toMenu = document.querySelector(".to-menu");

function sectionDirection(top) {
  window.scrollTo({
    top: top,
    left: 0,
    behavior: "smooth"
  })
}

toHistory.onclick = () => {
  sectionDirection(1200);
}

toMenu.onclick = () => {
  sectionDirection(3200);
}

// Navigation type checking
const navEntry = performance.getEntriesByType('navigation')[0];
const navigationType = navEntry ? navEntry.type : 'navigate';
const tl2 = gsap.timeline();

const isReload = navigationType === "reload";
const isBackForward = navigationType === "back-forward";
const isReturningFromPost = sessionStorage.getItem("fromPost") === 'true';
const savedScrollPosition = sessionStorage.getItem("scrollPos");

if (!isReload && isReturningFromPost && savedScrollPosition) {
  preloader.style.display = 'none';
  document.documentElement.style.paddingRight = "0";
  document.documentElement.style.overflow = "auto";

  console.log('hehe');

  tl1.progress(1);

  const openingLoader = document.createElement("div");
  openingLoader.className = "opening-loader";
  const textLoader = document.createElement("h6");
  textLoader.textContent = "(Menu)";
  textLoader.className = "text-loader";
  openingLoader.appendChild(textLoader);
  document.body.appendChild(openingLoader);

  tl2.to(textLoader, {
    opacity: 1,
    duration: .6,
    ease: "sine.out",
  });
  tl2.to(openingLoader, {
    top: "-100vh",
    borderRadius: "50%",
    duration: 1,
    delay: .25,
    ease: "power2.out",
  })

  setTimeout(() => {
    window.scrollTo(0, parseInt(savedScrollPosition));
    document.body.style.background = "var(tertiary)";
    sessionStorage.removeItem("fromPost");
    sessionStorage.removeItem("scrollPos")
  }, 100)
}

// Post onclick and onback from post to main
const links = document.querySelectorAll(".menu-content a");
links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    sessionStorage.setItem('scrollPos', window.scrollY.toString());
    sessionStorage.setItem("fromPost", 'true');

    e.preventDefault;

    const closingLoader = document.createElement("div");
    closingLoader.className = "closing-loader";
    document.body.appendChild(closingLoader);
    gsap.to(closingLoader, {
      top: "0",
      duration: .5,
      ease: "power1.out",
      onComplete: () => {
        window.location.href = `post.html?id=${index + 1}`;
      }
    });
  })
});









