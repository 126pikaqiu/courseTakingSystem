function checkAccounts(data) {
    return axios({
        url: myApi.checkAccounts,
        type: 'get',
        data: data
    })
}

function deleteAccount(data) {
    return axios({
        url: myApi.deleteAccount,
        type: 'get',
        data: data
    })
}

function updateAccount(data) {
    return axios({
        url: myApi.updateAccount,
        type: 'post',
        data: data,
    })
}

function insertAccount(data) {
    return axios({
        url: myApi.insertAccount,
        type: 'get',
        data: data
    })
}

function registerAccount(data) {
    return axios({
        url: myApi.registerAccount,
        type: 'post',
        data: data,
        processData:false,
        contentType:false
    })
}