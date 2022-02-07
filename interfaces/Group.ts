import Cadet from './Cadet'
import ID from './ID'
import TeachSubject from './TeachSubject'
import User from './User'

interface ExtendedTeachSubject extends TeachSubject {
  teacher: User
}

interface Group {
  readonly id: ID
  name: string
  cadets: Array<Cadet['id']>
  subjects: ExtendedTeachSubject[]
}

export default Group
