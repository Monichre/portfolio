import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Montserrat:wght@300;400;500&family=Open+Sans:wght@300;400&display=swap");

html,
body {
  padding: 0;
  margin: 0;
  /* font-family: "Montserrat", sans-serif !important; */
  font-weight: 400;
  font-family: "Fira Code", monospace !important;

  /* background-color: rgb(13, 17, 23); */
  /* overflow: scroll; */
}

p {
  font-family: "Fira Code", monospace !important;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  /* scroll-behavior: smooth; */
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  /* text-decoration-skip-ink: auto; */
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

ul li:before {
  content: unset !important;
}

canvas {
  width: 30vw;
  height: 800px;
}


.inherited-styles-for-exported-element {
  box-sizing: inherit;
}

::selection {
  /* background-color: #233554; */
  color: #ccd6f6;
}


svg {
  height: 100%;
  max-width: 100%;
  vertical-align: middle;
  width: 100%;
}

a {
  color: inherit;
  display: inline-block;
  position: relative;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

button {
  border-radius: 0;
  border-style: initial;
  border-width: 0;
  cursor: pointer;
}

:focus {
  outline: 0 #64ffda;
  outline-offset: 3px;
}

:focus-visible {
  outline: 0 #64ffda;
  outline-offset: 3px;
}

.buZqzj {
  -webkit-box-align: center;
  align-items: center;
  display: flex;
}

@media (max-width: 768px) {
  .buZqzj {
    display: none;
  }
}

.dAwNpJ {
  display: none;
}

@media (max-width: 768px) {
  .dAwNpJ {
    display: block;
  }
}

.eCxtrN {
  display: none;
}

@media (max-width: 768px) {
  .eCxtrN {
    -webkit-box-align: center;
    -webkit-box-pack: center;
    align-items: center;
    background-color: transparent;
    border-style: initial;
    border-width: 0;
    color: inherit;
    display: flex;
    justify-content: center;
    margin-right: -15px;
    padding: 15px;
    position: relative;
    text-transform: none;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    transition-timing-function: linear;
    z-index: 10;
  }
}

.dKogfI {
  display: none;
}

@media (max-width: 768px) {
  .dKogfI {
    -webkit-box-align: center;
    -webkit-box-pack: center;
    align-items: center;
    background-color: #112240;
    bottom: 0;
    box-shadow: -10px 0 30px -15px rgba(2, 12, 27, 0.7);
    display: flex;
    height: 100vh;
    justify-content: center;
    outline: 0;
    padding: 50px 10px;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(100vw);
    transition: all 0s;
    visibility: hidden;
    width: min(75vw, 400px);
    z-index: 9;
  }
}

#logo,
a:hover {
  color: #64ffda;
}

.buZqzj ol,
.dKogfI ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

.buZqzj ol,
.dKogfI nav {
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.dKogfI nav {
  color: #ccd6f6;
  flex-direction: column;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  text-align: center;
  width: 100%;
}

.dKogfI ol {
  width: 100%;
}

.buZqzj ol li,
.dKogfI ol li {
  counter-increment: item 1;
  font-size: 13px;
  margin: 0 5px;
  position: relative;
}

.dKogfI ol li {
  font-size: 18px;
  margin: 0 auto 20px;
}

@media (max-width: 600px) {
  .dKogfI ol li {
    margin: 0 auto 10px;
  }
}

.dKogfI ol a {
  color: inherit;
  display: inline-block;
  padding: 3px 20px 20px;
  position: relative;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

.buZqzj ol li a {
  padding: 10px;
}

.dKogfI ol li::before {
  color: #64ffda;
  content: "0" counter(item) ".";
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.buZqzj ol li a::before {
  color: #64ffda;
  content: "0" counter(item) ".";
  font-size: 12px;
  margin-right: 5px;
  text-align: right;
}

:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}

.logo {
  -webkit-box-align: center;
  -webkit-box-pack: center;
  align-items: center;
  display: flex;
  justify-content: center;
}

.buZqzj .resume-button {
  background-color: transparent;
  border: 1px solid #64ffda;
  border-image: none 100% 1 0 stretch;
  border-radius: 4px;
  color: #64ffda;
  cursor: pointer;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 13px;
  line-height: 1;
  margin-left: 15px;
  padding: 0.75rem 1rem;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.eCxtrN .ham-box {
  display: inline-block;
  height: 24px;
  position: relative;
  width: 30px;
}

.eCxtrN .ham-box-inner,
.eCxtrN .ham-box-inner::after {
  background-color: #64ffda;
  border-radius: 4px;
  height: 2px;
  position: absolute;
  right: 0;
}

.eCxtrN .ham-box-inner {
  top: 50%;
  transform: rotate(0deg);
  transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  width: 30px;
}

.dKogfI .resume-link,
.logo a svg {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.dKogfI .resume-link {
  background-color: transparent;
  border: 1px solid #64ffda;
  border-image: none 100% 1 0 stretch;
  border-radius: 4px;
  color: #64ffda;
  cursor: pointer;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 14px;
  line-height: 1;
  margin: 10% auto 0;
  padding: 18px 50px;
  text-decoration: none;
  width: max-content;
}

.logo a {
  color: #64ffda;
  height: 42px;
  width: 42px;
}

.eCxtrN .ham-box-inner::after {
  content: "";
  display: block;
  left: auto;
}

.eCxtrN .ham-box-inner::before {
  opacity: 1;
  top: -10px;
  transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  width: 120%;
}

.eCxtrN .ham-box-inner::after {
  bottom: -10px;
  transform: rotate(0deg);
  transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  width: 80%;
}

.logo a svg {
  fill: none;
  user-select: none;
}

.dKogfI ol li a {
  color: #64ffda!important;
  outline: 0;
}

.buZqzj .resume-button:active,
.dKogfI .resume-link:active {
  background-color: rgba(100, 255, 218, 0.1);
  outline: 0;
}

.buZqzj .resume-button::after,
.dKogfI .resume-link::after {
  display: none !important;
}

.css_pro-edited-element-0 {

  align-items: space-around !important;
  color: #ccd6f6 !important;
  counter-reset: item0 !important;
  display: flex !important;

  font-size: 20px !important;
  justify-content: space-between !important;
  line-height: 1.3 !important;
  position: relative !important;
  /* width: 100% !important; */
  /* z-index: 12 !important; */
  padding: 16px 40px;
}

/* @media (max-width: 480px) {
  .css_pro-edited-element-0 {
    font-size: 18px !important;
  }
} */

/* .css_pro-edited-element-0:focus {
  outline: 2px solid red !important;
  outline-offset: 3px !important;
}

.css_pro-edited-element-0:focus-visible {
  outline: 2px solid red !important;
  outline-offset: 3px !important;
}

.css_pro-edited-element-0:focus:not(:focus-visible) {
  outline: 0 !important;
  outline-offset: 0 !important;
}


.css_pro-sidebar_menu:focus {
  outline: 2px solid red !important;
  outline-offset: 3px !important;
}

.css_pro-sidebar_menu:focus-visible {
  outline: 2px solid red !important;
  outline-offset: 3px !important;
}

.css_pro-sidebar_menu:focus:not(:focus-visible) {
  outline: 0 !important;
  outline-offset: 0 !important;
} */


`;
