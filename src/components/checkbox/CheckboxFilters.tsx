import React from 'react'
import {
  FILTERS_DAILY,
  FILTERS_HOURLY,
  FILTERS_TEMPERATURE_UNITS,
} from '../../constants/searchFilters'
import {
  FiltersContainer,
  DailyFilters,
  HourlyFilters,
  LabelInputCheckbox,
} from './checkboxStyles'
import { SelectFilters } from '../SelectFilters/index.jsx'

type Props = {
  toggleSelectedByDailyValue: (value: string) => void
  toggleSelectedByHourlyValue: (value: string) => void
  setSelectedFilterByDailyValue: React.Dispatch<React.SetStateAction<string[]>>
  setSelectedFilterByHourlyValue: React.Dispatch<React.SetStateAction<string[]>>
  setTemperatureUnit: React.Dispatch<React.SetStateAction<string>>
}

export const CheckboxFilters: React.FC<Props> = ({
  toggleSelectedByDailyValue,
  toggleSelectedByHourlyValue,
  setSelectedFilterByDailyValue,
  setSelectedFilterByHourlyValue,
  setTemperatureUnit,
}) => {
  return (
    <>
      <SelectFilters
        setSelectedFilterByDailyValue={setSelectedFilterByDailyValue}
        setSelectedFilterByHourlyValue={setSelectedFilterByHourlyValue}
      />
      <FiltersContainer>
        <DailyFilters>
          <h3>Daily Filters:</h3>
          {FILTERS_DAILY.map((filter) => {
            return (
              <div key={filter.value}>
                <input
                  type="checkbox"
                  name="daily_filter"
                  value={filter.value}
                  id={filter.label}
                  onClick={() => toggleSelectedByDailyValue(filter.value)}
                />
                <LabelInputCheckbox htmlFor={filter.label}>
                  {filter.label}
                </LabelInputCheckbox>
              </div>
            )
          })}

          <h3>Temperature Unit:</h3>
          {FILTERS_TEMPERATURE_UNITS.map((unit) => (
            <div key={unit.label}>
              <input
                type="radio"
                name="temperature-units"
                id={unit.label}
                onClick={() => setTemperatureUnit(unit.value)}
              />
              <LabelInputCheckbox htmlFor={unit.label} title={unit.value}>
                {unit.label}
              </LabelInputCheckbox>
            </div>
          ))}
        </DailyFilters>

        <HourlyFilters>
          <h3>Hourly Filters:</h3>

          {FILTERS_HOURLY.map((filter) => {
            return (
              <div key={filter.value}>
                <input
                  type="checkbox"
                  name="hourly_filter"
                  value={filter.value}
                  id={filter.label}
                  onClick={() => toggleSelectedByHourlyValue(filter.value)}
                />
                <LabelInputCheckbox htmlFor={filter.label}>
                  {filter.label}
                </LabelInputCheckbox>
              </div>
            )
          })}
        </HourlyFilters>
      </FiltersContainer>
    </>
  )
}
