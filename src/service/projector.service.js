import htppService from "./htpp.service";

const projectorEndpoint = "projector/"

const projectorService = {
    fetchAll: async () => {
        const {data} = await htppService.get(projectorEndpoint);              
        return data
    },
    get: async (id) => {
        const {data} = await htppService.get(projectorEndpoint + id)        
        return data
    },
    create: async (content) => {
        const {data} = await htppService.put(projectorEndpoint+content.id, content)        
        return data
    },
    update: async (id, content) => {
        const {data} = await htppService.put(projectorEndpoint + id, content)        
        return data
    },
    delete: async (id) => {
        const {data} = await htppService.delete(projectorEndpoint + id)        
        return data
    },

}

export default projectorService
