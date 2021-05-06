import React from 'react'
import RangeSlider from './index'

const init = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  args: {
    name: 'user',
  },
}
export default init

export const Default = (args) => {
  return <RangeSlider {...args} />
}

Default.defaultProps = init?.args
