import {create} from "zustand";
import { dataType, storeType } from "../types/types";
import { addDataToServer, deleteData, getServerChartData, getData } from "../service/Api";
import {toast} from "react-toastify"

const useStore = create<storeType>((set) => ({
    data: [],
    chartData: [],
    loading: false,
    fillData: async () => {
        try{
            set({loading: true})
            const response = await getData()
            set({data: response.data, loading: false  })
        }catch(err){    
            set({loading: false})
            if((err as any).response) toast.error((err as any).response.data.message)
            else toast.error((err as any).message)
        }
    },
    deleteData: async (id: number) => {
        try{
            set({loading: true})
            const response = await deleteData(id)
            set({data: response.data, loading: false})
            toast.success(response.message)
        }catch(err){
            toast.error((err as any).response.data.message)
        }
    },
    addData: async (newData: dataType) => {
        try{
            set({loading: true})
            const response = await addDataToServer(newData)
            toast.success(response.message)
            set({data: response.data, loading: false})
        }catch(err){
            toast.error((err as any).response.data.message)
        }
    },
    getChartData: async () => {
        try{
            set({loading: true})
            const response = await getServerChartData()
            set({chartData: response.data, loading: false})
        }catch(err){
            if((err as any).response) toast.error((err as any).response.data.message)
            else toast.error((err as any).message)

        }
    }

}))

export default useStore