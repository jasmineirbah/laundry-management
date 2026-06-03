import api from './api'

export const getPackages = async () => {
  try {

    const response =
      await api.get('/api/packages')

    return response.data.data

  } catch (error) {

    console.log(error)

    return []
  }
}