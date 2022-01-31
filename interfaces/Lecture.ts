import Group from './Group'
import ID from './ID'
import Teacher from './Teacher'

interface Lecture {
  readonly id: ID
  lessonSubject: string
  title: string
  description?: string
  homework?: string
  teacher: Teacher['id']
  group: Group['id']
  startTime: number
  endTime: number
}

export default Lecture
