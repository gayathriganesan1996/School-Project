
$(document).ready(function(){
    let teacherList=[];

     teacherList = window.localStorage.getItem("teachers")
? JSON.parse(window.localStorage.getItem("teachers"))
:[];
for (let i = 0; i < teacherList.length; i++) {
    let date = teacherList[i].dob;
    let datear = date.split('-');
    let dateset =datear[2] + '-' + datear[1] + '-' + datear[0];

    let joindate = teacherList[i].joindate;
    let date1 = joindate.split('-');
    let datestring =date1[2] + '-' + date1[1] + '-' + date1[0];
    const row = "<tr><td>" + teacherList[i].teachername + "</td><td>" + teacherList[i].experience + "</td><td>" + dateset + "</td><td>" + datestring + "</td><td>" + teacherList[i].degree + "</td></tr>"; 
    $("#tbody").append(row)

}

    $("#submit").click(function(){
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

        $(".error").remove();
        let flag = false;

        if(teachername==""){
            $("#teachername").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(gender==""){
            $("#gender").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(email==""){
            $("#email").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(degree==""){
            $("#degree").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(mobile==""){
            $("#mobile").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(age==""){
            $("#age").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(dob==""){
            $("#dob").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(experience==""){
            $("#experience").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(joindate==""){
            $("#joindate").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(city==""){
            $("#city").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(state==""){
            $("#state").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(address==""){
            $("#Residentialaddress").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(flag){
            const teachers = {
                teachername: teachername,
                experience: experience,
                dob: dob,
                joindate: joindate,
                degree: degree,
             };
             teacherList.push(teachers);
            console.log(teachers);
            window.localStorage.setItem("teachers", JSON.stringify(teacherList));   
            window.location.href = "teacher_list.html";
            return true;
        }else{
            return false;
    
        }
     
    })
})