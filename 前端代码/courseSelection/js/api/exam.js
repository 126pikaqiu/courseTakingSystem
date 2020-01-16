function checkExams(data) {
    return axios({
        url: myApi.checkExams,
        type: 'get',
        data: data
    })
}

function deleteExam(data) {
    return axios({
        url: myApi.deleteExam,
        type: 'get',
        data: data
    })
}

function updateExam(data) {
    return axios({
        url: myApi.updateExam,
        type: 'post',
        data: data,
    })
}

function insertExam(data) {
    return axios({
        url: myApi.insertExam,
        type: 'get',
        data: data
    })
}

function registerExam(data) {
    return axios({
        url: myApi.registerExam,
        type: 'post',
        data: data,
        processData:false,
        contentType:false
    })
}