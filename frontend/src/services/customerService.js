import api from './api'

export const createCustomer = async (data) => {
  const response = await api.post('/api/pelanggan', data)
  return response.data
}

export const getCustomers = async () => {
  try {

    const response =
      await api.get('/api/customers')

    return response.data.data

  } catch (error) {

    console.log(error)

    return []
  }
}

export const addCustomer = async (data) => {
  try {

    const response =
      await api.post('/api/customers', data)

    return response.data

  } catch (error) {

    console.log(error)
  }
}

export const deleteCustomer = async (uid) => {

  try {

    const response =
      await api.delete(
        `/api/customers/${uid}`
      )

    return response.data

  } catch (error) {

    console.log(error)
  }
}

export const getCustomerByUid = async (uid) => {

  try {

    const response =
      await api.get(`/api/customers/${uid}`)

    return response.data.data

  } catch (error) {

    console.log(error)

    return null
  }
}

export const updateCustomer = async (
  uid,
  data
) => {

  try {

    const response =
      await api.put(
        `/api/customers/${uid}`,
        data
      )

    return response.data

  } catch (error) {

    console.log(error)
  }
}