const URL_PREFIX = process.env.REACT_APP_SERVER_URL;

// TODO: add deployed url option

const categoriesAPI = {
  getCategories: async () => {
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
