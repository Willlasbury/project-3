// url for working in the local host
const URL_PREFIX = "http://localhost:3001";

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
        return await data.json();
      }
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  },

  // signup
  signUp: async (name, password, email) => {
    try {
      const newUser = {
        userName: name,
        password: password,
        email: email
      };
      const res = await fetch(`${URL_PREFIX}/api/users`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

    return res.json()
    } catch (error) {
      throw new Error(error);
    }
  },
};



export default userAPI;
