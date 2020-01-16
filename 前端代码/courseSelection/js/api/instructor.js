function checkInstructors(data) {
    return axios({
        url: myApi.checkInstructors,
        type: 'get',
        data: data
    })
}

function deleteInstructor(data) {
    return axios({
        url: myApi.deleteInstructor,
        type: 'get',
        data: data
    })
}

function updateInstructor(data) {
    return axios({
        url: myApi.updateInstructor,
        type: 'post',
        data: data,
    })
}

function insertInstructor(data) {
    return axios({
        url: myApi.insertInstructor,
        type: 'get',
        data: data
    })
}

function registerInstructor(data) {
    return axios({
        url: myApi.registerInstructor,
        type: 'post',
        data: data,
        processData:false,
        contentType:false
    })
}