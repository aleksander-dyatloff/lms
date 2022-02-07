import Genders from './Genders'
import ID from './ID'
import Roles from './Roles'

interface User {
  readonly id: ID
  name: string
  picture?: string
  role: keyof typeof Roles
  gender?: keyof typeof Genders
}

export default User
