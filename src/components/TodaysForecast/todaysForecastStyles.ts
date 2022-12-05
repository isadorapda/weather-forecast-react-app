import styled, { keyframes } from 'styled-components'

export const TodaysForecastContainer = styled.div`
  grid-column: 2;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 120px;
  width: 80%;
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    grid-column: 1/-1;
    grid-row: 2;
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    margin-left: 0;
    width: 100%;
    height: max-content;
  }
`
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
export const TodaysForecastDailyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 20%;
  gap: 0 20px;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60%;
    opacity: 1;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: saturate(180%) blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    animation: ${Appear} 0.5s ease;
    small {
      font-size: 1.1rem;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    height: 10%;
    article {
      height: 100%;
      small {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 767px) {
    min-height: 70px;

    gap: 0 8px;
    article {
      border-radius: 10px;
      font-size: 1rem;
      small {
        font-size: 0.8rem;
        padding-top: 3px;
      }
    }
  }
`
export const HourlyTemperatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  justify-items: center;
  align-content: center;
  align-items: center;
  column-gap: 40px;
  width: 100%;
  height: 30%;
  overflow-x: scroll;
  margin-bottom: 20px;
  article {
    grid-row: 1;
    text-align: center;
    font-size: 1.2rem;
  }
  img {
    grid-row: 2;
    width: 45px;
    height: 45px;
    margin: 5px 0;
  }
  span {
    grid-row: 3;
    text-align: center;
    font-size: 1.1rem;
  }
  @media screen and (min-width: 1023px) and (max-width: 1280px) {
    column-gap: 30px;
    article {
      font-size: 1rem;
    }
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    height: 160px;
    padding: 10px 0;
    column-gap: 30px;
    article {
      font-size: 1rem;
    }
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 767px) {
    column-gap: 9px;
    padding: 0 0 15px 0;
    article {
      font-size: 0.7rem;
    }
    img {
      width: 30px;
      height: 30px;
    }
    span {
      font-size: 0.7rem;
      width: 40px;
    }
  }
`
export const HourlyForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10%, 1fr));
  grid-auto-rows: minmax(30%, 1fr);
  text-align: center;
  width: 100%;
  gap: 10px 20px;

  article {
    text-align: left;
    padding: 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: saturate(180%) blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    h4 {
      color: gray;
      display: flex;
      align-items: center;
      font-size: 1rem;
      gap: 9px;
    }
    p {
      margin-top: 5%;
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(10%, 1fr));
    grid-auto-rows: minmax(10%, 1fr);
    h4 {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 90px);
    gap: 10px;
    margin-top: 5px;
    article {
      h4 {
        font-size: 0.7rem;
      }
      p {
        margin-top: 0;
        font-size: 0.7rem;
      }
    }
  }
`
