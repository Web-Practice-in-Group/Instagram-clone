import styled from "styled-components";

export const Grid = styled.div``;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

const media = {
  xs: (styles) => `@media (max-width: 480px) { ${styles} }`,
};

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`;

// Navbar
export const NavContainer = styled.div`
  border-bottom: 1px solid rgb(220, 220, 220);
  position: fixed;
  padding: 10px;
  width: 100%;
  background: ${(props) => (props.primary ? props.primary : "#fff")};
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
export const NavButton = styled.button`
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px 9px;
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : "#fff")};
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;

export const Container = styled.div`
  padding: 100px 50px 0 50px;
`;
