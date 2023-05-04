import axios from "axios"
import { dataType } from "../types/types"

const url = process.env.REACT_APP_LOCAL_URL

const server = axios.create({
    baseURL: url,
    headers: {
        Accept: "application/json"
    }
})

export const getData = async () => {
    const response = await server.get(`${url}`)
    return await response.data
}

export const deleteData = async (id: number) => {
    const response = await axios.post(`${url}delete`, null, {
        params: {
            id
        }
    })
    return await response.data
}

export const addDataToServer = async (newData: dataType) => {
    const response = await axios.post(`${url}add`, {
        newData
    })
    return await response.data
}

export const getServerChartData = async () => {
    const response = await axios.get(`${url}chart`)
    return await response.data
}
