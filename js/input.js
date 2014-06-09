function getRadio(value){
    projection.type = value;
}

function getEvent(e, type){
    if (e.keyCode == 13){
        if (type == "nv")
            getNV();
        else if (type == "ns")
            getNS();
    }
}

function getNV(){
    var nv = document.getElementById("inputNv");
    var n_vertices = parseInt(nv.value);
    if (projection.getNv() > 0){
        removeInput(projection.getNv(), "inputVertices", "V");
    }
    projection.setNv(n_vertices);
    appendInput(n_vertices, 3, "inputVertices", "inputNv", 
            "nvobject", "V", "boxSize", "number", "0");
}

function getNS(){
    var ns = document.getElementById("inputNs");
    var n_surfaces = parseInt(ns.value);
    if (projection.getNs() > 0){
        removeInput(projection.getNs(), "inputSurfaces", "S");
    }
    projection.setNs(n_surfaces);
    appendInput(n_surfaces, 1, "inputSurfaces", "inputNs", 
            "nsobject", "S", "boxSizeVL", "text", "");
}

function createDiv(text, id){
    var div = document.createElement("div");
    div.innerHTML = text
        div.id = id;
    return div;
}

function appendInput(n, n_input, id_parent, id_input, name_input, 
        type, box_type, type_input, value){

            var elem = document.getElementById(id_parent);
            for (var i = 0; i < n; i++){
                var text = type + (i + 1) + ":";
                var id = type + i;
                var div = createDiv(text, id);
                for (var j = 0; j < n_input; j++){
                    var id = i*n_input + j;
                    var input = createInput(id_input + id, name_input + id, 
                            box_type, type_input, value);
                    div.appendChild(input);
                }
                elem.appendChild(div);
            }
        }

function createInput(id, name, className, type, value){
    var input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.value = value;
    input.className = className;
    input.name = name;
    return input;
}

function removeInput(nv, id_parent, type){
    var elem = document.getElementById(id_parent);
    for (var i = 0; i < nv; i++){
        var child = document.getElementById(type + i);
        elem.removeChild(child);
    }
}

function getFormSurfaceVertices(form){
    projection.surfaces = [];
    var n_surfaces = projection.getNs();
    for (var i = 0; i < n_surfaces; i++){
        var s = form.elements["nsobject" + i].value;
        var surface = [];
        for (var j = 0; j < s.length; j++){
            var vt = parseInt(s[j]);
            surface.push({vt: [vt, projection.vertices_coord[vt - 1]]});
        }
        projection.surfaces.push(surface);
    }
}

function getFormView(form){
    projection.view_point.x = parseInt(form.xview.value);
    projection.view_point.y = parseInt(form.yview.value);
    projection.view_point.z = parseInt(form.zview.value);
}

function getFormProjection(form){
    projection.plane.p1.x = parseInt(form.xplane1.value);
    projection.plane.p1.y = parseInt(form.yplane1.value);
    projection.plane.p1.z = parseInt(form.zplane1.value);

    projection.plane.p2.x = parseInt(form.xplane2.value);
    projection.plane.p2.y = parseInt(form.yplane2.value);
    projection.plane.p2.z = parseInt(form.zplane2.value);

    projection.plane.p3.x = parseInt(form.xplane3.value);
    projection.plane.p3.y = parseInt(form.yplane3.value);
    projection.plane.p3.z = parseInt(form.zplane3.value);

    //projection.plane.p4.x = parseInt(form.xplane4.value);
    //projection.plane.p4.y = parseInt(form.yplane4.value);
    //projection.plane.p4.z = parseInt(form.zplane4.value);
}


function getFormVertices(form){
    projection.vertices_coord = [];
    var n_vertices = projection.getNv();
    var x,y,z,counter = 0;
    for (var i = 0; i < n_vertices*3; i++){
        if (i % 3 == 0){
            x = form.elements["nvobject" + i].value;
        } else if (i % 3 == 1){
            y = form.elements["nvobject" + i].value;
        } else if (i % 3 == 2){
            z = form.elements["nvobject" + i].value;
        }
        counter++;
        if (counter == 3){
            counter = 0;
            projection.setNewVertice(parseInt(x), parseInt(y), parseInt(z));
        }
    }
}

function getForm(form){
    getFormView(form);
    getFormProjection(form);
    getFormVertices(form);
    getFormSurfaceVertices(form);
    projection.initProjection();
}
