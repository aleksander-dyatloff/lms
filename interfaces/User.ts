import Genders from './Genders'
import ID from './ID'
import Roles from './Roles'

interface User {
  readonly _id: ID
  readonly googleId: ID
  name: string
  picture?: string
  role: Roles
  gender?: Genders
}

export default User
