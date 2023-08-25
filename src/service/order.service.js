import htppService from "./htpp.service";

const userEndpoint = "order/";

const orderService = {
    create: async (content, info) => {
        const { data } = await htppService.post(userEndpoint, content);
        return data;
    },
    getById: async (id) => {
        const { data } = await htppService.get(userEndpoint + id);
        return data;
    }
};

export default orderService;
