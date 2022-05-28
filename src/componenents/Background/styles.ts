import rightBlurImg from '../../assets/blur-2.png'
import leftBlurImg from '../../assets/blur-1.png'

import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`
export const Right = styled.div`
  width: 620px;
  height: 700px;
  background-image: url(${rightBlurImg});
  background-repeat: no-repeat;
  background-size: cover; 
  position: absolute;
  top: -100px;
  right: 0;
`
export const Left = styled.div`
  width: 793px;
  height: 572px;
  color: white;
  background-image: url(${leftBlurImg});
  background-repeat: no-repeat;
  background-size: cover; 
  position: absolute;
  bottom: 0;
  left: -200px;
`
