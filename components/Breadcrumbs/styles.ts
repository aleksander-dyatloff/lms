import Element from '@components/Element/styles'
import styled from 'styled-components'

import BreadcrumbsComponent from './types'

const Wrapper = styled(Element)<BreadcrumbsComponent.WrapperProps>`
  display: flex;
  align-items: center;

  & > * {
    margin: 0 4px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

export default Wrapper
