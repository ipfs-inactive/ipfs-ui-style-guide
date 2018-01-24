import React from 'react'
import {withTheme} from 'styled-components'
import {Box, Section, Header} from '../components/Box.jsx'
import {PosterH1, PosterH2, H2, H3} from '../components/Heading.jsx'
import Swatch from '../components/Swatch.jsx'

const Index = ({theme}) => {
  const colorNames = Object.keys(theme.colors).filter(name => !name.match(/muted$/))
  const primaryPalette = colorNames.slice(0, 4)
  const secondaryPalette = colorNames.slice(4)

  return (
    <div>
      <Header px={2} py={4} bg='navy'>
        <Box align='right'>
          <PosterH2 mx={3} display='inline'>
            The Interplanetary File System
          </PosterH2>
          <PosterH1 mx={3} display='inline'>
            IPFS UI Kit
          </PosterH1>
        </Box>
      </Header>

      <Section px={2} py={5} bg='snow-muted' align='center'>
        <H2 mt={4}>
          Color Palette
        </H2>
        <H3 mt={1} mb={5}>
          Primary color palette
        </H3>
        {primaryPalette.map(name => <Swatch color={name} height={217} key={name} />)}
        <H3 mt={4} mb={4}>
          Secondary color palette
        </H3>
        {secondaryPalette.map(name => <Swatch color={name} height={160} key={name} />)}
      </Section>

      <Section px={2} py={5} bg='white' align='center'>
        <H2 mt={4}>
          Buttons
        </H2>
        <H3 mt={1} mb={5}>
          Basic buttons in action
        </H3>
      </Section>
    </div>
  )
}

export default withTheme(Index)
