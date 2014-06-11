function genCube(){
    setViewPointCube();

    setProjectionPlaneCoordCube();

    var inputNv = document.getElementById("inputNv");
    inputNv.value = 8;
    getNV();
    setVerticesCoordCube();

    var inputNs = document.getElementById("inputNs");
    inputNs.value = 6;
    getNS();
    setSurfaceVerticesCube();

    var form = document.getElementById("formInput");
    getForm(form);
}

function setViewPointCube(){
    document.getElementById("viewx").value = 0;
    document.getElementById("viewy").value = 0;
    if (projection.type == "par") 
        document.getElementById("viewz").value = 40;
    else
        document.getElementById("viewz").value = -40;
}

function setSurfaceVerticesCube(){
    document.getElementById("inputNs0").value = "6-7-8-5";
    document.getElementById("inputNs1").value = "7-2-3-8";
    document.getElementById("inputNs2").value = "2-1-4-3";
    document.getElementById("inputNs3").value = "6-5-4-1";
    document.getElementById("inputNs4").value = "2-7-6-1";
    document.getElementById("inputNs5").value = "8-3-4-5";
}

function setProjectionPlaneCoordCube(){
    document.getElementById("xp1").value = 40;
    document.getElementById("yp1").value = 0;
    document.getElementById("zp1").value = 0;

    document.getElementById("xp2").value = 0;
    document.getElementById("yp2").value = 0;
    document.getElementById("zp2").value = 0;

    document.getElementById("xp3").value = 0;
    document.getElementById("yp3").value = 40;
    document.getElementById("zp3").value = 0;
}

function setVerticesCoordCube(){
    document.getElementById("inputNv0").value = 0;
    document.getElementById("inputNv1").value = 0;
    document.getElementById("inputNv2").value = 0;

    document.getElementById("inputNv3").value = 40;
    document.getElementById("inputNv4").value = 0;
    document.getElementById("inputNv5").value = 0;

    document.getElementById("inputNv6").value = 40;
    document.getElementById("inputNv7").value = 40;
    document.getElementById("inputNv8").value = 0;

    document.getElementById("inputNv9").value = 0;
    document.getElementById("inputNv10").value = 40;
    document.getElementById("inputNv11").value = 0;

    document.getElementById("inputNv12").value = 0;
    document.getElementById("inputNv13").value = 40;
    document.getElementById("inputNv14").value = 40;

    document.getElementById("inputNv15").value = 0;
    document.getElementById("inputNv16").value = 0;
    document.getElementById("inputNv17").value = 40;

    document.getElementById("inputNv18").value = 40;
    document.getElementById("inputNv19").value = 0;
    document.getElementById("inputNv20").value = 40;

    document.getElementById("inputNv21").value = 40;
    document.getElementById("inputNv22").value = 40;
    document.getElementById("inputNv23").value = 40;
}
