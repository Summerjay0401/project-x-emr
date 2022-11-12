import axios, { authHeader } from "../api";

const API_URL = `${process.env.REACT_APP_API_URL}/api/vitals`;

const getAllByUser = (userId) => {
    return axios.get(`${API_URL}/${userId}`, {
        headers: authHeader()
    });
};

const getById = (userId, id) => {
    return axios.get(`${API_URL}/${userId}`, {
        headers: authHeader()
    });
};

const create = (obj) => {
    return axios.post(`${API_URL}`, obj, {
        headers: authHeader()
    });
};

const update = (id, bloodPressure, bloodSugar, pulse) => {
    return axios.post(`${API_URL}/${id}`, {
        bloodPressure,
        bloodSugar,
        pulse
    }, {
        headers: authHeader()
    });
};

const remove = (id) => {
    return axios.delete(`${API_URL}/${id}`, {
        headers: authHeader()
    });
};

const VitalSerivce = {
    getAllByUser,
    getById,
    create,
    update,
    remove
}

export default VitalSerivce;
