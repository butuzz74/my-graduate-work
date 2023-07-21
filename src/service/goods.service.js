import htppService from "./htpp.service";

const projectorEndpoint = "goods/"

const goodsService = {
    fetchAll: async () => {
        const {data} = await htppService.get(projectorEndpoint)        
        return data
    },
    get: async (path, id) => {
        const {data} = await htppService.get(projectorEndpoint + path + id)        
        return data
    },
    create: async (path, content) => {
        const {data} = await htppService.put(projectorEndpoint + path + content.id, content)        
        return data
    },
    update: async (path, id, content) => {
        const {data} = await htppService.put(projectorEndpoint + path + id, content)        
        return data
    },
    delete: async (path, id) => {
        const {data} = await htppService.delete(projectorEndpoint + path + id)        
        return data
    },

}

export default goodsService