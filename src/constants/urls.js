const baseURLJson = 'https://jsonplaceholder.typicode.com'
const baseURLSpaceX = 'https://api.spacexdata.com/v3'

const posts = '/posts';

const launches = '/launches';


const urls = {
    posts: {
        base: posts,
        postsById: (id) => `${posts}/${id}`
    },
    launches
}

export {
    baseURLJson,
    baseURLSpaceX,
    urls
}