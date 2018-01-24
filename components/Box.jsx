import styled from 'styled-components'
import {
  color,
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  boxShadow,
  borderRadius,
  responsiveStyle
} from 'styled-system'

const display = responsiveStyle({
  prop: 'display',
  cssProperty: 'display'
})

const verticalAlign = responsiveStyle({
  prop: 'verticalAlign',
  cssProperty: 'verticalAlign'
})

export const Box = styled.div`
  ${color}
  ${space}
  ${width}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${boxShadow}
  ${borderRadius}
  ${display}
  ${verticalAlign}
`

export const Card = Box.extend`
  overflow: hidden;
`

Card.defaultProps = {
  display: 'inline-block',
  boxShadow: 0,
  borderRadius: 4
}

export const Half = Box.extend``

Half.defaultProps = {
  display: 'inline-block',
  verticalAlign: 'top',
  width: '50%'
}

export const Section = Box.withComponent('section')

export const Header = Box.withComponent('header')

export const Footer = Box.withComponent('footer')
