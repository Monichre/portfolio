import styled from "styled-components";
export const ParticleBackground = styled.div`
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background: transparent;
  pointer-events: none;

  .particles {
    .particles-canvas {
    }
  }
`;
