let workerlist = [];

$(document).ready(function () {

    let searchParam = new URLSearchParams(window.location.search);
    let param = searchParam.get('id');
    if (param != null) {
        getWorkertoapi(param);
    }

    $("#submit").click(function () {
        let workername = $("#workername").val();
        let empid = $("#empid").val();
        let fathername = $("#fathername").val();
        let mobileno = $("#mobileno").val();
        let email = $("#email").val();
        let referredby = $("#referredby").val();
        let gender = $("#gender").val();
        let job = $("#job").val();
        let dob = $("#dob").val();
        let city = $("#city").val();
        let state = $("#state").val();
        let residentialaddress = $("#residentialaddress").val();
        let id = $("#newid").val();
        
        $(".error").remove();
        let flag = false;

        if (workername == "") {
            $("#workername").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (empid == "") {
            $("#empid").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (fathername == "") {
            $("#fathername").after('<span class="error small">This field is required</span>');
            flag = false;

        } else {
            flag = true;
        }
        if (mobileno == "") {
            $("#mobileno").after('<span class="error small">This field is required</span>');
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
        if (referredby == "") {
            $("#referredby").after('<span class="error small">This field is required</span>');
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
        if (job == "") {
            $("#job").after('<span class="error small">This field is required</span>');
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
        if (residentialaddress == "") {
            $("#residentialaddress").after('<span class="error small">This field is required</span>');
            flag = false;
        } else {
            flag = true;
        }
        if (flag) {
            let worker = {
                id: id,
                workername: workername,
                empid: empid,
                fathername: fathername,
                mobileno: mobileno,
                email: email,
                referredby: referredby,
                gender: gender,
                job: job,
                dob: dob,
                city: city,
                state: state,
                residentialaddress: residentialaddress,
            };
            if (id != '') {
                updateWorkertoapi(worker);
            }else{
                $.ajax({
                    url: "https://62ff37cc34344b6431f4aeda.mockapi.io/workers",
                    method: "post",
                    dataType: "json",
                    data: worker,
                    success: function (result) {
                        workerlist.push(result);
                        // onloadfromAPI();
                        window.location.href = "workers-list.html"
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
    onloadfromAPI(workerlist);
})
function updateTabletoapi(workerlist) {
    $("#tbody").html('');
    for (let i = 0; i < workerlist.length; i++) {
        let date = workerlist[i].dob;
        let datear = date.split('-');
        let dateset = datear[2] + '-' + datear[1] + '-' + datear[0];

        const row = "<tr><td>" + workerlist[i].empid + "</td><td>" + workerlist[i].workername
            + "</td><td>" + dateset + "</td><td>" + workerlist[i].mobileno + "</td><td>" + workerlist[i].job + "</td><td>" +
            workerlist[i].email + "</td><td> <button class='btn btn-secondary btn-sm' onclick='getEdit(" +
            i + "," + workerlist[i].id + ")' type='button'>Edit</td><td> <button onclick='deleteRow(" +
            i + "," + workerlist[i].id + ")' type='button' class='btn btn-danger btn-sm'>Delete </td></tr>";
        $("#tbody").append(row)
    }
}
function onloadfromAPI() {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/workers",
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
function deleteRow(index, worker_id) {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/workers/" + worker_id,
        method: "delete",
        dataType: "json",
        success: function (result) {
            workerlist.splice(index, 1);
            console.log(workerlist);
            onloadfromAPI();
        },
        error: function (error) {
            console.log(error);
        },
    });
}
function getWorkertoapi(id) {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/workers/" + id,
        method: "get",
        dataType: "json",
        success: function (result) {
            alert(result.id)
            $("#newid").val(result.id);
            $("#workername").val(result.workername);
            $("#fathername").val(result.fathername);
            $("#mobileno").val(result.mobileno);
            $("#referredby").val(result.referredby);
            $("#gender").val(result.gender);
            $("#job").val(result.job);
            $("#dob").val(result.dob);
            $("#city").val(result.city);
            $("#state").val(result.state);
            $("#residentialaddress").val(result.residentialaddress);
            $("#empid").val(result.empid);
            $("#email").val(result.email);
        },
        error: function (error) {
            console.log(error);
        },
    });
}
function getEdit(index, id) {
    window.open("workers-create.html?id=" + id);
}
function updateWorkertoapi(worker) {
    $.ajax({
        url: "https://62ff37cc34344b6431f4aeda.mockapi.io/workers/" + worker.id,
        method: "put",
        data: worker,
        dataType: "json",
        success: function (result) {
            workerlist.push(result);
            onloadfromAPI(workerlist);
            window.location.href = "workers-list.html"
        },
        error: function (error) {
            console.log(error);
        },
    });
}