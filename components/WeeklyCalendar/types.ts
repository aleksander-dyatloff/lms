import ChangeHandler from '@interfaces/ChangeHandler'
import Timestamp from '@interfaces/Timestamp'

namespace WeeklyCalendarComponent {
  export interface WrapperProps {
  }

  export interface Props {
    value: Timestamp
    onChange: ChangeHandler
  }
}

export default WeeklyCalendarComponent
