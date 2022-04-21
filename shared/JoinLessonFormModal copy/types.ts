import Lesson from '@interfaces/Lesson'
import { FC } from 'react'

export namespace JoinLessonFormModalComponent {
  export interface WrapperProps {

  }

  export interface Props {
    isOpen: boolean
    onClose: () => void
    onCreate: (createdLesson: Lesson) => void
  }

  export type MainComponent = FC<Props>
}

export default JoinLessonFormModalComponent
