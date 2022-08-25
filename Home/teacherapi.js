let teacherList = [];

$(document).ready(function () {
    let searchParam = new URLSearchParams(window.location.search);
    let param = searchParam.get('id');
    if (param != null) {
        getTeachertoapi(param);
    }
    $("#submit").click(function () {
        let teachername = $("#teachername").val();
        let gender = $("#gender").val();
        let email = $("#email").val();
        let degree = $("#degree").val();
        let mobile = $("#mobile").val();
        let age = $("#age").val();
        let dob = $("#dob").val();
        let experience = $("#experience").val();
        let joindate = $("#joindate").val();
        let city = $("#city").val();
        let state = $("#state").val();
        let address = $("#Residentialaddress").val();
        let id = $("#newid").val();
        $(".error").remove();
        let flag = false;

        if (teachername == "") {
            $("#teachername").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (gender == "") {
            $("#gender").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (email == "") {
            $("#email").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (degree == "") {
            $("#degree").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (mobile == "") {
            $("#mobile").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (age == "") {
            $("#age").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (dob == "") {
            $("#dob").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (experience == "") {
            $("#experience").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (joindate == "") {
            $("#joindate").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (city == "") {
            $("#city").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (state == "") {
            $("#state").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (address == "") {
            $("#Residentialaddress").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (flag) {
            const teacher = {
                id: id,
                teachername: teachername,
                gender: gender,
                email: email,
                degree: degree,
                mobile: mobile,
                age: age,
                dob: dob,
                experience: experience,
                joindate: joindate,
                city: city,
                state: state,
                address: address,
            };
            if (id != '') {
                updateTeachertoapi(teacher);
            } else {
                $.ajax({
                    url: "https://62ff37cc34344b6431f4aeda.mockapi.io/teacher",
                    method: "post",
                    dataType: "json",
                    data: teacher,
                    success: function (result) {
                        teacherList.push(result);
                        onloadfromAPI();
                        window.location.href = "teacher_list.html"

                    },
                    error: function (error) {
                        console.log(error);
                    },
                });

                console.log(teacher);

            }
            return true;
        } else {
            return false;

        }

    })
    onloadfromAPI(teacherList)
    // onloadfromAPI();
})
function updateTabletoapi(teacherList) {
    $("#tbody").html('');
    for (let i = 0; i < teacherList.length; i++) {
        let date = teacherList[i].dob;
        let datear = date.split('-');
        let dateset = datear[2] + '-' + datear[1] + '-' + datear[0];

        let joindate = teacherList[i].joindate;
        let date1 = joindate.split('-');
        let datestring = date1[2] + '-' + date1[1] + '-' + date1[0];

        const row = "<tr><td>" + teacherList[i].teachername + "</td><td>" + teacherList[i].experience
            + "</td><td>" + dateset + "</td><td>" + datestring + "</td><td>" + teacherList[i].degree +
            "</td><td> <button class='btn btn-secondary btn-sm' onclick='getEdit(" +
            i + "," + teacherList[i].id + ")' type='button'>Edit</td><td> <button onclick='deleteRow(" +
            i + "," + teacherList[i].id + ")' type='button' class='btn btn-danger btn-sm'>Delete </td></tr>";
        $("#tbody").append(row)
    }
}
function onloadfromAPI() {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/teacher",
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
function deleteRow(index, teacher_id) {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/teacher/" + teacher_id,
        method: "delete",
        dataType: "json",
        success: function (result) {
            teacherList.splice(index, 1);
            console.log(teacherList);
            onloadfromAPI();
        },
        error: function (error) {
            console.log(error);
        },
    });
}
function getTeachertoapi(id) {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/teacher/" + id,
        method: "get",
        dataType: "json",
        success: function (result) {
            alert(result.id)
            $("#newid").val(result.id);
            $("#teachername").val(result.teachername);
            $("#gender").val(result.gender);
            $("#email").val(result.email);
            $("#degree").val(result.degree);
            $("#mobile").val(result.mobile);
            $("#age").val(result.age);
            $("#dob").val(result.dob);
            $("#experience").val(result.experience);
            $("#joindate").val(result.joindate);
            $("#city").val(result.city);
            $("#state").val(result.state);
            $("#Residentialaddress").val(result.address);
        },
        error: function (error) {
            console.log(error);
        },
    });
}
function getEdit(index, id) {
    window.open("teacher_create.html?id=" + id);
}
function updateTeachertoapi(teacher) {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/teacher/" + teacher.id,
        method: "put",
        data: teacher,
        dataType: "json",
        success: function (result) {
            teacherList.push(result);
            onloadfromAPI(teacherList);
            window.location.href = "teacher_list.html"
        },
        error: function (error) {
            console.log(error);
        },
    });
}
