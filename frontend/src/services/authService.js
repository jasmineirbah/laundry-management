import api from './api'

// Login admin
export const loginAdmin = async (data) => {
  try {

    const response = await api.post('/login', data)

    return response.data

  } catch (error) {

    console.log(error)

    throw error
  }
}

// Register admin
export const registerAdmin = async (data) => {
  try {

    const response = await api.post('/register', data)

    return response.data

  } catch (error) {

    console.log(error)

    throw error
  }
}