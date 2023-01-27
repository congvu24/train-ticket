import axios from "axios";

export const callCMSGetApi = async (endPoint, data) => {
  try {
    const baseUrl = `http://${process.env.REACT_APP_PUBLIC_IP}:1337`;

    const response = await axios.get(baseUrl + endPoint);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export const callCMSPostApi = async (endPoint, data) => {
  try {
    const baseUrl = `http://${process.env.REACT_APP_PUBLIC_IP}:1337`;

    const response = await axios.post(baseUrl + endPoint, data);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export const callPostCheckoutServiceApi = async (endPoint, data) => {
  try {
    const baseUrl = "http://146.190.98.185:8080/v1";

    const response = await axios.post(baseUrl + endPoint, data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const callGetCheckoutServiceApi = async (endPoint, data) => {
  try {
    const baseUrl = "http://146.190.98.185:8080/v1";

    const response = await axios.get(baseUrl + endPoint);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const apis = {
  trains: {
    retrieve: (query) =>
      callCMSGetApi(`/api/trains${query ? `?${query}` : ""}`),
    getById: (id) => callCMSGetApi(`/api/trains/${id}`),
  },
  trips: {
    retrieve: (query) => callCMSGetApi(`/api/trips${query ? `?${query}` : ""}`),
    getById: (id) => callCMSGetApi(`/api/trips/${id}?populate=deep`),
  },
  chairs: {
    retrieve: (query) =>
      callCMSGetApi(`/api/chairs${query ? `?${query}` : ""}`),
    getById: (id) => callCMSGetApi(`/api/chairs/${id}`),
  },
  stations: {
    retrieve: (query) =>
      callCMSGetApi(`/api/stations${query ? `?${query}` : ""}`),
    getById: (id) => callCMSGetApi(`/api/stations/${id}`),
  },
  tickets: {
    create: (data) => callPostCheckoutServiceApi(`/tickets`, data),
    retrieve: (id) => callGetCheckoutServiceApi(`/tickets/${id}`),
    getAll: () => callGetCheckoutServiceApi(`/tickets`),
  },
  admin: {
    login: (data) => callCMSPostApi(`/admin/login`, data),
  },
};
