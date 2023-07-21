import htppService from "./htpp.service";

const userEndpoint = "order/"

const orderService = {
    create: async (id, content, info) => {
        const {data} = await htppService.post(userEndpoint + id, {content, info})        
        return data
    },
    getById: async (id) => {
        const {data} = await htppService.get(userEndpoint + id)        
        return data
    },
}

export default orderService