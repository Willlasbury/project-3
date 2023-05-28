// url for working in the local host
const URL_PREFIX = "http://localhost:3000";

// TODO: add deployed url option

const userAPI = {
  getUsers: async () => {
    try {
      const data = await fetch(`${URL_PREFIX}/api/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(" f data:", data.json())
      if (data.ok) {
        return data;
      }
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  },

  createUser: async (name, passsord) => {
    try {
      const newUser = {
        userName: name,
        password: passsord,
      };
      const data = fetch(`${URL_PREFIX}/api/users`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (data.ok) {
        return data.json;
      }
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  },
};

export default userAPI;
