import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Container>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Wrapper>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={1} />
        </IconWrapper>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const Wrapper = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 40px;
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`

export default Select
