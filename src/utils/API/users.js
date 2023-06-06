import React from "react";
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
      if (data.ok) {
        return await data.json();
      }
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  },
  getUserId: async (userId) => {
    try {
      const data = await fetch(`${URL_PREFIX}/api/users/${userId}`, {
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

  // signup
  signUp: async (name, password, email) => {
    try {
      const newUser = {
        userName: name,
        password: password,
        email: email,
      };
      const res = await fetch(`${URL_PREFIX}/api/users`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.json();
    } catch (error) {
      throw new Error(error);
    }
  },
  login: async (userName, password) => {
    const user = {
      userName: userName,
      password: password,
    };

    const res = await fetch(`${URL_PREFIX}/api/users/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("falied login");
    }
  },
  verifyToken: async (token) => {
    const res = await fetch(`${URL_PREFIX}/api/users/verifytoken`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data;
  },
  getMessages: async (token) => {
    const res = await fetch(`${URL_PREFIX}/api/messages/${token}`);
    return res.json();
  },
  getOffer: async (token) => {
    const res = await fetch(`${URL_PREFIX}/api/offer/${token}`);
    return res.json();
  }
};

export default userAPI;
