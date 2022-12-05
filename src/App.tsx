import { ParallaxProvider } from 'react-scroll-parallax'
import { LocalForecast } from './screens/Forecast'
import { Search } from './screens/search'
import { Wrapper } from './styles/GlobalStyles'
import { BgBanner } from './components/Parallax/ParallaxBanner'

import { WeatherContextProvider } from './context/WeatherContext'
import { DateTimeContextProvider } from './context/DateTimeContext'

function App() {
  return (
    <WeatherContextProvider>
      <DateTimeContextProvider>
        <ParallaxProvider>
          <BgBanner />
          <Wrapper>
            <Search />
            <LocalForecast />
          </Wrapper>
        </ParallaxProvider>
      </DateTimeContextProvider>
    </WeatherContextProvider>
  )
}

export default App
