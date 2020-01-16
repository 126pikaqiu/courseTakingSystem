function checkStudents(data) {
    return axios({
        url: myApi.checkStudents,
        type: 'get',
        data: data
    })
}

function deleteStudent(data) {
    return axios({
        url: myApi.deleteStudent,
        type: 'get',
        data: data
    })
}

function updateStudent(data) {
    return axios({
        url: myApi.updateStudent,
        type: 'post',
        data: data,
    })
}

function insertStudent(data) {
    return axios({
        url: myApi.insertStudent,
        type: 'get',
        data: data
    })
}

function registerStudent(data) {
    return axios({
        url: myApi.registerStudent,
        type: 'post',
        data: data,
        processData:false,
        contentType:false
    })
}