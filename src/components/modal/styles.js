import styled from "styled-components/native";

export const BackModal = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.7);
  position: absolute;
  z-index:1;

`;
export const ModalFront = styled.View`
  width: 90%;
  height: 80%;
  background-color:rgba(255,255,255,0);
  border-radius:20px;
  position:absolute;
  align-self:center;
  align-items:center;
  top:30px;
  z-index:2;

`;