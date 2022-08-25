$(document).ready(function(){
    let studentlist=[];

    studentlist = window.localStorage.getItem("student")
? JSON.parse(window.localStorage.getItem("student"))
:[];
for (let i = 0; i < studentlist.length; i++) {
    let date = studentlist[i].dob;
    let datear = date.split('-');
    let dateset =datear[2] + '-' + datear[1] + '-' + datear[0];
    const row = "<tr><td>" + studentlist[i].studentname + "</td><td>" + studentlist[i].fathername + "</td><td>" + studentlist[i].mothername + "</td><td>" + dateset + "</td><td>" + studentlist[i].contactno + "</td></tr>"; 
    $("#tbody").append(row)
}
    $("#submit").click(function(){
        
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

        $(".error").remove();
        let flag = false;

        if(studentname==""){
            $("#studentname").after('<span class="error small">This field is required</span>');
            flag = false;
        
        } else{
            flag = true;
        }
        if(fathername==""){
            $("#fathername").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(mothername==""){
            $("#mothername").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(fatheroccupation==""){
            $("#occupation").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(nationality==""){
            $("#nationality").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(contactno==""){
            $("#contactno").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(birthplace==""){
            $("#birthplace").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(lastschool==""){
            $("#lastschool").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(dob==""){
            $("#dob").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(gender==""){
            $("#gender").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(religion==""){
            $("#religion").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(medium==""){
            $("#medium").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(standard==""){
            $("#standard").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(admission==""){
            $("#admission").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(residentialaddress==""){
            $("#residentialaddress").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(levingreason==""){
            $("#levingreason").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(guardian==""){
            $("#guardian").after('<span class="error small">This field is required</span>');
        }else{
            flag = true; 
        }
        if(flag){
            const student = {
                studentname: studentname,
                fathername: fathername,
                mothername: mothername,
                dob: dob,
                contactno: contactno,
             };
             studentlist.push(student);
            console.log(student);
            window.localStorage.setItem("student", JSON.stringify(studentlist));   
            window.location.href = "Students-list.html";
            return true;
        }else{
            return false;
    
        }
    })
})