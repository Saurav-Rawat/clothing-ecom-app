import styled from "styled-components";
import {
  GoogleSignInButton,
  InvertedButton,
  BaseButton,
} from "../button/Button.styles";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  // all three button which are inside CartDropDownContainer
  ${GoogleSignInButton},
  ${InvertedButton},
  ${BaseButton}, {
    margin-top: auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;
