import ID from './ID'
import User from './User'

interface Lesson {
  readonly id: ID
  readonly _id: ID
  name: string
  description?: string
  password: string
  users: User[]
  owner: User
}

export interface LessonInfo {
  name: string
  description?: string
  password: string
}

export default Lesson
