import styled, { css } from "styled-components";

import { Tag } from "@geist-ui/react";

export const CardCss = css`
  height: 300px !important;
  width: 500px !important;
  position: relative;
  overflow: hidden;
`;

export const MainListItemImage = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1px;
  margin-right: 1rem;
  box-shadow: 0 2px 10px hsla(270, 30%, 2%, 0.6);

  img {
    border-radius: inherit;
  }
`;

export const AppItem = styled.div`
  flex-shrink: 0;
  /* margin-right: 1.4rem; */
  /* background: hsl(270, 50%, 15%); */
  /* transform: translateX(-8rem); */
  padding: 1.6rem;
  /* width: 24%; */
  border-radius: 8px;
  box-shadow: 0 4px 10px 0 hsla(270, 30%, 7%, 0.3);
  filter: contrast(1);

  position: relative;
  background-size: cover !important;

  cursor: pointer;

  .content {
    position: relative;
    z-index: 2;
  }

  .main__discover-place:hover {
    background: hsl(270, 50%, 17%);
  }

  .main__discover-place-heading {
    /* font-size: 1.4rem; */
    font-weight: normal;
    margin-bottom: 6px;
  }

  .main__discover-place-sub {
    /* font-size: 1rem; */
  }

  .main__discover__more {
    margin-top: 3.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main__discover__more-svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }

  .main__discover__more svg {
    height: 2.6rem;
    transform: translate(2.4px, 1.6px);
  }

  .main__discover-right {
    opacity: 0.6;
    margin-left: -45px;
    cursor: pointer;
  }

  .main__discover-right:hover {
    opacity: 1;
  }

  .main__discover-right > svg {
    height: 1.6rem;
  }
`;

export const Overlay = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  position: fixed;
  overflow: auto;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.4); /*can be anything, of course*/
`;

export const MainListItem = styled.li`
  /* padding: 0 0 5.7rem 2rem; */
  border-left: 2px solid hsla(0, 0%, 50%, 0.2);
  position: relative;
  display: flex;
  color: #9d9dac;
  div {
    /* font-size: 1.4rem; */
    cursor: pointer;
    &:hover {
      color: hsl(240, 8%, 90%);
      .main__list-sub {
        margin-top: 0.4rem;
        /* font-size: 1.1rem; */
        opacity: 0.6;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainList = styled.ul`
  list-style: none;
  position: relative;

  &:before {
    content: "Wadi";
    position: absolute;
    bottom: 17%;
    left: -18%;
    opacity: 0.03;
    /* font-size: 18rem; */
    font-weight: bold;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background: hsl(210, 70%, 70%);
    transform: translateX(-3px);
  }

  &:first-of-type::before {
    top: 0;
  }

  &:first-of-type .main__list-content {
    /* line-height: 0.3; */
  }

  &:last-of-type {
    padding-bottom: 2.6rem;
  }
`;

export const RowCss = css`
  border-radius: 8px;
  padding: 3rem;
  border: 1px solid rgb(80 227 193 / 40%);
  background-color: hsl(0deg 0% 0%);
  background-image: linear-gradient(
    120deg,
    hsl(0deg 0% 0%),
    60%,
    rgba(0, 0, 0, 0.9) 10%
  );
  box-shadow: 0 6px 16px 0 hsl(270deg 30% 3% / 40%);
`;
export const TopRow = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const AppRow = styled.div`
  ${RowCss}
  width: 70%;

  margin-left: auto;

  -webkit-transform: translateX(4rem);
  -ms-transform: translateX(4rem);
  transform: translateX(4rem);

  .main__cards-container-heading-wrap {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }

  .main__cards-container-heading {
    flex-grow: 2;
  }

  .main__cards {
    list-style: none;
    padding: 2.6rem 0 2rem;
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .main__card {
    color: hsla(0, 0%, 100%, 0.8);
    transform: translateX(-15rem);
    flex-shrink: 0;
    margin-left: 1.5rem;
    ${CardCss}
    border-radius: 8px;
    text-align: right;
    padding: 2.2rem;
    background: #2126254c;
    /* box-shadow: 0 2px 12px hsla(var(--hue), 50%, 60%, 0.2),
      0 4px 32px hsla(var(--hue), 50%, 60%, 0.2); */
    position: relative;
    overflow: hidden;
    border: 1px solid rgb(80 227 193 / 10%);
    cursor: pointer;
  }

  .main__card-image-container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  .main__card-image-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      rgba(80, 227, 193, 0.9),
      40%,
      rgba(0, 0, 0, 0.9)
    );
  }

  .main__card-heading {
    /* font-size: 2rem; */
    font-weight: normal;
  }

  .main__card-heading-sub {
    margin-top: 0.4rem;
    /* font-size: 1.2rem; */
  }

  .main__card-heading-type {
    margin-top: 2.8rem;
  }
