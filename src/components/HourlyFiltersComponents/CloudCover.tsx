import React from 'react'
import { AiTwotoneCloud } from 'react-icons/ai'

import { DatesContext } from '../../context/DateTimeContext'
import { WeatherContext } from '../../context/WeatherContext'

export const CloudCover: React.FC = () => {
  const { weather } = React.useContext(WeatherContext)
  const { hourAtSelectedTimeZone } = React.useContext(DatesContext)

  const hourlyCloudCover = weather.hourlyINFO?.cloudcover

  return (
    <>
      {hourlyCloudCover ? (
        <article>
          <h4>
            <AiTwotoneCloud /> Cloud Cover
          </h4>
          <p>{hourlyCloudCover[hourAtSelectedTimeZone]}%</p>
        </article>
      ) : null}
    </>
  )
}
