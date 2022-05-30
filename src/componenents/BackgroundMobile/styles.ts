import mobileBlurImg from '../../assets/blur-mobile.png'

import styled from "styled-components";

export const MobileBackground = styled.div`
  background-image: url(${mobileBlurImg});
  width: 100%;
  height: 572px;
  color: white;
  background-repeat: no-repeat;
  background-size: cover; 
  position: absolute;
  bottom: 0;
`