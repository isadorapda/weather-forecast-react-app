import styled from 'styled-components'

export const DailyForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 20px;
  grid-column: 1/-1;
  gap: 10px;
  height: 60%;
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
    grid-auto-rows: 110px;
    margin-top: 30px;
    grid-column: 1/-1;
    height: max-content;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const WeekDayItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(200%) blur(6px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 1.2rem;
  img {
    padding: 6px 0;
    height: 50px;
    width: 50px;
  }
  @media screen and (min-width: 1023px) and (max-width: 1280px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    font-size: 0.8rem;
    img {
      padding: 0 0 6px 0;
      height: 40px;
      width: 40px;
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 20px;
    font-size: 0.8rem;
    position: relative;
    border-radius: 16px;
    img {
      position: absolute;
      top: 0;
      left: 120px;
    }
  }
`
export const MaxMinContainer = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 767px) {
    position: absolute;
    right: 20px;
    p {
      font-size: 0.8rem;
    }
  }
`
