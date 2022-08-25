let studentlist = [];

$(document).ready(function () {

    let searchParam = new URLSearchParams(window.location.search);
    let param = searchParam.get('id');
    if (param != null) {
        getStudenttoapi(param);
    }

    $("#submit").click(function () {
        let studentname = $("#studentname").val();
        let fathername = $("#fathername").val();
        let mothername = $("#mothername").val();
        let fatheroccupation = $("#occupation").val();
        let nationality = $("#nationality").val();
        let contactno = $("#contactno").val();
        let birthplace = $("#birthplace").val();
        let lastschool = $("#lastschool").val();
        let dob = $("#dob").val();
        let gender = $("#gender").val();
        let religion = $("#religion").val();
        let medium = $("#medium").val();
        let standard = $("#standard").val();
        let admission = $("#admission").val();
        let residentialaddress = $("#residentialaddress").val();
        let levingreason = $("#levingreason").val();
        let guardian = $("#guardian").val();
        let id = $("#newid").val();
        let email = $("#email").val();

        $(".error").remove();
        let flag = false;

        if (studentname == "") {
            $("#studentname").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (fathername == "") {
            $("#fathername").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (mothername == "") {
            $("#mothername").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (fatheroccupation == "") {
            $("#occupation").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (nationality == "") {
            $("#nationality").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (contactno == "") {
            $("#contactno").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (birthplace == "") {
            $("#birthplace").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (lastschool == "") {
            $("#lastschool").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (dob == "") {
            $("#dob").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (gender == "") {
            $("#gender").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (religion == "") {
            $("#religion").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (medium == "") {
            $("#medium").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (standard == "") {
            $("#standard").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (admission == "") {
            $("#admission").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (residentialaddress == "") {
            $("#residentialaddress").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (levingreason == "") {
            $("#levingreason").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (guardian == "") {
            $("#guardian").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (email == "") {
            $("#email").after('<span class="error small">This field is required</span>');
        } else {
            flag = true;
        }
        if (flag) {
            let student = {
                id: id,
                studentname: studentname,
                fathername: fathername,
                mothername: mothername,
                fatheroccupation: fatheroccupation,
                nationality: nationality,
                contactno: contactno,
                birthplace: birthplace,
                lastschool: lastschool,
                dob: dob,
                gender: gender,
                religion: religion,
                medium: medium,
                standard: standard,
                admission: admission,
                residentialaddress: residentialaddress,
                levingreason: levingreason,
                guardian: guardian,
                email: email,
            };
            console.log(student)
            if (id != '') {
                updateStudenttoapi(student);
            } else {
                $.ajax({
                    url: "https://62ff37cc34344b6431f4aeda.mockapi.io/students",
                    method: "post",
                    dataType: "json",
                    data: student,
                    success: function (result) {
                        studentlist.push(result);
                        // onloadfromAPI();
                        window.location.href = "Students-list.html"
                    },
                    error: function (error) {
                        console.log(error);
                    },
                });
            }
        } else {
            return false;
        }
    })
    onloadfromAPI();
})
function updateTabletoapi(studentlist) {
    $("#tbody").html('');
    for (let i = 0; i < studentlist.length; i++) {
        let date = studentlist[i].dob;
        let datear = date.split('-');
        let dateset = datear[2] + '-' + datear[1] + '-' + datear[0];

        const row = "<tr><td>" + studentlist[i].studentname + "</td><td>" + studentlist[i].fathername
            + "</td><td>" + studentlist[i].mothername + "</td><td>" + studentlist[i].fatheroccupation + "</td><td>" + studentlist[i].nationality + "</td><td>" +
            studentlist[i].contactno + "</td><td>" + studentlist[i].birthplace + "</td><td>" + studentlist[i].lastschool + "</td><td>" + 
            studentlist[i].dob + "</td><td>" + studentlist[i].gender + "</td><td>" + studentlist[i].religion + "</td><td>" + 
            studentlist[i].medium + "</td><td>" + studentlist[i].standard + "</td><td>" + studentlist[i].admission + "</td><td>" + 
            studentlist[i].residentialaddress + "</td><td>" + studentlist[i].levingreason + "</td><td>" + studentlist[i].guardian + "</td><td> <button class='btn btn-secondary' onclick='getEdit(" +
            i + "," + studentlist[i].id + ")' type='button'>Edit</td><td> <button onclick='deleteRow(" +
            i + "," + studentlist[i].id + ")' type='button' class='btn btn-danger'>Delete </td></tr>";
        $("#tbody").append(row)
    }
}
function onloadfromAPI() {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/students",
        method: "get",
        dataType: "json",
        success: function (result) {
            updateTabletoapi(result)
        },
        error: function (error) {
            console.log(error);
        },
    });
}
function deleteRow(index, student_id) {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/students/" + student_id,
        method: "delete",
        dataType: "json",
        success: function (result) {
            studentlist.splice(index, 1);
            console.log(studentlist);
            onloadfromAPI();
        },
        error: function (error) {
            console.log(error);
        },
    });
}
function getStudenttoapi(id) {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/students/" + id,
        method: "get",
        dataType: "json",
        success: function (result) {
            alert(result.id)
            $("#newid").val(result.id);
            $("#studentname").val(result.studentname);
            $("#fathername").val(result.fathername);
            $("#mothername").val(result.mothername);
            $("#occupation").val(result.fatheroccupation);
            $("#nationality").val(result.nationality);
            $("#contactno").val(result.contactno);
            $("#birthplace").val(result.birthplace);
            $("#lastschool").val(result.lastschool);
            $("#dob").val(result.dob);
            $("#gender").val(result.gender);
            $("#religion").val(result.religion);
            $("#medium").val(result.medium);
            $("#standard").val(result.standard);
            $("#admission").val(result.admission);
            $("#residentialaddress").val(result.residentialaddress);
            $("#levingreason").val(result.levingreason);
            $("#guardian").val(result.guardian);
            $("#email").val(result.email);
        },
        error: function (error) {
            console.log(error);
        },
    });
}
function getEdit(index, id) {
    window.location.href="Student-create.html?id=" + id;
}
function updateStudenttoapi(student) {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/students/" + student.id,
        method: "put",
        data: student,
        dataType: "json",
        success: function (result) {
            studentlist.push(result);
            onloadfromAPI(studentlist);
            window.location.href = "Students-list.html"
        },
        error: function (error) {
            console.log(error);
        },
    });
}