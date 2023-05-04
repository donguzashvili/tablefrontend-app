
export type dataType = {
    readonly address: {
        readonly street: string,
        readonly city: string
    },
    readonly email: string,
    readonly gender: string,
    readonly id: number,
    readonly name: string,
    readonly phone: string
}

export type chartType = {
    city: string,
    population: number
}

export interface storeType {
    data: dataType[],
    chartData: chartType[],
    loading: boolean,
    fillData: () => void
    deleteData: (id: number) => void
    addData: (newData: dataType) => void
    getChartData: () => void
    
}

export type modalPropType = {
    open: boolean,
    onCancel(): void,
    onSubmit: (values: formType) => void
    initialValues?: formType
}

export type formType = {
    readonly id?: number
    readonly email: string,
    readonly gender: string,
    readonly name: string,
    readonly phone: string,
    readonly street: string,
    readonly city: string
}