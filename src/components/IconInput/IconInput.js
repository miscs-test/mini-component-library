import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

// const SIZES = {
//   small: {
//     iconSize: 14,
//     '--font-size': 14 / 16 + 'rem',
//   },
//   large: {
//     iconSize: 18,
//     '--font-size': 16 / 16 + 'rem',
//   },
// }

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const fontSize = size === 'large' ? 18 : 14
  const borderWidth = size === 'large' ? 2 : 1
  const paddingLeft = fontSize + 10
  return (
    <Wrapper style={{ '--font-size': fontSize / 16 + 'rem' }}>
      <Input
        placeholder={placeholder}
        width={width}
        style={{
          '--border-width': borderWidth + 'px',
          '--padding-left': paddingLeft + 'px',
        }}
      />
      <IconWrapper>
        <Icon id={icon} size={fontSize} />
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  font-size: var(--font-size);
`

const Input = styled.input`
  border: none;
  border-bottom: var(--border-width) solid black;
  padding: 4px;
  padding-left: var(--padding-left);
  outline-offset: 4px;

  &:focus {
    color: ${COLORS.gray700};
  }

  &:placeholder {
    color: ${COLORS.gray500};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  bottom: 6px;
  color: ${COLORS.gray700};
`

export default IconInput
