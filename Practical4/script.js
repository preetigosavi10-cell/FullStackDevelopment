let highestpercentage=0;
let topperName="";

function addStudent()
{

    let name=document.getElementById("name").value;
    let rollno=document.getElementById("rollno").value;
    let s1=document.getElementById("sub1").value;
    let s2=document.getElementById("sub2").value;
    let s3=document.getElementById("sub3").value;

    if(name=="" || rollno=="" || s1=="" ||s2=="" ||s3=="" )
    {
        alert("all fields are required");
        return;
    }

    let sub1=Number (s1);
    let sub2=Number (s2);
    let sub3=Number (s3);

    if(sub1<0 || sub1>100 || sub2<0 || sub2>100 || sub3<0 || sub3>100)
    {
        alert("enter numbers less than 100");
        return;
    }

    let total=sub1+sub2+sub3;
    let percentage=total/300*100;

    let table=document.getElementById("studentrecord");
    let row=table.insertRow();
    row.insertCell(0).innerHTML=name;
    row.insertCell(1).innerHTML=rollno;
    row.insertCell(2).innerHTML=sub1;
    row.insertCell(3).innerHTML=sub2;
    row.insertCell(4).innerHTML=sub3;
    row.insertCell(5).innerHTML=total;
    row.insertCell(6).innerHTML=percentage.toFixed(2) + "%";

    if(percentage>highestpercentage)
    {
        highestpercentage=percentage;
        topperName=name;
    }

    document.getElementById("topper").innerHTML="topper:"+topperName+ "("+highestpercentage.toFixed(2)+"%)";

    document.getElementById("name").value="";
    document.getElementById("rollno").value="";
    document.getElementById("sub1").value="";
    document.getElementById("sub2").value="";
    document.getElementById("sub3").value="";









}