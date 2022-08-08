import axios from "../axios";



class SignUpService{

postUserCustomer = async (data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post('users', data)    // 20s
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
    });

    return await promise;
}


    fetchCustomer = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }




}
export default new SignUpService();