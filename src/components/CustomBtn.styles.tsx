import styled from "styled-components";
// @ts-ignore
import {deviceSize} from "./Utils/DeviceSize.tsx";

export const CustomBtnContainer = styled.a`
  display: inline-block;
  cursor: pointer;
  padding: 6px 20px;
  border-radius: 5px;
  border: none;
  margin: 20px auto;
  background: linear-gradient(135deg, #ffc75f, #f68aa4, #f579cf);
  color: inherit;
  box-shadow: rgba(56, 56, 81, 0.25) 0 2px 5px -1px, rgba(47, 46, 46, 0.3) 0px 1px 3px -1px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: 'Monda', sans-serif;

  @media screen and ${deviceSize.mobile} {
    margin: 0;
  }

  &:hover {
    transform: scale(1.1);
  }
`