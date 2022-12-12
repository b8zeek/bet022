import axios from 'axios'

import { getTokenFromLocalStorage } from '../utils'

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: {
    'auth-token': getTokenFromLocalStorage()
  }
})
