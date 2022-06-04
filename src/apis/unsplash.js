import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UdM9ww75n7GMZ2FfdjCc_gHwAPqtFdpNzeyr4dSxGS8'
    }
})
