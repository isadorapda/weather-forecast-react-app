import React from 'react'
import { TbWind } from 'react-icons/tb'

import { DatesContext } from '../../context/DateTimeContext'
import { WeatherContext } from '../../context/WeatherContext'

export const WindSpeed: React.FC = () => {
  const { weather } = React.useContext(WeatherContext)
  const { hourAtSelectedTimeZone } = React.useContext(DatesContext)

  const hourlyWindspeed = weather.hourlyINFO?.windspeed_10m
  return (
    <>
      {hourlyWindspeed ? (
        <article>
          <h4>
            <TbWind /> Wind Speed
          </h4>
          <p>{hourlyWindspeed[hourAtSelectedTimeZone]}km/h</p>
        </article>
      ) : null}
    </>
  )
}
