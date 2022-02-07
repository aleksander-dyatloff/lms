import Divider from '@components/Divider'
import Text from '@components/Text'
import { FC } from 'react'

import Wrapper from './styles'
import WeeklyCalendarComponent from './types'

const WeeklyCalendar: FC<WeeklyCalendarComponent.Props> = ({
  onChange,
  value,
  ...restProps
}) => (
  <Wrapper
    {...restProps}
  >
    <div className='head'>
      <div className='headItem'>
        <Text as='sub'>
          Mon
        </Text>
        <Text
          className='dayNumber active'
          variant='h6'
        >
          7
        </Text>
      </div>
      <div className='headItem'>
        <Text as='sub'>
          Tue
        </Text>
        <Text
          className='dayNumber'
          variant='h6'
        >
          8
        </Text>
      </div>
      <div className='headItem'>
        <Text as='sub'>
          Wed
        </Text>
        <Text
          className='dayNumber'
          variant='h6'
        >
          9
        </Text>
      </div>
      <div className='headItem'>
        <Text as='sub'>
          Thu
        </Text>
        <Text
          className='dayNumber'
          variant='h6'
        >
          10
        </Text>
      </div>
      <div className='headItem'>
        <Text as='sub'>
          Fri
        </Text>
        <Text
          className='dayNumber'
          variant='h6'
        >
          11
        </Text>
      </div>
      <div className='headItem'>
        <Text as='sub'>
          Sat
        </Text>
        <Text
          className='dayNumber'
          variant='h6'
        >
          12
        </Text>
      </div>
      <div className='headItem'>
        <Text as='sub'>
          Sun
        </Text>
        <Text
          className='dayNumber'
          variant='h6'
        >
          13
        </Text>
      </div>
    </div>
    <Divider />
    <div className='body'>
      <div className='bodyItem'>
        <div className='panel'>
          <div className='panelHeader'>
            <Text>English</Text>
          </div>
          <Text variant='sub'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, optio?
          </Text>
        </div>
      </div>
      <div className='bodyItem' />
      <div className='bodyItem' />
      <div className='bodyItem' />
      <div className='bodyItem' />
      <div className='bodyItem' />
      <div className='bodyItem' />
    </div>
  </Wrapper>
)

export default WeeklyCalendar
