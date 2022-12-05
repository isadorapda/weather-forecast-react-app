import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

import Sky from '../../assets/bgImg.jpg'

export const BgBanner: React.FC = () => {
  return (
    <ParallaxBanner
      layers={[{ image: `${Sky}`, speed: -20 }]}
      style={{ height: '200vh', width: '100vw', objectFit: 'cover' }}
    />
  )
}
