import styled from 'styled-components'
import {
  color,
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  responsiveStyle,
  style
} from 'styled-system'

const display = responsiveStyle({
  prop: 'display',
  cssProperty: 'display'
})

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform'
})

export const Text = styled.span`
  ${color}
  ${space}
  ${width}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${display}
  ${textTransform}
`
Text.defaultProps = {
  fontSize: 2,
  fontWeight: 400
}
