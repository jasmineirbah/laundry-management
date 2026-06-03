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

export const saveNotification = async (
  customer,
  message
) => {

  await addDoc(
    collection(db, 'notifications'),
    {
      customer,
      message,
      createdAt: serverTimestamp()
    }
  )
}

export const saveHandoverPhoto = async (
  orderId,
  customer,
  photoUrl
) => {

  await addDoc(
    collection(db, 'handover_photos'),
    {
      orderId,
      customer,
      photoUrl,
      uploadedAt: serverTimestamp()
    }
  )
}

export const saveOutletSync = async (
  outlet,
  action
) => {

  await addDoc(
    collection(db, 'outlet_sync'),
    {
      outlet,
      action,
      syncedAt: serverTimestamp()
    }
  )
}

export const saveFeedback = async (
  customer,
  rating,
  comment
) => {

  await addDoc(
    collection(db, 'customer_feedback'),
    {
      customer,
      rating,
      comment,
      createdAt: serverTimestamp()
    }
  )
}