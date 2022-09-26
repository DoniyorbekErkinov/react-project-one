import axios from 'axios'

const url = 'http://localhost:3000'
const main = 'videos'

const userService = {
    getList() {
        return axios.get(`${url}/${main}`)
    },
    create(data) {
        return axios.post(`${url}/${main}`, data)
    },
    update(id, data) {
        return axios.put(`${url}/${main}/${id}`, data)
    },
    delete(id) {
        return axios.delete(`${url}/${main}/${id}`)
    },
    getById(id) {
        return axios.get(`${url}/${main}/${id}`)
    }
}
export default userService;
