import { Flex } from "rebass";
/* eslint-disable react/jsx-no-comment-textnodes */
import { motion } from "framer-motion";
import style from "../styles/About.module.css";
import styled from "styled-components";
import { useState } from "react";

const Selfie: any = styled.div`
  position: relative;
  z-index: 1;
  width: 40vh;
  height: 40vh;
  border-radius: 50%;
  background: ${(props: any) => `url(${props.url})`} no-repeat center center;
  background-size: cover;
  opacity: 0.4;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${(props: any) => `url(${props.url})`} no-repeat center center;
    background-size: cover;

    opacity: 0.5;
    mix-blend-mode: hard-light;
  }
  &:hover:before {
    animation: animate 0.3s linear infinite;
  }
  @keyframes animate {
    0% {
      background-position: 0 0;
      filter: hue-rotate(0deg);
    }
    10% {
      background-position: 5px 0;
    }
    20% {
      background-position: -5px 0;
    }
    30% {
      background-position: 15px 0;
    }
    40% {
      background-position: 5px 0;
    }
    50% {
      background-position: -25px 0;
    }
    60% {
      background-position: -50px 0;
    }
    70% {
      background-position: 0 -20px;
    }
    80% {
      background-position: -60px -20px;
    }
    81% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 0;
      filter: hue-rotate(360deg);
    }
  }
`;

const About = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className={style.about}>
      <div className={style.left}>
        <motion.div
          className={style.left_number}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "100px",
              opacity: 0,
            },
            visible: {
              y: "-370px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2,
              },
            },
          }}
        >
          <span className={style.text_fade_01}>20</span>
          <span className={style.text_fade_01}>21</span>
          <span className={style.text_fade_01}>22</span>
          <span className={style.text_fade_01}>23</span>
          <span className={style.text_fade_01}>24</span>
          <span className={style.text_fade_01}>25</span>
          <span className={style.text_fade_01}>26</span>
          <span className={style.text_fade_01}>27</span>
          <span className={style.text_fade_01}>28</span>
          <span className={style.text_fade_01}>29</span>
          <span className={style.text_fade_01}>30</span>
          <span className={style.text_fade_01}>31</span>
          <span className={style.text_fade_01}>32</span>
          <span className={style.text_fade_01}>33</span>
          <span className={style.text_fade_01}>34</span>
          <span className={style.text_fade_01}>35</span>
          <span className={style.text_fade_02}>36</span>
          <span className={style.text_fade_03}>37</span>
          <span>38</span>
          <span>39</span>
          <span>40</span>
          <span>41</span>
          <span>42</span>
          <span>43</span>
          <span>44</span>
          <span>45</span>
          <span>46</span>
          <span>47</span>
          <span>48</span>
          <span>49</span>
          <span>50</span>
          <span>51</span>
          <span>52</span>
          <span className={style.text_fade_03}>53</span>
          <span className={style.text_fade_02}>54</span>
          <span className={style.text_fade_01}>55</span>
        </motion.div>
        <div className={style.left_line}></div>
        <div className={style.left_line2}></div>
        <motion.div
          className={style.left_about}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "300px",
              opacity: 0,
            },
            visible: {
              y: "0px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 3,
              },
            },
          }}
        >
          <p style={{ maxWidth: "80%" }}>
            <span className={style.ml_2} style={{ fontWeight: "bold" }}>
              /*
            </span>

            <br />
            <span style={{ lineHeight: "30px" }}>
              Ello, I'm Liam. I'm a senior software engineer specializing in
              web, cloud and serverless technologies on the AWS platform. At
              heart, UFO geek, JAMstack fanboy, dApp, Defi and MEV strat
              enthusiast and aspiring Solidity developer. At hand, I've spent
              the last several years building enterprise CMS architecture for a
              myriad of end use cases across industries ranging from real estate
              to events management with products including web applications for
              listing and managing real estate properties and custom
              data-federated platform APIs unifying disparate data sources for
              single point consumption in addition to automated systems for the
              generation, configuration and deployment of AWS Lex and Alexa
              bots.
            </span>
            <br />

            <span className={style.ml_2} style={{ fontWeight: "bold" }}>
              */
            </span>
          </p>
        </motion.div>
      </div>
      <Flex
        alignItems={"center"}
        alignContent="center"
        flexDirection={"column"}
        width={"40%"}
        justifyContent={"center"}
        // p={5}
        mr={"10%"}
      >
        <Selfie url="/liam-3.jpeg" />
      </Flex>
    </div>
  );
};

export default About;
