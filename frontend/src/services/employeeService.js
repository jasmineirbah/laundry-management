import api from './api'

export const getEmployees = async () => {
  try {

    const response =
      await api.get('/api/employees')

    return response.data.data

  } catch (error) {

    console.log(error)

    return []

  }
}