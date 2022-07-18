import styled from "styled-components";

export const WrapperLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Context = styled.div`
  label {
    display: block;
    font-size: 20px;
    color: #000;
    margin: 10px 0px 10px 0px;

    text-transform: uppercase;
  }

  background: #FFF;
  height: 560px;
  width: 600px;
  padding: 30px;
  
  margin: auto 0;
  border-radius: 8px;
`

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #000;
    margin-bottom: 20px;
    font: 500;

    border-radius: 8px;
    border: 1px solid #000;
    padding: 10px 0px;
  }

  span{
    display: block;
    text-align: center;
    margin-bottom: 10px;
    color: red;
    font-weight: bold;
    font-size: 20;
  }

  a{
    text-decoration: none;
    text-transform: capitalize;
    text-align: center;
    font-size: 20px;
    color: blue;
  }

  a:hover{
    text-decoration: underline;
  }

`



