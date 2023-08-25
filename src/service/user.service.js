import htppService from "./htpp.service";
import localStorageService from "./localStorage.service";

const userEndpoint = "user/";

const userService = {
    fetchAll: async() => {
        const { data } = await htppService.get(userEndpoint);
        return data;
    },
    get: async(id) => {
        const { data } = await htppService.get(userEndpoint + id);
        return data;
    },
    create: async(content) => {
        const { data } = await htppService.put(
            userEndpoint + content._id,
            content
        );
        return data;
    },
    update: async(id, content) => {
        const { data } = await htppService.patch(userEndpoint + id, content);
        return data;
    },
    delete: async(id) => {
        const { data } = await htppService.delete(userEndpoint + id);
        return data;
    },
    getCurrentUser: async() => {
        const { data } = await htppService.get(
            userEndpoint + localStorageService.getCurrentUserId()
        );
        return data;
    }
};

export default userService;
