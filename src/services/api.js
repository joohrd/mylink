import axios from 'axios';

// 58588ec6c2a8052fdb208a9c7135f86d36943445

// base url https://api-ssl.bitly.com/v4

export const key = '58588ec6c2a8052fdb208a9c7135f86d36943445';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  }
})

export default api;