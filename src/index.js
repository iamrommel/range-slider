import React from 'react'

export default ({ maximumValue = 100, step = 1, value = { start: 8, end: 60 }, onChange }) => {
  const [rangeMaxValue, setRangeMaxValue] = React.useState(value?.end)
  const [inverseRight, setInverseRight] = React.useState((value?.end / maximumValue) * 100)

  const [rangeMinValue, setRangeMinValue] = React.useState(value?.start)
  const [inverseLeft, setInverseLeft] = React.useState((value?.start / maximumValue) * 100)

  const minRangeRef = React.useRef(null)
  const maxRangeRef = React.useRef(null)

  const onChangeMin = (e) => {
    const newValue = Math.min(e?.target?.value, rangeMaxValue)
    if (newValue >= rangeMaxValue) return

    setInverseLeft((newValue / maximumValue) * 100)

    setRangeMinValue(newValue)

    onChange?.({ start: newValue, end: value?.end })
  }

  const onChangeMax = (e) => {
    const newValue = Math.max(e?.target?.value, rangeMinValue)
    if (newValue <= rangeMinValue) return

    setInverseRight((newValue / maximumValue) * 100)

    setRangeMaxValue(newValue)
    onChange?.({ start: value?.start, end: newValue })
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
              left: `${(rangeMinValue / maximumValue) * 100}%`,
              right: `${100 - (rangeMaxValue / maximumValue) * 100}%`,
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
        <input type="range" tabIndex="0" value={rangeMinValue} max={maximumValue} min={0} step={step} onChange={onChangeMin} ref={minRangeRef} />

        <input type="range" tabIndex="1" value={rangeMaxValue} max={maximumValue} min={0} step={step} onChange={onChangeMax} ref={maxRangeRef} />
      </div>
    </React.Fragment>
  )
}
