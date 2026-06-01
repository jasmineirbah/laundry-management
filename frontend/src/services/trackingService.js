import api from './api'

// Get tracking data
export const getTracking = async () => {
  try {

    const response = await api.get('/tracking')

    return response.data

  } catch (error) {

    console.log(error)

    return []
  }
}

// Update tracking status
export const updateTracking = async (
  id,
  status
) => {
  try {

    const response = await api.put(`/tracking/${id}`, {
      status
    })

    return response.data

  } catch (error) {

    console.log(error)
  }
}