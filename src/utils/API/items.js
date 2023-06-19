const URL_PREFIX = process.env.REACT_APP_SERVER_URL;
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

  getItemsBrowse: async (token) => {
    try {
      const response = await fetch(`${URL_PREFIX}/api/items/browse/${token}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
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

  getYourItems: async (token) => {
    try {
      const data = await fetch(`${URL_PREFIX}/api/items/seller/${token}`, {
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
    description,
    imageArr,
    condition,
    token
  ) => {
    try {
      const newItem = {
        title: title,
        minimum_trade: minimum_trade,
        category: category,
        description: description,
        url: imageArr,
        condition: condition,
        token: token,
      };
      console.log("newItem:", newItem)
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
  editItem: async (
    title,
    category,
    minimum_trade,
    description,
    imageArr,
    condition,
    sold_status,
    token,
    itemId
  ) => {
    try {
      const updatedItem = {
        title: title,
        minimum_trade: minimum_trade,
        category: category,
        description: description,
        url: imageArr,
        condition: condition,
        sold_status: sold_status,
        token: token,
        itemId: itemId,
      };
      const data = await fetch(`${URL_PREFIX}/api/items/${itemId}`, {
        method: "Put",
        body: JSON.stringify(updatedItem),
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
  deleteItemId: async (itemId) => {
    try {
      const data = await fetch(`${URL_PREFIX}/api/items/${itemId}`, {
        method: "DELETE",
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
};

export default itemsAPI;
