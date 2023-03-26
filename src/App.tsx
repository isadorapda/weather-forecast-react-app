import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { LocalForecast } from './screens/Forecast'
import { Search } from './screens/search'
import Sky from '../src/assets/clouds.png'

function App() {
  return (
    <>
      <ParallaxBanner
        layers={[{ image: `${Sky}`, speed: -10 }]}
        className="parallax"
      />
      <Parallax speed={10} className="wrapper">
        <Search />
        <LocalForecast />
      </Parallax>
    </>
  )
}

export default App