`;

export const DashboardWrap: any = styled.div`
  height: calc(100vh - 138px);
  /* display: grid; */
  /* place-content: center; */

  /* min-height: 80vh; */
  /* padding: 3rem; */
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  /* height: calc(100vh - 138px); */
  padding: 80px;
  // background: linear-gradient(
  //     to right top,
  //     hsla(270, 50%, 8%, 0.5),
  //     hsla(270, 50%, 8%, 0.6) 20%,
  //     hsla(270, 50%, 8%, 0.1)
  //   ),
  //   linear-gradient(to right bottom, hsl(270, 50%, 8%), transparent 66%),
  //   linear-gradient(to bottom, transparent, hsl(270, 50%, 8%) 56%),

  /* background-size: auto 500px; */
  // padding: 4rem 0 0 8rem;
  flex-direction: column;
  display: -webkit-box;
  display: -webkit-flex;
  justify-content: center;
  border-bottom-right-radius: 8px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  /* rgb(121, 192, 255) */

  .main {
  }

  .main__heading {
    font-size: 3rem;
    font-weight: 300;
    display: flex;
    align-items: center;
  }

  /* .main__heading > span {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: 1.6rem;
    margin-bottom: -2px;
  } */

  .main__heading svg {
    height: 0.7em;
  }

  .main__desc {
    margin: 1.5rem 0 1rem;
    /* font-size: 1.4rem; */
    opacity: 0.6;
  }

  .main__sub {
    /* font-size: 1.2rem; */
  }

  .main__crossing-container {
    width: 88%;
    background-color: hsl(0deg 0% 0%);
    background-image: linear-gradient(
      120deg,
      rgba(80, 227, 193, 0.8),
      10%,
      hsl(0deg 0% 0%) 60%
    );
    box-shadow: 0 6px 16px 0 hsla(270, 30%, 3%, 0.4);

    border-radius: 8px;
    padding: 2rem 3.6rem;
    display: flex;
    align-items: center;
    transform: translate(-2rem, 2.4rem);
    position: relative;
    z-index: 2;
  }

  .main__crossing-image {
    border: 3px solid hsl(215, 60%, 40%);
    border-right-color: transparent;
    box-shadow: 0 0 12px hsla(270, 30%, 10%, 0.4);
    transform: rotate(-45deg);
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 5.4rem;
    overflow: hidden;
  }

  .main__crossing-image > img {
    width: 5.4rem;
    transform: translate(-3px, -3px) rotate(45deg);
    border-radius: 5.4rem;
    border: 6px solid transparent;
  }

  .main__crossing-current {
    flex-grow: 2;
    margin-left: 3rem;
  }

  .main__crossing-upper {
    text-transform: uppercase;
    margin-bottom: 0.6rem;
    letter-spacing: 2px;
  }

  .main__crossing-heading {
    font-weight: normal;
    /* font-size: 1.6rem; */
  }

  .main__discover {
    width: 88%;

    /* background-color: hsl(0deg 0% 0%); */
    /* background-color: hsl(0deg 0% 0%);
    background-image: linear-gradient(
      120deg,
      hsl(0deg 0% 0%),
      60%,
      rgba(80, 227, 193, 0.5) 10%
    );
    box-shadow: 0 6px 16px 0 hsla(270, 30%, 3%, 0.4);
    /* background-image: linear-gradient(
      120deg,
      hsl(0deg 0% 0%) 50%,
      10%,
      rgba(80, 227, 193, 0.4)
    ); */
    /* box-shadow: 0 6px 16px 0 hsla(270, 30%, 3%, 0.4); */
    box-shadow: 0 8px 12px 0 hsla(270, 30%, 5%, 0.2);
    border-radius: 8px !important;
    padding: 8rem 3.6rem 2rem;
    margin-left: auto;

    border: 1px solid rgb(80 227 193 / 50%);
    background-color: hsl(0deg 0% 0%);
    background-image: linear-gradient(
      120deg,
      hsl(0deg 0% 0%),
      60%,
      rgba(0, 0, 0, 0.9) 10%
    );
    box-shadow: 0 6px 16px 0 hsl(270deg 30% 3% / 40%);
    transform: translate(1.4rem, -2.1rem);
  }

  .main__discover-heading-container {
    display: flex;
    align-items: center;
  }

  .main__discover-heading {
    flex-grow: 2;
  }

  .main__discover-places {
    padding: 4rem 0 1rem;
    list-style: none;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .main__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0 2.3rem 10rem;
  }

  .main__footer-more svg {
    height: 1em;
    vertical-align: middle;
  }

  .main__info {
    display: flex;
    align-items: center;
  }

  .main__info-link {
    color: inherit;
    /* font-size: 1.4rem; */
  }

  .main__info-link:hover {
    color: #fff;
  }

  .main__info-link:hover svg {
    opacity: 0.7;
  }

  .main__info-link svg {
    height: 1.4em;
    transform: translateY(1px);
    opacity: 0.4;
  }

  .main__info-link + .main__info-link {
    margin-left: 0.6rem;
  }

  .main__cp {
    margin: 0 1rem 0 2.6rem;
  }

  .main__cr {
    opacity: 0.4;
    margin-right: 5rem;
  }

  .main__cr:hover {
    opacity: 0.7;
  }

  .main__cards-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main__cards-buttons {
    position: relative;
    z-index: 20;
  }
  .main__cards-buttons button {
    color: #fff;

    border: 0;
    cursor: pointer;
  }

  .main__cards-buttons button {
    opacity: 1 !important;
  }

  .main__cards-buttons svg {
    height: 1.6rem;
    stroke: #fff;
  }
`;

export const CloudTag = styled(Tag)`
  display: inline-table !important;
  margin: 4px !important;
  line-height: unset !important;
  border: 1px solid rgb(80 227 193 / 40%) !important;
  color: #fff !important;
  background-color: hsl(0deg 0% 0%) !important;

  box-shadow: 0 6px 16px 0 hsl(270deg 30% 3% / 40%);
  &:nth-of-type(3n + 1) {
    font-size: 1.25em;
  }
  &:nth-of-type(4n + 3) {
    font-size: 1.5em;
  }
  &:nth-of-type(5n - 3) {
    font-size: 1em;
  }
`;
export const TagCloud = styled.div`
  /* position: absolute; */
  padding: 6rem;
  /* top: 100px; */
  /* left: 100px; */
  /* display: inline; */
  list-style-type: none;
  width: auto;
`;
