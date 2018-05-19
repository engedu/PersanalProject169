var myIndex = 0;/*ประกาศตัวแปร*/
carousel();/*ปลักอินการแสดงผล*/

function carousel() {
    var i;/*ประกาศตัวแปร*/
    var x = document.getElementsByClassName("slide");/*ให้ดึงข้อมูลชื่อclass slide*/
    for (i = 0; i < x.length; i++) {/*.ให้แสดงข้อมูลแบบลูป*/
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 8000);    /*ระยะเวลาการแสดงผลต่อ 1ภาพ //8วินาที*/
}