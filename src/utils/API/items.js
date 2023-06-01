const URL_PREFIX = "http://localhost:3001";

// TODO: add deployed url option

const itemsAPI = {
  getItems: async () => {
    try {
      const data = await fetch(`${URL_PREFIX}/api/items`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(" f data:", data.json());
      if (data.ok) {
        return await data.json();
      }
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  },

  createItems: async (
    title,
    category,
    minimum_trade,
    photo,
    condition,
    sold_status
  ) => {
    try {
      const newItem = {
        title: title,
        minimum_trade: minimum_trade,
        category: category,
        photo: photo,
        condition: condition,
        sold_status: sold_status,
      };
      const data = await fetch(`${URL_PREFIX}/api/items`, {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (data.ok) {
        return data.json();
      }
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  },
};

export default itemsAPI;
