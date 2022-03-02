import styled from "styled-components";
import Wait from "../images/wait.jpeg";
export const Main = styled.div`
  font-size: 80px;
  background-image: url(${Wait});
  height: 680px;
  /* background: linear-gradient(#e66465, #9198e5); */
  background-repeat: no-repeat;
`;
export const Div = styled.div`
  margin-left: 70px;
  padding-top: 50px;
  color: white;
`;
export const Input = styled.input`
  display: flex;
  margin: 40px;
  font-size: 30px;
  margin-left: 180px;
  color: white;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
`;
export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 18px;
  color: white;
  background-color: black;
  margin-left: 300px;
  border-radius: 30px;
  border: 2px solid black;
`;
export const Img = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 70px;
  border: 1px solid blue;
  display: flex;
  margin-left: 555px;
`;
export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
`;
// export const Icon = styled.`
//   width: 50px;
// `;
