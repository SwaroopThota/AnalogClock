setInterval(()=>{
    var d=new Date();
    var hR=d.getHours()*30 + d.getMinutes()/2;
    var mR=d.getMinutes()*6;
    var sR=d.getSeconds()*6;
    hours.style.transform=`rotate(${hR}deg)`;
    minutes.style.transform=`rotate(${mR}deg)`;
    seconds.style.transform=`rotate(${sR}deg)`;
    days=[" SUN"," MON"," TUE"," WED"," THU"," FRI"," SAT"];
    document.getElementById("date").innerHTML=d.getDate()+days[d.getDay()];
},1000);