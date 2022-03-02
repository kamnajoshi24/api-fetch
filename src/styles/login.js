import styled from "styled-components";
export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  background-color: black;
  border-radius: 5px;
  width: 100%;
  height: 100vh;
  color: white;
  /* border: 1px solid blue; */ ;
`;

export const Div = styled(Main)`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 60%;
  border-radius: 25px;
  align-items: center;
  align-content: center;
  justify-content: center;
  /* background-color: white; */
  color: black;
  background: linear-gradient(
    46deg,
    rgba(13, 36, 75, 1) 0%,
    rgba(224, 215, 215, 0.5074404761904762) 100%
  );
`;

export const Head = styled.h1`
  font-size: 60px;

  margin-bottom: 80px;
  text-shadow: 2px 2px 5px white;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  font-size: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  border-radius: 1px solid white;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  color: black;
  font-size: 20px;
  margin-top: 50px;
  background-color: navy;
  margin-left: 50px;
  color: white;
  border: 1px solid navy;
`;
