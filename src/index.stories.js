import React from 'react'
import RangeSlider from './index'

const init = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  args: {
    maximumValue: 140,
    value: {
      start: 20,
      end: 70,
    },
  },
}
export default init

export const Default = (args) => {
  return <RangeSlider {...args} />
}

export const WithLargerStep = (args) => {
  return <RangeSlider {...{ ...args, step: 10 }} />
}

export const WithOnChangeEvent = (args) => {
  const [rangeValue, setRangeValue] = React.useState(args.value)
  const onChange = (value) => {
    setRangeValue(value)
  }

  return (
    <div>
      <RangeSlider {...{ ...args, onChange }} />
      <div>
        Values: {rangeValue?.start} until {rangeValue?.end}
      </div>
    </div>
  )
}

export const WithDecimalValue = (args) => {
  const [rangeValue, setRangeValue] = React.useState({ start: 3.14, end: 5.12 })
  const onChange = (value) => {
    setRangeValue(value)
  }

  return (
    <div>
      <RangeSlider {...{ ...args, maximumValue: 14, step: 0.1, value: { start: 3.14, end: 5.12 }, onChange }} />
      <div>
        Values: {rangeValue?.start} until {rangeValue?.end}
      </div>
    </div>
  )
}

Default.defaultProps = init?.args
