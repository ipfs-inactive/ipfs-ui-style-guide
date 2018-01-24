import styled from 'styled-components'
import {space, width, fontSize, color, responsiveStyle} from 'styled-system'

const display = responsiveStyle({
  prop: 'display',
  cssProperty: 'display'
})

const fontFamily = responsiveStyle({
  prop: 'fontFamily',
  cssProperty: 'fontFamily',
  key: 'fonts'
})

export const Button = styled.button`
  ${fontFamily}
  ${display}
  ${space}
  ${width}
  ${fontSize}
  ${color}
  appearance: none;
  text-decoration: none;
  min-width: 140px;
  vertical-align: middle;
  text-align: center;
  font-weight: 600;
  border-width: 0;
  border-radius: 3px;
  white-space: nowrap;
  line-height: 1;
  cursor: ${props => !props.disabled ? 'pointer' : 'initial'};
  transition: opacity .15s ease-in-out, box-shadow .15s ease-in-out;
  &:hover {
    opacity: ${props => props.disabled ? 1 : 0.9};
  }
  &:focus {
    outline: 0;
  }
  &:disabled {
    color: ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors['gray-muted']};
  }
  &:active {
    opacity: 0.95;
    box-shadow: ${props => props.disabled ? 'initial' : 'inset 0 0 8px rgba(0,0,0,0.3)'};
  }
`

Button.defaultProps = {
  mx: 2,
  my: 2,
  px: 4,
  py: 3,
  fontFamily: 0,
  display: 'inline-block',
  fontSize: 2,
  color: 'white',
  bg: 'aqua'
}

export const ResponsiveButton = Button.extend``

ResponsiveButton.defaultProps = {
  ...Button.defaultProps,
  display: ['block', 'inline-block'],
  width: ['100%', 'initial'],
  my: [3, 2],
  mx: [0, 2]
}
