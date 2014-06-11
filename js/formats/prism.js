function genPrism(){
    setViewPointPrism();

    setProjectionPlaneCoordPrism();
    
    var inputNv = document.getElementById("inputNv");
    inputNv.value = 6;
    getNV();
    setVerticesCoordPrism();

    var inputNs = document.getElementById("inputNs");
    inputNs.value = 5;
    getNS();
    setSurfaceVerticesPrism();

    var form = document.getElementById("formInput");
    getForm(form);
}

function setViewPointPrism(){
    if (projection.type === "par"){
        document.getElementById("viewx").value = 0;
        document.getElementById("viewy").value = 0;
        document.getElementById("viewz").value = 1;
    } else {
        document.getElementById("viewx").value = 1;
        document.getElementById("viewy").value = 5;
        document.getElementById("viewz").value = 3;
    }
}

function setSurfaceVerticesPrism(){
    document.getElementById("inputNs0").value = "1-2-6";
    document.getElementById("inputNs1").value = "2-3-5-6";
    document.getElementById("inputNs2").value = "3-4-5";
    document.getElementById("inputNs3").value = "1-6-5-4";
    document.getElementById("inputNs4").value = "1-4-3-2";
}

function setProjectionPlaneCoordPrism(){
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

function setVerticesCoordPrism(){
    document.getElementById("inputNv0").value = 0;
    document.getElementById("inputNv1").value = 0;
    document.getElementById("inputNv2").value = 0;

    document.getElementById("inputNv3").value = 2;
    document.getElementById("inputNv4").value = 0;
    document.getElementById("inputNv5").value = 0;

    document.getElementById("inputNv6").value = 2;
    document.getElementById("inputNv7").value = 3;
    document.getElementById("inputNv8").value = 0;

    document.getElementById("inputNv9").value = 0;
    document.getElementById("inputNv10").value = 3;
    document.getElementById("inputNv11").value = 0;

    document.getElementById("inputNv12").value = 1;
    document.getElementById("inputNv13").value = 2;
    document.getElementById("inputNv14").value = 1;

    document.getElementById("inputNv15").value = 1;
    document.getElementById("inputNv16").value = 1;
    document.getElementById("inputNv17").value = 1;
}
