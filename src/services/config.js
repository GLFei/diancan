import qs from  'qs'
import axios from 'axios'

const baseUrl="http://10.9.171.96:3000/api"
const imgServiceUrl="http://10.9.171.96:3000"
const imgUploadUrl = "http://10.9.171.96:3000/upload"

const http = {
    get(url,params){
        return axios.get(baseUrl+url+"?"+qs.stringify(params)).catch(err=>console.log(err))
    },
    post(url,params){
        return axios.post(baseUrl+url,qs.stringify(params)).catch(err=>console.log(err))
    }
}

export {http,baseUrl,imgServiceUrl,imgUploadUrl}