import styled, { keyframes } from 'styled-components'

export const TodaysForecastContainer = styled.div`
  grid-column: 2;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media screen and (max-width: 1023px) {
    grid-column: 1/-1;
    grid-row: 2;
    width: 90%;
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
  column-gap: 2vw;
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: saturate(180%) blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    animation: ${Appear} 0.5s ease;
    padding: 1vh 0;
    small {
      font-size: 1vw;
    }
  }
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(4, minmax(2vw, 1fr));
    article {
      gap: 1vh;
      small {
        font-size: 1.2vw;
      }
    }
  }
  @media screen and (max-width: 430px) {
    gap: 0.5vh;
    article {
      border-radius: 10px;

      small {
        font-size: 2.5vw;
      }
    }
  }
`
export const HourlyTemperatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5vw, 1fr));
  justify-items: center;
  align-content: center;
  align-items: center;
  column-gap: 1vw;
  width: 100%;
  overflow-x: scroll;
  padding: 3vh 0;
  article {
    grid-row: 1;
    text-align: center;
    font-size: 1.1vw;
  }
  img {
    grid-row: 2;
    width: 45px;
    height: 45px;
    margin: 1vh 0;
  }
  span {
    grid-row: 3;
    text-align: center;
    font-size: 1.1vw;
  }

  @media screen and (max-width: 1024px) {
    column-gap: 3vw;
    article {
      font-size: 1.5vw;
    }
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 1.5vw;
    }
  }
  @media screen and (max-width: 430px) {
    column-gap: 3vw;
    grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
    article {
      font-size: 3vw;
    }
    img {
      width: 20px;
      height: 20px;
      margin: 0.5vh 0;
    }
    span {
      font-size: 2.5vw;
    }
  }
`
export const HourlyForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(6vw, 1fr));
  text-align: center;
  width: 100%;
  gap: 1.2vh 2vw;
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
      color: black;
      display: flex;
      align-items: center;
      font-size: 1vw;
      gap: 1vw;
      margin-bottom: 1vh;
    }
    p {
      font-size: 1.1vw;
    }
  }

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(5vw, 1fr));
    grid-auto-rows: minmax(4vh, 1fr);
    article {
      h4 {
        font-size: 1.5vw;
      }
      p {
        font-size: 1.5vw;
      }
    }
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: 10px;
    article {
      h4 {
        font-size: 2.5vw;
      }
      p {
        font-size: 2vw;
      }
    }
  }
`
