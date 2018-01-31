import {http} from './config'

const product = {
    getListData(params){
        return http.get('/product/getListData',params)
    },
    add(params){
        return http.post('/pr]moduct/add',params)
    }
}