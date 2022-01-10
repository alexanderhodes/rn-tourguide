import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg'
import { IStep, ValueXY } from '../types'
import { svgCirclePath, svgRectPath } from '../utilities'

interface Props {
  size: ValueXY
  position: ValueXY
  borderRadius?: number
  currentStep?: IStep
}

interface State {}

export class SvgOpacity extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { position, size, currentStep } = this.props
    const shape = currentStep!.shape

    const x = position.x
    const y = position.y
    const width = size.x
    const height = size.y

    const data = shape === 'circle' ? svgCirclePath(x + height / 2, y + height / 2, height / 2) : svgRectPath(x, y, width, height)

    return (
      <Svg>
        <Path d={data} fill='transparent' onPress={() => console.log('presssing')} />
      </Svg>
    )
  }
}
