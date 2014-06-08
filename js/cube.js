var DES = 1;

function genCube(){
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

function setSurfaceVertices(){
    document.getElementById("inputNs0").value = "1265";
    document.getElementById("inputNs1").value = "2376";
    document.getElementById("inputNs2").value = "3487";
    document.getElementById("inputNs3").value = "4158";
    document.getElementById("inputNs4").value = "1234";
    document.getElementById("inputNs5").value = "5678";
}

function setProjectionPlaneCoord(){
    document.getElementById("xp1").value = 0;
    document.getElementById("yp1").value = 0;
    document.getElementById("zp1").value = 10*(DES+1);

    document.getElementById("xp2").value = 20*(DES+1);
    document.getElementById("yp2").value = 0;
    document.getElementById("zp2").value = 10*(DES+1);

    document.getElementById("xp3").value = 20*(DES+1);
    document.getElementById("yp3").value = 10*(DES+1);
    document.getElementById("zp3").value = 10*(DES+1);

    //document.getElementById("xp4").value = 0;
    //document.getElementById("yp4").value = 10*(DES+1);
    //document.getElementById("zp4").value = 10*(DES+1);
}

function setVerticesCoordCube(){
    document.getElementById("inputNv0").value = 10*DES;
    document.getElementById("inputNv1").value = 0;
    document.getElementById("inputNv2").value = 0;

    document.getElementById("inputNv3").value = 20*DES;
    document.getElementById("inputNv4").value = 0;
    document.getElementById("inputNv5").value = 0;

    document.getElementById("inputNv6").value = 20*DES;
    document.getElementById("inputNv7").value = 0;
    document.getElementById("inputNv8").value = 10*DES;

    document.getElementById("inputNv9").value = 10*DES;
    document.getElementById("inputNv10").value = 0;
    document.getElementById("inputNv11").value = 10*DES;

    document.getElementById("inputNv12").value = 10*DES;
    document.getElementById("inputNv13").value = 10*DES;
    document.getElementById("inputNv14").value = 0;

    document.getElementById("inputNv15").value = 20*DES;
    document.getElementById("inputNv16").value = 10*DES;
    document.getElementById("inputNv17").value = 0;

    document.getElementById("inputNv18").value = 20*DES;
    document.getElementById("inputNv19").value = 10*DES;
    document.getElementById("inputNv20").value = 10*DES;

    document.getElementById("inputNv21").value = 10*DES;
    document.getElementById("inputNv22").value = 10*DES;
    document.getElementById("inputNv23").value = 10*DES;
}
