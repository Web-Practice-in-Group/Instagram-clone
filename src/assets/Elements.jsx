import styled from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => props.weight || "bold"};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  border-bottom: 1px solid ${(props) => props.border};

  h6 {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
  p {
    padding: 0;
    margin: 0;
    color: #8e8e8e;
    font-size: 14px;
  }
  br {
    display: none;
    padding: 0;
    margin: 0;
  }
`;

const media = {
  xs: (styles) => `@media (max-width: 480px) { ${styles} }`,
  md: (styles) => `@media (max-width: 920px) { ${styles} }`,
};

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`;

// Navbar
export const NavContainer = styled.div`
  border-bottom: 1px solid #424242;
  position: fixed;
  padding: 10px;
  width: 100%;
  background: ${(props) => (props.primary ? props.primary : "#fff")};
  z-index: 1;
  &:before {
    position: absolute;
  }

  &:after {
    position: absolute;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLogo = styled.div`
  padding-top: 15px;
`;
export const NavSearch = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`;

export const NavAction = styled.div`
  display: flex;
  gap: 18px;
`;

// Button
export const Buttons = styled.button`
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
  border: 1px solid ${(props) => (props.border ? props.border : "#fff")};
  border-radius: 4px;
  padding: 5px 9px;
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : "#fff")};
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0")};

  &:active {
    background-color: ${(props) => (props.background ? props.active : "#fff")};
  }
`;
//Input
export const InputContainer = styled.div`
  margin: auto 40px 6px;
`;

export const Inputs = styled.input`
  height: 36px;
  border: 1px solid #424242;
  border-radius: 3px;
  background-color: #121212;
  width: 100%;
  font-size: 12px;
  margin-bottom: 5px;
  padding: 9px 0 7px 8px;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
`;

export const Container = styled.div`
  padding: 100px 0 0 0;
`;

// Card
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  border: 1px solid #424242;
  width: ${(props) => props.width}px;
  height: auto;
  border-radius: 6px;
  padding: 2px 0 10px 0;
  background: #000;
`;

export const CardImage = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 2px;
`;

export const Img = styled.img`
  width: 100%;
  background: url(${(props) => props.src});
`;

//Login
export const LoginImage = styled.div`
  background-image: url(${(props) => props.src});
  background-position: -46px 0;
  background-size: 468.32px 634.15px;
  -webkit-flex-basis: 380.32px;
  -ms-flex-preferred-size: 380.32px;
  flex-basis: 380.32px;
  height: 581.15px;
  margin-bottom: 12px;
  margin-right: 32px;
  background-repeat: no-repeat;
`;

export const AuthContainer = styled.div`
  flex-direction: row;
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -webkit-box-direction: normal;
  -moz-box-direction: normal;
`;

export const AuthCard = styled.div`
  background: #000;
  border: 1px solid #424242;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
`;

export const Logo = styled.div`
  background: cover no-repeat;
  text-align: center;
  margin: 14.45px auto 12px;
`;

// Modal
export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.showOverlay ? "rgba(0,0,0,.5)" : "rgba(0,0,0,0)"};
  padding: 40px;
  display: flex;
  align-items: ${(props) =>
    props.positionModal ? props.positionModal : "center"};
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 440px;
  height: auto;
  background: #262626;
  position: relative;
  border-radius: 10px;
`;

export const ModalText = styled.div`
  padding-left: 22px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const ModalClose = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

// Button close modal
export const Close = styled.div`
  cursor: pointer;
`;

// Content of modal
export const ContentModal = styled.div`
  padding: 10px;
`;
