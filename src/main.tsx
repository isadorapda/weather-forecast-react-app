import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/GlobalStyles'
import App from './App'
import { ParallaxProvider } from 'react-scroll-parallax'
import { DateTimeContextProvider } from './context/DateTimeContext'
import { WeatherContextProvider } from './context/WeatherContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <WeatherContextProvider>
      <DateTimeContextProvider>
        <ParallaxProvider>
    <GlobalStyle />
    <App />
        </ParallaxProvider>
      </DateTimeContextProvider>
    </WeatherContextProvider>
  </React.StrictMode>
)
