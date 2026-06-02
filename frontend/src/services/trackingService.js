import api from './api'
import {
  collection,
  addDoc,
  serverTimestamp
} from 'firebase/firestore'

import { db } from '../firebase/firebaseConfig'

export const saveTrackingStatus = async (
  orderId,
  customer,
  status
) => {

  await addDoc(
    collection(db, 'tracking_status'),
    {
      orderId,
      customer,
      status,
      updatedAt: serverTimestamp()
    }
  )
}

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