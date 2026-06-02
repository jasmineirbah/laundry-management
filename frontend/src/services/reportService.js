import api from './api'

export const getReport = async () => {
  try {

    const response =
      await api.get('/api/reports')

    return response.data.data

  } catch (error) {

    console.log(error)

    return null
  }
}