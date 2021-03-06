import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.background};
  padding-bottom: 20px;

  h1 {
    color: ${({ theme }) => theme.text};
  }
  h2 {
    color: ${({ theme }) => theme.text};
  }
  h3 {
    color: ${({ theme }) => theme.text};
  }
  h4 {
    color: ${({ theme }) => theme.text};
  }
  h5 {
    color: ${({ theme }) => theme.text};
  }
  h6 {
    color: ${({ theme }) => theme.text};
  }
  p {
    color: ${({ theme }) => theme.text};
  }
  svg {
    color: ${({ theme }) => theme.text};
    fill: ${({ theme }) => theme.text};
  }
`;

// Themes
const LightTheme = {
  text: "#262626",
  background: "#fff",
  card: "#fff",
  color: "#000",
  fill: "#000",
  navbar: "#fff",
  border: "#e0e0e0",
  modal: "#fff",
  button: "#fff",
  avatar: "#fff",
  search: "#eee",
  input: "#fff",
  follow: "#000",
};

const DarkTheme = {
  text: "#fff",
  background: "#121212",
  card: "#000",
  color: "#fff",
  fill: "#fff",
  navbar: "#000",
  border: "#424242",
  modal: "#252525",
  button: "#fff",
  avatar: "#000",
  search: "#242424",
  input: "#fff",
  follow: "#fff",
};

export const Themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export const ContainerRoutes = styled.div`
  padding: 100px 0 0 0;
`;

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
  border-bottom: 1px solid ${({ theme }) => theme.border};
  position: fixed;
  padding: 10px;
  width: 100%;
  background: ${({ theme }) => theme.navbar};
  z-index: 1;
  &:before {
    position: absolute;
  }

  &:after {
    position: absolute;
  }

  svg {
    fill: ${({ theme }) => theme.fill};
    color: ${({ theme }) => theme.color};
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLogo = styled.div`
  padding-top: 15px;
  path {
    fill: ${({ theme }) => theme.fill};
    color: ${({ theme }) => theme.color};
  }
`;
export const NavSearch = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`;

export const NavAction = styled.div`
  display: flex;
  gap: 18px;
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.color};
  }
`;

export const Comments = styled.div`
  display: flex;
  gap: ${(props) => (props.border ? props.gap : "10px")};
  justify-content: center;
  align-items: center;
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

// Card
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${({ theme }) => theme.color};
  }
`;

export const CardContent = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  width: ${(props) => props.width}px;
  height: auto;
  border-radius: 6px;
  padding: 2px 0 10px 0;
  background: ${({ theme }) => theme.card};
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

export const Like = styled.div`
  svg {
    fill: #ed4956;
  }
`;

export const CardComment = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const CardHr = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.border};
`;

export const CarsLetter = styled.div`
  p {
    font-size: 10px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }
`;

export const CardInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
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
  input {
    color: ${({ theme }) => theme.input};
  }
`;

export const Logo = styled.div`
  background: cover no-repeat;
  text-align: center;
  margin: 14.45px auto 12px;
`;

export const FooterContent = styled.footer`
  order: 5;
  padding: 0 20px;
  padding-left: 16px;
  padding-right: 16px;
  -webkit-box-ordinal-group: 6;
`;

export const FooterContainer = styled.div`
  margin-bottom: 52px;
  flex: 0 0 auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: stretch;
  aling-items: stretch;
  align-content: stretch;
  display: flex;
`;

export const FooterCont = styled.div`
  margin-top: 24px;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: stretch;
  align-items: stretch;
  align-content: stretch;
  display: flex;
`;

export const FooterDiv = styled.div`
  flex-wrap: wrap;
  flex: 0 0 auto;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: stretch;
  align-items: stretch;
  align-content: stretch;
  display: flex;
`;

export const FooterContentLink = styled.div`
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 12px;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: stretch;
  align-items: stretch;
  align-content: stretch;
  display: flex;
`;

export const FooterLink = styled.a`
  color: rgba(var(--fe0, 0, 55, 107), 1);
  text-decoration: none;
`;

export const FooterLinkText = styled.div`
  display: block;
  color: rgba(var(--f52, 142, 142, 142), 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin: -2px 0 -3px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
`;

export const FooterCopy = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: stretch;
  align-items: stretch;
  align-content: stretch;
  display: flex;
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
  background: ${({ theme }) => theme.modal};
  position: relative;
  border-radius: 10px;
  button {
    color: ${({ theme }) => theme.button};
  }
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

export const Switch = styled.button`
  margin-top: 8px;
  cursor: pointer;
  border: none;
  background: none;
  transition: all 0.5s ease;
`;

export const AvatarContainer = styled.span`
  width: ${(props) => (props.width ? props.width : "1.7rem")};
  height: ${(props) => (props.height ? props.height : "1.7rem")};
  outline: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;

  overflow: hidden;
  vertical-align: top;
  cursor: pointer;
  transition: transform 250ms ease 0ms, box-shadow 0.25s ease 0s;
`;

export const AvatarCircle = styled.span`
  padding: 2px;
  background: linear-gradient(
    45deg,
    #ffa95f 5%,
    #f99c4a 15%,
    #f47838 30%,
    #e75157 45%,
    #d92d7a 70%,
    #cc2a92 80%,
    #c32e92 95%
  );
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  z-index: 200;
  transition: box-shadow 0.25s ease 0s, opacity 0.25s ease 0s;
  width: 100%;
  height: 100%;
`;

export const AvatarImage = styled.img`
  opacity: 1;
  border-style: solid;
  border-color: ${({ theme }) => theme.avatar};
  border-radius: 50%;
  border-width: 2px;
  z-index: 300;

  display: flex;
  background: black;
  transition: transform 250ms ease 0ms, opacity 200ms ease-in 0ms;
  width: 100%;
  height: 100%;
  object-fit: cover;
  img {
    background-image: url(${(props) => props.src});
  }
`;

// Search
export const SearchContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 268px;
  height: 36px;
  border-radius: 8px;
  background: ${({ theme }) => theme.search};

  svg {
    margin-top: 7px;
    color: #929090;
  }

  input {
    height: 100%;
    width: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.text};
  }

  input::placeholder {
    color: #929090;
  }
`;

//Profile
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 600px;
  @media (max-width: 480px) {
    display: relative;
    flex-direction: column;
  }
`;

export const Box = styled.div`
  padding: 10px;
  margin: 0 30px 0 30px;
  flex-direction: column;
`;

export const BoxContainer = styled.div`
  width: 400px;
  @media (max-width: 480px) {
    width: 100%;
  }
  margin: 0;
  color: ${({ theme }) => theme.text};
  h2 {
    font-size: 28px;
    font-weight: 400;
  }
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  button {
    color: ${({ theme }) => theme.follow};
    justify-content: center;

    &:active {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const BoxText = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 400;
  }
  button {
    font-size: 16px;
    font-weight: 400;
    padding: 0;
  }
`;
