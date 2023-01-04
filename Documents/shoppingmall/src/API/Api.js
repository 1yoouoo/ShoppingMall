import axios from "axios";
// AWS API
const API_base = "http://api.mullae.com";

// LOCAL API
// const API_base = "http://192.168.35.126:80";

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
  registration: async (name, price, color) => {
    const data = await axios.post(
      `${API_base}/item`,
      {
        name: name,
        price: price,
        color: color,
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
  logout: async (token) => {
    //3
    const data = await axios.post(`${API_base}/logout`, { accessToken: token });
    //4
    return data;
  },
  getuser: async (token) => {
    const data = await axios.get(`${API_base}/user/${token}`);
    return data;
  },

  changeuser: async (token, password, phone_number, email) => {
    const data = await axios.put(`${API_base}/user`, {
      accessToken: token,
      password: password,
      phone_number: phone_number,
      email: email,
    });
    return data;
  },
  putbasket: async (token, color_id, count) => {
    const data = await axios.post(`${API_base}/cart/${color_id}`, {
      accessToken: token,
      color_id: color_id,
      count: count,
    });
    return data;
  },
  getbasket: async (token) => {
    const data = await axios.get(`${API_base}/cart/${token}`);
    return data.data.data;
  },
  updatecountbasket: async (cart_item_id, count) => {
    const data = await axios.put(`${API_base}/cartitem/${cart_item_id}`, {
      cart_item_id: cart_item_id,
      count: count,
    });
    return data;
  },
  deletebasket: async (token, cart_item_id) => {
    const data = await axios.delete(
      `${API_base}/${token}/cartitem/${cart_item_id}`
    );
    return data;
  },
  getstocklist: async () => {
    const data = await axios.get(`${API_base}/items/stock`);
    return data;
  },
};

export default API;
