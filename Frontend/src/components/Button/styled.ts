import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  margin: 30px 0px;
  background-color: blue;
  border: none;
  border-radius: 8px;
  color: #FFF;

  &:hover{
    opacity: 0.8;
    transition: 0.2s linear;
  }
`