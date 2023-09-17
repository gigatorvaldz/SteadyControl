import axios from "axios";

export const API_URL = "http://nestjs-app:5000"

const $api = axios.create({
    baseURL: API_URL,
})

export default $api;