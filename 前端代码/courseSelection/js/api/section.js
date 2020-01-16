function checkSections(data) {
    return axios({
        url: myApi.checkSections,
        type: 'get',
        data: data
    })
}

function deleteSection(data) {
    return axios({
        url: myApi.deleteSection,
        type: 'get',
        data: data
    })
}

function updateSection(data) {
    return axios({
        url: myApi.updateSection,
        type: 'post',
        data: data,
    })
}

function insertSection(data) {
    return axios({
        url: myApi.insertSection,
        type: 'get',
        data: data
    })
}

function registerSection(data) {
    return axios({
        url: myApi.registerSection,
        type: 'post',
        data: data,
        processData:false,
        contentType:false
    })
}