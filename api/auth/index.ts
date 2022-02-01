import { api } from '../index'

const AuthAPI = {
  async login(token: string) {
    await api.post('/login', { token })
  },
}

export default AuthAPI
