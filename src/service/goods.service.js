import htppService from "./htpp.service";

const goodsEndpoint = "good/";

const goodsService = {
  fetchAll: async () => {
    const { data } = await htppService.get(goodsEndpoint);    
    return data;
  },
  get: async (path, id) => {
    const { data } = await htppService.get(goodsEndpoint + path + id);
    return data;
  },
  create: async (path, content) => {
    const { data } = await htppService.put(
      goodsEndpoint + path + content.id,
      content
    );
    return data;
  },
  update: async (path, id, content) => {
    const { data } = await htppService.put(
      goodsEndpoint + `${path}/${id}/`,
      content
    );
    return data;
  },
  delete: async (path, id) => {
    const { data } = await htppService.delete(goodsEndpoint + `${path}/${id}/`);
    return data;
  },
};

export default goodsService;
