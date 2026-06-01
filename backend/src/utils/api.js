const BASE_URL = 'http://localhost:5000/api'; // Sesuaikan port backend Node.js kamu

export const customerAPI = {
  // 1. Menembak ke: getPelangganByUid
  getByUid: async (uid) => {
    const response = await fetch(`${BASE_URL}/customer/${uid}`);
    return await response.json();
  },

  // 2. Menembak ke: createPelanggan
  create: async (dataPelanggan) => {
    const response = await fetch(`${BASE_URL}/customer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPelanggan),
    });
    return await response.json();
  },

  // 3. Menembak ke: updatePelanggan
  update: async (uid, dataBaru) => {
    const response = await fetch(`${BASE_URL}/customer/${uid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataBaru),
    });
    return await response.json();
  }
};