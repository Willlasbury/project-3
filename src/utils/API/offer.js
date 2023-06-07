const URL_PREFIX = "http://localhost:3001";

const offerAPI = {
  getRecievedOffers: async (token) => {
    try {
      if (token) {
        const res = await fetch(`${URL_PREFIX}/api/offers/recieved/${token}`);
        const data = await res.json();
        if (data.msg) {
          return [];
        } else {
          return data;
        }
      } else {
        return [];
      }
    } catch (error) {
      console.log("error:", error);
    }
  },
  getSentOffers: async (token) => {
    try {
      if (token) {
        const res = await fetch(`${URL_PREFIX}/api/offers/sent/${token}`);
        const data = await res.json();
        if (data.msg) {
          return [];
        } else {
          return data;
        }
      } else {
        return [];
      }
    } catch (error) {
      console.log("error:", error);
    }
  }, 
  deleteOffer: async (id) => {
    try {
        const res = await fetch(`${URL_PREFIX}/api/offers/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
              },
        })

        console.log("res:", res)
    } catch (error) {
        console.log("error:", error);
    }
  }
};

export default offerAPI;
