import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

import SkyBottom from '../../assets/bottomBg.png'
import SkyTop from '../../assets/topBg.png'

export const BgBanner: React.FC = () => {
  return (
    <>
      <ParallaxBanner
        layers={[{ image: `${SkyTop}`, speed: -10 }]}
        style={{
          height: '100vh',
          width: '100vw',
        }}
      />
      {/* <ParallaxBanner
        layers={[{ image: `${SkyBottom}`, speed: 10 }]}
        style={{
          height: '100vh',
          width: '100vw',
        }}
      /> */}
    </>
  )
}
