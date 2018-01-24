import React from 'react'
import {withTheme} from 'styled-components'
import {Box, Card, Half} from './Box.jsx'
import {Text} from './Text.jsx'

const Swatch = ({color, width, height, m, theme}) => {
  const footerHeight = height - 75
  return (
    <Card width={width} m={m} bg='white' style={{height, border: 'solid 1px rgba(205, 207, 214, 0.66)'}}>
      <div>
        <Half bg={color} style={{height: footerHeight}} />
        <Half bg={`${color}-muted`} style={{height: footerHeight}} />
      </div>
      <Box align='left' px={3} pt={3} pb={2}>
        <Text display='block' pb={2} color='charcoal-muted' textTransform='capitalize' fontWeight={500}>
          {color}
        </Text>
        <Half>
          <Text fontSize={1} color='charcoal-muted' textTransform='uppercase' fontWeight={500} title={color}>
            {theme.colors[color]}
          </Text>
        </Half>
        <Half fontSize={1} align='right' fontWeight={500}>
          <Text color='gray' title={`${color}-muted`} textTransform='uppercase'>
            {theme.colors[`${color}-muted`]}
          </Text>
        </Half>
      </Box>
    </Card>
  )
}

Swatch.defaultProps = {
  width: 233,
  height: 160,
  m: 3
}

export default withTheme(Swatch)
