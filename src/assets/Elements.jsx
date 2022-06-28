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
