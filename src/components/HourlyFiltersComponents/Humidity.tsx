import React from 'react'
import { WiHumidity } from 'react-icons/wi'

import { DatesContext } from '../../context/DateTimeContext'
import { WeatherContext } from '../../context/WeatherContext'

export const Humidity: React.FC = () => {
  const { weather } = React.useContext(WeatherContext)
  const { hourAtSelectedTimeZone } = React.useContext(DatesContext)

  const hourlyHumidity = weather.hourlyINFO?.relativehumidity_2m

  return (
    <>
      {hourlyHumidity ? (
        <article>
          <h4>
            <WiHumidity /> Humidity
          </h4>
          <p>{hourlyHumidity[hourAtSelectedTimeZone]}%</p>
        </article>
      ) : null}
    </>
  )
}
