import styled, { keyframes } from 'styled-components'

const Appear = keyframes`
0%{
  opacity: 0;
}
50%{
  opacity: 0.5;
}
100%{
  opacity: 1;
}
`
export const CurrentTemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1;
  padding: 0 20%;
  animation: ${Appear} 2s ease;
  @media screen and (min-width: 1023px) and (max-width: 1280px) {
    padding: 0 5%;
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    padding: 0 0;
    grid-column: 2;
    height: 160px;
  }
  @media screen and (max-width: 767px) {
    padding: 30px 0;
    margin: auto;
    gap: 15px;
  }
`
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  height: 100%;
  text-align: center;
  h4 {
    width: 130px;
    font-size: 1.2rem;
  }
  img {
    width: 80px;
  }
  @media screen and (min-width: 1023px) and (max-width: 1280px) {
    padding-left: 10px;
    h4 {
      width: 100px;
      font-size: 1.1rem;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    justify-content: center;
    img {
      width: 70px;
    }
  }
  @media screen and (max-width: 767px) {
    margin-right: 0;
    justify-content: flex-end;
    h4 {
      width: 100%;
      font-size: 0.8rem;
      line-height: 1;
    }
    img {
      width: 70px;
      padding-bottom: 6px;
    }
  }
`

export const Temperature = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px;
  height: 100%;
  h1 {
    font-size: 4rem;
    line-height: 1.3;
    text-transform: capitalize;
  }
  @media screen and (min-width: 1023px) and (max-width: 1280px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin-left: 0;
    justify-content: center;
    h1 {
      font-size: 3.4rem;
      padding-bottom: 6px;
    }
  }
  @media screen and (max-width: 767px) {
    justify-content: flex-end;
    margin-left: 0;
    h1 {
      line-height: 1;
      font-size: 3rem;
      padding-bottom: 6px;
    }
  }
`

export const MaxMinTemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  span {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1023px) and (max-width: 1280px) {
    span {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
    line-height: 1;
  }
`
