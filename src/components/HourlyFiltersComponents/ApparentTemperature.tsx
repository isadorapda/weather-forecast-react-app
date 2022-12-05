import React from 'react'
import { FaTemperatureLow } from 'react-icons/fa'

import { DatesContext } from '../../context/DateTimeContext'
import { WeatherContext } from '../../context/WeatherContext'

interface Props {
  hourlyUnit: string | undefined
  dailyUnit: string | undefined
}

export const ApparentTemperature: React.FC<Props> = ({
  hourlyUnit,
  dailyUnit,
}) => {
  const { weather } = React.useContext(WeatherContext)
  const { hourAtSelectedTimeZone } = React.useContext(DatesContext)

  const feelsLikeHourly = weather.hourlyINFO?.apparent_temperature

  return (
    <>
      {feelsLikeHourly ? (
        <article>
          <h4>
            <FaTemperatureLow /> Feels Like
          </h4>
          <p>{`${feelsLikeHourly[hourAtSelectedTimeZone]}${
            hourlyUnit ? hourlyUnit : dailyUnit
          }`}</p>
        </article>
      ) : null}
    </>
  )
}
