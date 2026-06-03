import api from './api'

export const getOrders = async () => {
  try {
    const response = await api.get('/api/orders')
    return response.data.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getOrdersByCustomer = async (pelangganId) => {
  try {

    const response =
      await api.get(`/api/orders/pelanggan/${pelangganId}`)

    return response.data.data

  } catch (error) {

    console.log(error)

    return []
  }
}

// Add order
export const addOrder = async (data) => {
  try {

    const response = await api.post('/api/orders', data)

    return response.data

  } catch (error) {

    console.log(error)
  }
}

// Update order status
export const updateOrderStatus = async (
  id,
  status
) => {
  try {

    const response = await api.put(`/orders/${id}`, {
      status
    })

    return response.data

  } catch (error) {

    console.log(error)
  }
}

// Delete order
export const deleteOrder = async (id) => {
  try {

    const response = await api.delete(`/orders/${id}`)

    return response.data

  } catch (error) {

    console.log(error)
  }
}

