const URL_PREFIX = "http://localhost:3001";

// TODO: add deployed url option

const categoriesAPI = {
  getItems: async () => {
    try {
      const response = await fetch(`${URL_PREFIX}/api/categories`, {
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
};

export default categoriesAPI;
