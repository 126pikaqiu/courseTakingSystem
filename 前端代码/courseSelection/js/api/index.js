var myApi = {
    logout: 'selectCourse/logout/',
    login: 'selectCourse/login/',

    selectStatus: 'selectCourse/updateCourseStatus/',

    //about course
    search: 'selectCourse/search/',
    select: 'selectCourse/select/',
    drop: 'selectCourse/drop/',
    applyCourse: 'selectCourse/submitApplication/',
    handleApplication: 'selectCourse/handleApplication/',
    studentCourseTb: 'selectCourse/checkCourseTable/',
    myApplyCourse: 'selectCourse/checkApplications/',
    myTaughtCourses: 'selectCourse/checkTaughtCourses/',
    courseNameList: 'selectCourse/checkCourseNameList/',
    coursesGrade: 'selectCourse/checkPersonalInfo/',

    checkCourse: 'selectCourse/checkCourses/',
    deleteCourse: 'selectCourse/deleteCourse/',
    insertCourse: 'selectCourse/insertCourse/',
    updateCourse: 'selectCourse/updateCourse/',

    checkInstructors: 'selectCourse/checkInstructors/',
    deleteInstructor: 'selectCourse/deleteInstructor/',
    insertInstructor: 'selectCourse/insertInstructor/',
    updateInstructor: 'selectCourse/updateInstructor/',

    checkStudents: 'selectCourse/checkStudents/',
    deleteStudent: 'selectCourse/deleteStudent/',
    insertStudent: 'selectCourse/insertStudent/',
    updateStudent: 'selectCourse/updateStudent/',

    checkSections: 'selectCourse/checkSections/',
    deleteSection: 'selectCourse/deleteSection/',
    insertSection: 'selectCourse/insertSection/',
    updateSection: 'selectCourse/updateSection/',

    checkExams: 'selectCourse/checkExams/',
    deleteExam: 'selectCourse/deleteExam/',
    insertExam: 'selectCourse/insertExam/',
    updateExam: 'selectCourse/updateExam/',

    checkAccounts: 'selectCourse/checkAccounts/',
    deleteAccount: 'selectCourse/deleteAccount/',
    insertAccount: 'selectCourse/insertAccount/',
    updateAccount: 'selectCourse/updateAccount/',

    registerCourse: 'selectCourse/registerCourse/',
    registerScore: 'selectCourse/registerScore/',
    registerInstructor: 'selectCourse/registerInstructor/',
    registerStudent: 'selectCourse/registerStudent/',
    registerSection: 'selectCourse/registerSection/',
    registerExam: 'selectCourse/registerExam/',
    registerAccount: 'selectCourse/registerAccount/',


};

function axios(option){
    let dtd = $.Deferred();
    $.ajax({
        ...option,
        success: function (res) {
            dtd.resolve(res);
        },
        error: function (error) {
            dtd.reject(error);
        }
    });
    return dtd.promise()
}
