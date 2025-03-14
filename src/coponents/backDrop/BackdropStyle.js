import styled from "styled-components";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;

export default StyledBackdrop;

// .backdrop {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.75);
//   z-index: 10;
// }
