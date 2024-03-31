"use strict";
//header toggle버튼
document.addEventListener("DOMContentLoaded", function () {
  const headerBtn = document.querySelector(".header_btn");
  const gnbToggle = document.getElementById("gnbToggle");
  const gnb = document.querySelector(".gnb");
  const gnbBack = document.querySelector(".gnb_backDrop");
  const gnbLinks = document.querySelectorAll(".gnb_box_tit a");

  headerBtn.addEventListener("click", function () {
    if (gnbToggle.classList.contains("close")) {
      gnbToggle.classList.remove("close");
      gnb.classList.remove("open");
    } else {
      gnbToggle.classList.add("close");
      gnb.classList.add("open");
    }
  });
  // .gnb_backDrop 클래스 클릭 시 메뉴 닫기
  gnbBack.addEventListener("click", function () {
    gnb.classList.remove("open");
    gnbToggle.classList.remove("close");
  });

  //gnb a태그 클릭시 이동
  gnbLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // 링크의 기본 동작을 중단
      event.preventDefault();

      // 링크의 href 속성 값으로 이동
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });

      gnb.classList.remove("open");
      gnbToggle.classList.remove("close");
    });
  });

  const topBox = document.querySelector(".personality_box_top");
  const bottomBox = document.querySelector(".personality_box_bottom");

  const topTexts = topBox.innerHTML.trim(); // personality top 공백 제거
  const bottomTexts = bottomBox.innerHTML.trim(); // personality bottom 공백 제거

  topBox.innerHTML += topTexts;
  bottomBox.innerHTML += bottomTexts;

  // .project_box 요소 선택
  const projectBoxes = document.querySelectorAll(".project_box");

  // 터치
  projectBoxes.forEach(function (box) {
    box.addEventListener("touchstart", function () {
      this.classList.add("active");
    });
  });
  projectBoxes.forEach(function (box) {
    box.addEventListener("touchend", function () {
      this.classList.remove("active");
    });
  });
  // 마우스 이벤트
  projectBoxes.forEach(function (box) {
    box.addEventListener("mouseenter", function () {
      this.classList.add("active");
    });
  });
  projectBoxes.forEach(function (box) {
    box.addEventListener("mouseleave", function () {
      this.classList.remove("active");
    });
  });
});
//year, time 가져오기
document.addEventListener("DOMContentLoaded", function () {
  function getClock() {
    let today = new Date();
    let hours = String(today.getHours()).padStart(2, "0");
    let minutes = String(today.getMinutes()).padStart(2, "0");
    let seconds = String(today.getSeconds()).padStart(2, "0");
    const timeString = hours + ":" + minutes + ":" + seconds;
    document.querySelector(".time").innerText = timeString;
  }

  let year = new Date().getFullYear(); //year
  document.querySelector(".contact_bottom .year").innerText = "©" + year;
  document.querySelector(".order-menu .year").innerText = "©" + year;

  getClock(); // 맨 처음에 한 번 실행
  setInterval(getClock, 1000); // 1초 주기로 새로 실행
});

//마우스 커서
const mouse = document.querySelector(".mouse-cursor");
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".text");

//커서 좌표값 할당
window.addEventListener("mousemove", (e) => {
  //GSAP
  gsap.to(cursor, { duration: 0.5, left: e.pageX - 5, top: e.pageY - 5 });
  gsap.to(cursor2, { duration: 0.8, left: e.pageX + 25, top: e.pageY - 10 });

  document.querySelectorAll(".img_box").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor2.classList.add("active");
    });
    el.addEventListener("mouseleave", () => {
      cursor2.classList.remove("active");
    });
  });

  document.querySelectorAll(".contact_list").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
    });
  });

  document.querySelectorAll(".profile_box").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active2");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active2");
    });
  });
});
