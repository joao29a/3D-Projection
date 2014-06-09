function genCube(){
    setViewPoint();

    setProjectionPlaneCoord();
    
    var inputNv = document.getElementById("inputNv");
    inputNv.value = 8;
    getNV();
    setVerticesCoordCube();

    var inputNs = document.getElementById("inputNs");
    inputNs.value = 6;
    getNS();
    setSurfaceVertices();

    var form = document.getElementById("formInput");
    getForm(form);
}

function setViewPoint(){
    document.getElementById("viewx").value = 0;
    document.getElementById("viewy").value = 0;
    var value = 1;
    if (projection.type === "per") value = -1;
    document.getElementById("viewz").value = value;
}

function setSurfaceVertices(){
    document.getElementById("inputNs0").value = "6785";
    document.getElementById("inputNs1").value = "7238";
    document.getElementById("inputNs2").value = "2143";
    document.getElementById("inputNs3").value = "6145";
    document.getElementById("inputNs4").value = "2761";
    document.getElementById("inputNs5").value = "8345";
}

function setProjectionPlaneCoord(){
    document.getElementById("xp1").value = 1;
    document.getElementById("yp1").value = 0;
    document.getElementById("zp1").value = 0;

    document.getElementById("xp2").value = 0;
    document.getElementById("yp2").value = 0;
    document.getElementById("zp2").value = 0;

    document.getElementById("xp3").value = 0;
    document.getElementById("yp3").value = 1;
    document.getElementById("zp3").value = 0;

    //document.getElementById("xp4").value = 0;
    //document.getElementById("yp4").value = 10*(DES+1);
    //document.getElementById("zp4").value = 10*(DES+1);
}

function setVerticesCoordCube(){
    document.getElementById("inputNv0").value = 0;
    document.getElementById("inputNv1").value = 0;
    document.getElementById("inputNv2").value = 0;

    document.getElementById("inputNv3").value = 1;
    document.getElementById("inputNv4").value = 0;
    document.getElementById("inputNv5").value = 0;

    document.getElementById("inputNv6").value = 1;
    document.getElementById("inputNv7").value = 1;
    document.getElementById("inputNv8").value = 0;

    document.getElementById("inputNv9").value = 0;
    document.getElementById("inputNv10").value = 1;
    document.getElementById("inputNv11").value = 0;

    document.getElementById("inputNv12").value = 0;
    document.getElementById("inputNv13").value = 1;
    document.getElementById("inputNv14").value = 1;

    document.getElementById("inputNv15").value = 0;
    document.getElementById("inputNv16").value = 0;
    document.getElementById("inputNv17").value = 1;

    document.getElementById("inputNv18").value = 1;
    document.getElementById("inputNv19").value = 0;
    document.getElementById("inputNv20").value = 1;

    document.getElementById("inputNv21").value = 1;
    document.getElementById("inputNv22").value = 1;
    document.getElementById("inputNv23").value = 1;
}
