import styled from "styled-components";

export const Main = styled.table`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto, auto, auto, auto, auto, auto, auto, auto;
  
`;

export const Td = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
`;

export const Th = styled.th`
  font-size: 38px;
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #e7e7e7;
  background: linear-gradient(to bottom, #ffffff 0%, #ccffcc 100%);
  
  .image {
    width: 40px;
    height: 30px;
  }
`;

export const Tr = styled.tr`
  display: flex;
  width: 100px;
  height: 400px;
  justify-content: center;
  text-align: center;
  padding-top: 50px;
  
  .button {
    display: flex;
    flex-direction: row-reverse;
    height: 30px;
    width: 60px;
    font-size: 17px;
    padding: 4px;
    margin-left: 80px;
    background-color: black;
    color: white;

  }
  .update {
    display: flex;
    flex-direction: row-reverse;
    height: 30px;
    width: 60px;
    font-size: 17px;
    padding: 4px;
    margin-left: 20px;
    background-color: black;
    color: white;
    
    
  }
`;
