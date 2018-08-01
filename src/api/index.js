
import axios from "../utils/axios" ;
import root from '../utils/config'

let API = {

    //测试
    test: params => (
        axios({
            method: 'POST',
            url: '/api/users' ,
            data: params
        })
    ),


    //获取md5
    postMD5: () => (
        axios({
            method: 'POST',
            url: root + '/sys/login/get',
        })
    )

};

export default API;
