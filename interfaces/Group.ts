import Cadet from './Cadet'
import ID from './ID'

interface Group {
  readonly id: ID
  name: string
  cadets: Array<Cadet['id']>
}

export default Group
