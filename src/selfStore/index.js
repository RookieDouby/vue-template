import Vue from 'vue'

export const store = Vue.observale({
    userInfo: {},
    roleIds: [],
})

export const mutations = {
    setUserInfo(userInfo) {
        store.userInfo = userInfo
    },
    setRoleIds(roleIds) {
        store.roleIds = roleIds
    }
}
