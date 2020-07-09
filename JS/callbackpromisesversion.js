const students = [{
        name: "harry",
        subject: "JavaScript"
    },
    {
        name: "Rohan",
        subject: "Machine Learning"
    }
]

function enrollStudent(student) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error)
                resolve();
            //callback();
            else {
                reject();
            }
        }, 1000);

    })

}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}



let newStudent = {
    name: "soumik",
    subject: "NodeJs"
}
enrollStudent(newStudent).then(function () {
    getStudents();
}).catch(function (error) {
    console.log("some error is occured " + error);
})