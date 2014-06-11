function genHouse(){
    setViewPointHouse();

    setProjectionPlaneCoordHouse();
    
    var inputNv = document.getElementById("inputNv");
    inputNv.value = 10;
    getNV();
    setVerticesCoordHouse();

    var inputNs = document.getElementById("inputNs");
    inputNs.value = 7;
    getNS();
    setSurfaceVerticesHouse();

    var form = document.getElementById("formInput");
    getForm(form);
}

function setViewPointHouse(){
    document.getElementById("viewx").value = 0;
    document.getElementById("viewy").value = 0;
    document.getElementById("viewz").value = -10;
}

function setSurfaceVerticesHouse(){
    document.getElementById("inputNs0").value = "4-3-5-9-6";
    document.getElementById("inputNs1").value = "3-2-7-5";
    document.getElementById("inputNs2").value = "8-10-7-2-1";
    document.getElementById("inputNs3").value = "6-8-1-4-6";
    document.getElementById("inputNs4").value = "4-1-2-3";
    document.getElementById("inputNs5").value = "9-10-8-6";
    document.getElementById("inputNs6").value = "5-7-10-9-5";
}

function setProjectionPlaneCoordHouse(){
    document.getElementById("xp1").value = 1;
    document.getElementById("yp1").value = 0;
    document.getElementById("zp1").value = 0;

    document.getElementById("xp2").value = 0;
    document.getElementById("yp2").value = 0;
    document.getElementById("zp2").value = 0;

    document.getElementById("xp3").value = 0;
    document.getElementById("yp3").value = 1;
    document.getElementById("zp3").value = 0;
}

function setVerticesCoordHouse(){
    document.getElementById("inputNv0").value = 0;
    document.getElementById("inputNv1").value = 0;
    document.getElementById("inputNv2").value = 0;

    document.getElementById("inputNv3").value = 10;
    document.getElementById("inputNv4").value = 0;
    document.getElementById("inputNv5").value = 0;

    document.getElementById("inputNv6").value = 10;
    document.getElementById("inputNv7").value = 0;
    document.getElementById("inputNv8").value = 15;

    document.getElementById("inputNv9").value = 0;
    document.getElementById("inputNv10").value = 0;
    document.getElementById("inputNv11").value = 15;

    document.getElementById("inputNv12").value = 10;
    document.getElementById("inputNv13").value = 8;
    document.getElementById("inputNv14").value = 15;

    document.getElementById("inputNv15").value = 0;
    document.getElementById("inputNv16").value = 8;
    document.getElementById("inputNv17").value = 15;

    document.getElementById("inputNv18").value = 10;
    document.getElementById("inputNv19").value = 8;
    document.getElementById("inputNv20").value = 0;

    document.getElementById("inputNv21").value = 0;
    document.getElementById("inputNv22").value = 8;
    document.getElementById("inputNv23").value = 0;

    document.getElementById("inputNv24").value = 5;
    document.getElementById("inputNv25").value = 13;
    document.getElementById("inputNv26").value = 15;

    document.getElementById("inputNv27").value = 5;
    document.getElementById("inputNv28").value = 13;
    document.getElementById("inputNv29").value = 0;
}
