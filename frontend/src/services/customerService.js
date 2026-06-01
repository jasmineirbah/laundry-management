import api from './api'

export const createCustomer = async (data) => {
  const response = await api.post('/api/pelanggan', data)
  return response.data
}

// Get customers
export const getCustomers = async () => {
  try {
    const response = await api.get('/customers')
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}

// Add customer
export const addCustomer = async (data) => {
  try {
    const response = await api.post('/customers', data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// Delete customer
export const deleteCustomer = async (id) => {
  try {
    const response = await api.delete(`/customers/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}