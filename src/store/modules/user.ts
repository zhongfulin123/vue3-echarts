// 通过限定传入的参数类型
interface data {
    count: number,
    age: Number
}
const state = (): data => {
    // 必须要有返回
    return {
        count: 25,
        age: 25
    }
}
const mutations = {
}


const actions = {
}

const getters = {
}
export default {
    namespace: true,
    state,
    mutations,
    actions,
    getters
}
