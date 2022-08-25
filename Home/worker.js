$(document).ready(function () {
    let workerlist = [];

    workerlist = window.localStorage.getItem("worker")
        ? JSON.parse(window.localStorage.getItem("worker"))
        : [];
    for (let i = 0; i < workerlist.length; i++) {

        let date = workerlist[i].dob;
        let datear = date.split('-');
        let dateset = datear[2] + '-' + datear[1] + '-' + datear[0];

        // let joindate = workerlist[i].joindate;
        // let date1 = joindate.split('-');
        // let datestring = date1[2] + '-' + date1[1] + '-' + date1[0];

        const row = "<tr><td>" + workerlist[i].empid + "</td><td>" + workerlist[i].workername + "</td><td>" + dateset + "</td><td>" + workerlist[i].mobileno + "</td><td>" + workerlist[i].job + "</td></tr>";
        $("#tbody").append(row)

    }

    $("#submit").click(function () {
        let workername = $("#workername").val();
        let empid = $("#empid").val();
        let fathername = $("#fname").val();
        let mobileno = $("#mobileno").val();
        let email = $("#email").val();
        let referredby = $("#referredby").val();
        let gender = $("#gender").val();
        let job = $("#job").val();
        let dob = $("#dob").val();
        let city = $("#city").val();
        let state = $("#state").val();
        let residentialaddress = $("#residentialaddress").val();
        alert(workername)
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
            const worker = {
                empid: empid,
                workername: workername,
                dob: dob,
                mobileno: mobileno,
                job: job,
            };
            workerlist.push(worker);
            console.log(worker);
            window.localStorage.setItem("worker", JSON.stringify(workerlist));
            window.location.href = "workers-list.html";
            return true;
        } else {
            return false;

        }

    })
})