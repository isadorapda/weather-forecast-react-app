import styled from 'styled-components'

export const DailyForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7vw, 1fr));
  grid-column: 1/-1;
  gap: 1.5vw;
  width: 90%;

  @media screen and (max-width: 1023px) {
    grid-column: 1/-1;
    gap: 1vw;
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2vh;
    padding: 0 0;
  }
`
export const WeekDayItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 1vh 1vw;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(200%) blur(6px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 1.5vw;
  img {
    padding: 1vh 0;
    height: 50px;
    width: 50px;
  }

  @media screen and (max-width: 1023px) {
    img {
      padding: 0 0 1vh 0;
      height: 40px;
      width: 40px;
    }
  }
  @media screen and (max-width: 767px) {
    font-size: 2.5vw;
    flex-direction: row;
    justify-content: space-between;
    padding: 1vh 6vw;
    border-radius: 16px;
    img {
      height: 30px;
      width: 30px;
      padding: 0;
    }
  }
`
export const MaxMinContainer = styled.div`
  display: flex;
  gap: 1.5vw;
  p {
    font-size: 1vw;
  }
  @media screen and (max-width: 767px) {
    p {
      font-size: 2vw;
    }
  }
`
