import React from 'react'
import './styles.css'

export default ({ maximumInput = 300, value = { start: 8, end: 120 }, onChange }) => {
  const [rangeMaxValue, setRangeMaxValue] = React.useState(value?.end)
  const [inverseRight, setInverseRight] = React.useState((value?.end / maximumInput) * 100)

  const [rangeMinValue, setRangeMinValue] = React.useState(value?.start)
  const [inverseLeft, setInverseLeft] = React.useState((value?.start / maximumInput) * 100)

  const minRangeRef = React.useRef(null)
  const maxRangeRef = React.useRef(null)

  const onChangeMin = (e) => {
    const newValue = Math.min(e?.target?.value, rangeMaxValue)
    if (newValue >= rangeMaxValue) return

    setInverseLeft((newValue / maximumInput) * 100)

    setRangeMinValue(newValue)

    onChange?.({ startValue: newValue, endValue: value?.end })
  }

  const onChangeMax = (e) => {
    const newValue = Math.max(e?.target?.value, rangeMinValue)
    if (newValue <= rangeMinValue) return

    setInverseRight((newValue / maximumInput) * 100)

    setRangeMaxValue(newValue)
    onChange?.({ startValue: value?.start, endValue: newValue })
  }

  return (
    <React.Fragment>
      <div className="slider" id="slider-distance">
        <div>
          <div className="inverse-left" style={{ width: `${inverseLeft}%` }} />
          <div className="inverse-right" style={{ width: `${100 - inverseRight}%` }} />
          <div
            className="range"
            style={{
              left: `${(rangeMinValue / maximumInput) * 100}%`,
              right: `${100 - (rangeMaxValue / maximumInput) * 100}%`,
            }}
          />
          <span className="thumb" style={{ left: `${inverseLeft}%` }} />
          <span className="thumb" style={{ left: `${inverseRight}%`, backgroundColor: 'red' }} />
          <div className="sign" style={{ left: `${inverseLeft}%` }}>
            <span id="value">{rangeMinValue}</span>
          </div>
          <div className="sign" style={{ left: `${inverseRight}%` }}>
            <span id="value">{rangeMaxValue}</span>
          </div>
        </div>
        <input
          type="range"
          tabIndex="0"
          value={rangeMinValue}
          max={maximumInput}
          min={0}
          step={1}
          onChange={onChangeMin}
          ref={minRangeRef}
          id="minRange"
        />

        <input
          type="range"
          tabIndex="1"
          value={rangeMaxValue}
          max={maximumInput}
          min={0}
          step={1}
          onChange={onChangeMax}
          ref={maxRangeRef}
          id="maxRange"
        />
      </div>
    </React.Fragment>
  )
}
