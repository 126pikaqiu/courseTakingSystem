function signout() {
    return axios({
        url: myApi.logout,
        type: 'post',
    })
}

function login(data) {
    return axios({
        url: myApi.login,
        type: 'post',
        data: data
    })
}

function changeStatus(data) {
    return axios({
        url: myApi.selectStatus,
        type: 'post',
        data: data
    })
}
