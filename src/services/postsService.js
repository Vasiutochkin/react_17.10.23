import {jsonServices} from "./jsonServices";
import {urls} from "../constants/urls";

const postsService = {
    getAll: () => jsonServices.get(urls.posts.base),
    getById: (id) => jsonServices.get(urls.posts.postsById(id))
}

export {
    postsService
}