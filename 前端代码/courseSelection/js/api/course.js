function searchCourse(data) {
    return axios({
        url: myApi.search,
        type: 'get',
        data:data
    })
}

function getMyCourses(data) {
    return axios({
        url: myApi.studentCourseTb,
        type: 'get',
        data: data
    })
}
function selectCourse(data) {
    return axios({
        url: myApi.select,
        type: 'post',
        data: data
    })
}

function applyCourse(data) {
    return axios({
        url: myApi.applyCourse,
        type: 'post',
        data: data
    })
}

function getMyApplyCourse(data) {
    return axios({
        url: myApi.myApplyCourse,
        type: 'get',
        data: data
    })
}
function handleApplication(data) {
    return axios({
        url: myApi.handleApplication,
        type: 'post',
        data: data
    })
}
function getMyCoursesGrade(data) {
    return axios({
        url: myApi.coursesGrade,
        type: 'get',
        data: data
    })
}
function dropCourse(data) {
    return axios({
        url: myApi.drop,
        type: 'post',
        data: data
    })
}
function getMyTaughtCourses(data) {
    return axios({
        url: myApi.myTaughtCourses,
        type: 'get',
        data: data
    })
}
function getCoursesNameList(data) {
    return axios({
        url: myApi.courseNameList,
        type: 'get',
        data: data
    })
}
function checkCourses(data) {
    return axios({
        url: myApi.checkCourse,
        type: 'get',
        data: data
    })
}
function updateCourse(data) {
    return axios({
        url: myApi.updateCourse,
        type: 'post',
        data: data,
    })
}
function registerCourse(data) {
    return axios({
        url: myApi.registerCourse,
        type: 'post',
        data: data,
        processData:false,
        contentType:false
    })
}
function registerScore(data) {
    return axios({
        url: myApi.registerScore,
        type: 'post',
        data: data,
        processData:false,
        contentType:false
    })
}
function deleteCourse(data) {
    return axios({
        url: myApi.deleteCourse,
        type: 'get',
        data: data
    })
}
function insertCourse(data) {
    return axios({
        url: myApi.insertCourse,
        type: 'get',
        data: data
    })
}
