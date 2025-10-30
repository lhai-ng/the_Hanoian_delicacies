import { posts } from "./posts";
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

// Code starts here

const postWrapper = document.querySelector("#post");

const oldStyle = document.querySelector("#post-style");
if (oldStyle) {
    oldStyle.remove();
}

const oldTitle = document.querySelector("#post-title");
if (oldTitle) {
    oldTitle.remove();
}

const params = new URLSearchParams(window.location.search);
const selectedId = params.get("id");
const post = posts.find(post => post.id === parseInt(selectedId));
postWrapper.innerHTML = post.html;

document.body.style.background = post.background;

const style = document.createElement("style");
style.id = "post-style";
style.textContent = post.css;
document.head.appendChild(style);

const title = document.createElement("title");
title.textContent = post.name;
title.id = "post-title";
document.head.appendChild(title);

const backBtn = document.createElement("a");
backBtn.textContent = "← Back"
backBtn.className = "back";

backBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const closingLoader = document.createElement("div");
    closingLoader.className = "closing-loader";
    document.body.appendChild(closingLoader);
    gsap.to(closingLoader, {
      top: "0",
      duration: .5,
      ease: "power1.out",
      onComplete: () => {
        window.location.href = `index.html`;
      }
    });
})

postWrapper.appendChild(backBtn);

const openingLoader = document.createElement("div");
openingLoader.className = "opening-loader";
const textLoader = document.createElement("h6");
textLoader.textContent = `${post.name}`;
textLoader.className = "text-loader";
openingLoader.appendChild(textLoader);
document.body.appendChild(openingLoader);

const tl = gsap.timeline();
tl.to(textLoader, {
    opacity: 1,
    duration: .6,
    ease: "sine.out",
});
tl.to(openingLoader, {
  top: "-100vh",
  borderRadius: "50%",
  duration: 1,
  delay: .25,
  ease: "power2.out",
})



