import styled from "styled-components";

export const Grid = styled.div``;
export const Row = styled.div`
  display: flex;
`;

const media = {
  xs: (styles) => `@media (max-width: 480px) { ${styles} }`,
};

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`;

// Navbar
export const ContainerNav = styled.nav`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  flex-direction: column;
  
  display: flex;
  top: 0;
  width: 100%;
`;

export const LogoNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
