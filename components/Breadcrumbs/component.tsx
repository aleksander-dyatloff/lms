import Text from '@components/Text'
import ArrowIcon from 'icons/Arrow'
import Link from 'next/link'
import { Fragment } from 'react'

import Wrapper from './styles'
import BreadcrumbsComponent from './types'

const Breadcrumbs: BreadcrumbsComponent.MainComponent = ({
  items,
  ...restProps
}) => (
  <Wrapper
    {...restProps}
  >
    {items.map((item, index) => (
      <Fragment key={item.label}>
        {item.href ? (
          <Link
            href={item.href}
          >
            <Text
              as='a'
              className='item'
            >
              {item.label}
            </Text>
          </Link>
        ) : (
          <Text>
            {item.label}
          </Text>
        )}
        {index !== items.length - 1 && (
        <ArrowIcon />
        )}
      </Fragment>

    ))}
  </Wrapper>
)

export default Breadcrumbs
