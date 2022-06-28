import styled from "styled-components";

export const Header = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  line-height: 1.5;
`;

export const Div = styled.div`
  height: 20rem;
  width: 20rem;
  border-radius: 30%;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 30%;
    border: 1rem #000;
    margin: auto;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, red, orange);
  }

  &:after {
    content: "";
    border: 1rem solid #000;
    border-radius: 100%;
    width: 5rem;
    height: 5rem;
    left: 0;
    right: 0;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
  }
`;

export const Span = styled.span`
  content: "";
  border: 1rem solid #000;
  border-radius: 100%;
  width: 0;
  height: 0;
  right: 6rem;
  position: absolute;
  margin: auto;
  top: 6rem;
`;
