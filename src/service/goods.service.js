import htppService from "./htpp.service";

const goodsEndpoint = "good/";

const goodsService = {
    fetchAll: async() => {
        const { data } = await htppService.get(goodsEndpoint);
        return data;
    },
    get: async(path, id) => {
        const { data } = await htppService.get(goodsEndpoint + path + id);
        return data;
    },
    getAllGood: async(path) => {
        const { data } = await htppService.get(goodsEndpoint + path);
        return data;
    },
    // create: async (path, content) => {
    //   const { data } = await htppService.put(
    //     goodsEndpoint + path + content.id,
    //     content
    //   );
    //   return data;
    // },
    create: async(content) => {
        const { data } = await htppService.post(goodsEndpoint, content);
        return data;
    },
    // update: async (path, id, content) => {
    //   const { data } = await htppService.put(
    //     goodsEndpoint + `${path}/${id}/`,
    //     content
    //   );
    //   return data;
    // },
    update: async(id, content) => {
        const { data } = await htppService.patch(goodsEndpoint + id, content);
        return data;
    },
    // delete: async (path, id) => {
    //   const { data } = await htppService.delete(goodsEndpoint + `${path}/${id}/`);
    //   return data;
    // },
    delete: async(id) => {
        const { data } = await htppService.delete(goodsEndpoint + id);
        return data;
    }
};

export default goodsService;
