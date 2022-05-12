/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  large: {
    '--height': '24px',
    '--border-radius': '8px',
    '--border-width': '4px',
  },
  medium: {
    '--height': '12px',
    '--border-radius': '4px',
    '--border-width': '0px',
  },
  small: {
    '--height': '8px',
    '--border-radius': '4px',
    '--border-width': '0px',
  },
}

const Wrapper = styled.div`
  height: var(--height);
  border-radius: var(--border-radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  & > div {
    height: 100%;
    border: var(--border-width) solid transparent;
    border-radius: var(--border-radius);
    overflow: hidden;

    & > div {
      height: 100%;
      background-color: ${COLORS.primary};
    }
  }
`

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size]
  return (
    <Wrapper style={style}>
      <div>
        <div style={{ width: `${value}%` }} />
      </div>
    </Wrapper>
  )
  // return (
  //   <div
  //     style={{
  //       height: '24px',
  //       borderRadius: '8px',
  //       backgroundColor: COLORS.transparentGray15,
  //       boxShadow: `inset 0px 2px 4px ${COLORS.transparentGray35}`,
  //     }}
  //   >
  //     <div
  //       style={{
  //         height: '100%',
  //         border: '4px solid transparent',
  //         borderRadius: '8px',
  //         overflow: 'hidden',
  //       }}
  //     >
  //       <div
  //         style={{
  //           width: '50%',
  //           height: '100%',
  //           backgroundColor: COLORS.primary,
  //         }}
  //       />
  //     </div>
  //   </div>
  // )
}

export default ProgressBar
