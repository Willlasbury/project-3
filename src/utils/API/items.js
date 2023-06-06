const URL_PREFIX = "http://localhost:3001";

// TODO: add deployed url option

const itemsAPI = {
  getItems: async () => {
    try {
      const response = await fetch(`${URL_PREFIX}/api/items`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
      } else {
        throw new Error(
          `Error fetching items: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.log("Error:", error);
      throw new Error(`Error fetching items: ${error.message}`);
    }
  },

  getItemId: async (itemId) => {
    try {
      const data = await fetch(`${URL_PREFIX}/api/items/${itemId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.ok) {
        return await data.json();
      }
    } catch (error) {
      console.log("error:", error);
      // throw new Error(error);
    }
  },

  createItems: async (
    title,
    category,
    minimum_trade,
    imageArr,
    condition,
    sold_status,
    token
  ) => {
    try {
      const newItem = {
        title: title,
        minimum_trade: minimum_trade,
        category: category,
        url: imageArr,
        condition: condition,
        sold_status: sold_status,
        token: token,
      };
      const data = await fetch(`${URL_PREFIX}/api/items`, {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (data.ok) {
        console.log("data:", data);
        return data.json();
      }
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  },
};

export default itemsAPI;
