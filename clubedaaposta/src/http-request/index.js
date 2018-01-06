import axios from 'axios'

export const LOCATION = axios.create({
    baseURL: "http://maps.googleapis.com/maps/api/geocode"
})