import axios from "axios";

export const callGetApi = async (endPoint, data) => {
  try {
    const baseUrl = "http://103.142.137.207:1337";

    const response = await axios.get(baseUrl + endPoint);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export const apis = {
  trains: {
    retrieve: (query) => callGetApi(`/api/trains${query ? `?${query}` : ""}`),
    getById: (id) => callGetApi(`/api/trains/${id}`),
  },
  trips: {
    retrieve: (query) => callGetApi(`/api/trips${query ? `?${query}` : ""}`),
    getById: (id) => callGetApi(`/api/trips/${id}`),
  },
  chairs: {
    retrieve: (query) => callGetApi(`/api/chairs${query ? `?${query}` : ""}`),
    getById: (id) => callGetApi(`/api/chairs/${id}`),
  },
  stations: {
    retrieve: (query) => callGetApi(`/api/stations${query ? `?${query}` : ""}`),
    getById: (id) => callGetApi(`/api/stations/${id}`),
  },
};
