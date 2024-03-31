"use strict";
// gsap
document.querySelectorAll(".split, .index").forEach((desc) => {
  let splitText = desc.innerText;
  let splitWrap = splitText.split("").join("</span><span aria-hidden:'true'>");
  splitWrap = "<span aria-hidden:'true'>" + splitWrap + "</span>";
  desc.innerHTML = splitWrap;
  desc.setAttribute("aria-label", splitText);
}); //.preloader_logo, index span 만들기

//초기 세팅
gsap.set(".index1 span, .index2 span, .index3 span", {
  height: "auto",
  width: "auto",
  y: -50,
});
gsap.set(".preloader_logo span", {
  opacity: 0,
  scale: 0,
  display: "inline-block",
}); //load text
gsap.set(
  ".preloader_logo span:nth-child(4), .preloader_logo span:nth-child(8)",
  {
    marginRight: "0.5rem",
  }
);
gsap.set(".preloader", {
  height: "100%",
}); //preloader
gsap.set(".home_top_inr .home_inr_img, .home_bottom_inr .home_inr_img", {
  opacity: 0,
  scale: 0.1,
}); //home port, home folio
gsap.set(".home_middle_inr", { opacity: 0, x: "-100%" }); //home middle
gsap.set(".home_middle_inr h2, .home_middle_inr p", {
  opacity: 0,
  y: "-100%",
});

// gsap 메인 실행
setTimeout(() => {
  let tl = gsap.timeline();
  tl.to(".preloader_logo span", {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: Power3.easeInOut,
  });
  tl.to(".reversal", {
    scaleX: -1,
    duration: 0.3,
    ease: Power3.easeInOut,
  });
  // 반응형 preloader_inr 애니메이션
  ScrollTrigger.matchMedia({
    "(min-width: 1381px)": function () {
      tl.to(".preloader_inr", {
        top: "24px",
        left: "64px",
        translateX: "64px",
        translateY: "24px",
        duration: 0.5,
      });
    },
    "(max-width: 1380px)": function () {
      tl.to(".preloader_inr", {
        top: "24px",
        left: "32px",
        transform: "translate(0px,0px)",
        duration: 0.5,
      });
    },
    "(max-width: 768px)": function () {
      tl.to(".preloader_inr", {
        top: "24px",
        left: "12px",
        transform: "translate(8px,0px)",
        duration: 0.5,
      });
    },
    all: function () {
      // 다른 화면 크기에 대한 처리
    },
  });
  tl.to(".preloader", {
    height: 0,
    duration: 0.2,
    ease: Power3.easeInOut,
  });
  tl.to(".preloader_inr", {
    opacity: 0,
    duration: 0.3,
  }); //preloder 숨기기
  tl.to(
    ".home_top_inr .home_inr_img",
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: Power3.ease,
    },
    "ee +=0.5"
  );
  tl.to(
    ".home_bottom_inr .home_inr_img",
    { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: Power3.ease },
    "ee +=1"
  );
  tl.to(
    ".home_middle_inr",
    { opacity: 1, x: "0%", duration: 0.5, ease: Circ.easOut },
    "ee +=1.5"
  );
  tl.to(".home_middle_inr h2", { opacity: 1, y: "0%", duration: 1 }, "ee +=2");
  tl.to(".home_middle_inr p", { opacity: 1, y: "0%", duration: 1 }, "ee +=2.5");
}, 300);

//ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".project_inr_box1", {
  scrollTrigger: {
    trigger: ".project1",
    start: "-100% top",
    end: "-100% bottom",
    scrub: 1,
    //markers: true,
  },
  scaleX: 1.0,
  scaleY: 1.0,
  scaleZ: 1.3,
  duration: 0.1,
  ease: "power1.inOut",
  startAt: { scale: 0.9 }, // 초기 너비 설정
}); //project_inr_box

gsap.to(".project_inr_box2", {
  scrollTrigger: {
    trigger: ".project2",
    start: "-100% top",
    end: "-100% bottom",
    scrub: 1,
    //markers: true,
  },
  scaleX: 1.0,
  scaleY: 1.0,
  scaleZ: 1.3,
  duration: 0.1,
  ease: "power1.inOut",
  startAt: { scale: 0.9 }, // 초기 너비 설정
});
gsap.to(".project_inr_box3", {
  scrollTrigger: {
    trigger: ".project3",
    start: "-100% top",
    end: "-100% bottom",
    scrub: 1,
    //markers: true,
  },
  scaleX: 1.0,
  scaleY: 1.0,
  scaleZ: 1.3,
  duration: 0.1,
  ease: "power1.inOut",
  startAt: { scale: 0.9 }, // 초기 너비 설정
});
//project_inr_box

gsap.to(".star-deco", {
  scrollTrigger: {
    trigger: "#about",
    start: "-15% 0%",
    end: "0% 100%",
    scrub: 2,
    //markers: true,
  },
  opacity: "1",
  top: "16%",
  left: "0%",
  ease: "power1.inOut",
}); //star-deco

gsap.to(".deco", {
  rotation: "+=1080",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#about",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    //markers: true,
  },
}); //deco

gsap.to(".profile_box", {
  scrollTrigger: {
    trigger: "#about",
    start: "8% 0%",
    end: "0% 100%",
    scrub: 2,
    //markers: true,
  },
  opacity: 1,
  y: 0,
  duration: 1,
}); //프로필 사진

gsap.to(".profile_img", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 0%",
    end: "0% 100%",
    scrub: 2,
    //markers: true,
  },
  opacity: 1,
  y: 0,
  duration: 1,
}); //프로필 text

gsap.to(".contact_img_txt", {
  scrollTrigger: {
    trigger: "#contact",
    start: "0% center",
    end: "bottom bottom",
    scrub: 1,
    //markers: true,
  },
  scale: 1,
  duration: 1.3,
}); //thank you

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".index1",
    start: "top 50%",
    end: "bottom 100%",
    scrub: 2,
    //markers: true,
  },
});
tl.to(".index1 span", {
  height: "auto",
  width: "auto",
  y: 0,
  stagger: 0.1,
  duration: 0.5,
});
tl.to(".index1 span", {
  height: "auto",
  width: "auto",
  rotateZ: 1080,
  stagger: 0.1,
  duration: 1,
});
//project index

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".index2",
    start: "top 50%",
    end: "bottom 100%",
    scrub: 2,
    //markers: true,
  },
});
tl2.to(".index2 span", {
  y: 0,
  stagger: 0.2,
  duration: 0.5,
});
tl2.to(".index2 span", {
  rotateZ: 1080,
  stagger: 0.2,
  duration: 1,
});
//about index

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".index3 span",
    start: "top 50%",
    end: "100% 100%",
    scrub: 2,
    //markers: true,
  },
});

tl3.to(".index3 span", {
  y: 0,
  stagger: 0.2,
  duration: 1,
  delay: 0.5,
});
tl3.to(".index3 span", {
  rotateZ: 1080,
  stagger: 0.2,
  duration: 1,
});
//contact index
