import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export const setAuthorization = (token: string) => {
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export default api
