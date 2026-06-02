import api from './api'

export const getPayments = async () => {
  try {

    const response =
      await api.get('/api/payments')

    return response.data.data

  } catch (error) {

    console.log(error)

    return []
  }
}