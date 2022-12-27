import axios from "axios";
// AWS API
const API_base = "http://api.mullae.com";

// LOCAL API
// const API_base = "http://192.168.35.126:8080";

const API = {
  signup: async (login_id, password, name, phone_number, email) => {
    const data = await axios.post(`${API_base}/signup`, {
      login_id: login_id,
      password: password,
      name: name,
      phone_number: phone_number,
      email: email,
    });
    console.log(data);
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
  signin: async (login_id, password) => {
    const data = await axios.post(
      `${API_base}/login`,
      {
        login_id: login_id,
        password: password,
      },
      { withCredentials: true }
    );
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data.status);
    }
  },
  registration: async (name, price, kind) => {
    const data = await axios.post(
      `${API_base}/item`,
      {
        name: name,
        price: price,
        kind: kind,
      },
      { withCredentials: true }
    );
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data.status);
    }
  },
  getitems: async (page) => {
    const data = await axios.get(`${API_base}/items`, {
      params: {
        page: page,
      },
    });
    return data.data.data;
  },
  getitem: async (item_id) => {
    const data = await axios.get(`${API_base}/item/${item_id}`, {
      params: {
        item_id: item_id,
      },
    });
    return data.data.data;
  },
};

export default API;
