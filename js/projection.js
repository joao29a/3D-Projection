function Projection(){
    this.view_point = {x: 0, y: 0, z: 0};
    this.nv = 0;
    this.vertices_coord = [];
    this.plane = {p1: {x: 0, y: 0, z:0},
                  p2: {x: 0, y: 0, z:0},
                  p3: {x: 0, y: 0, z:0},
                  p4: {x: 0, y: 0, z:0}}

    this.ns = 0;
    this.surfaces = [];

    this.setNv = function(nv){
        this.nv = nv;
    }

    this.getNv = function(){
        return this.nv;
    }

    this.setNs = function(ns){
        this.ns = ns;
    }

    this.getNs = function(){
        return this.ns;
    }

    this.setNewVertice = function(x, y, z){
        this.vertices_coord.push({"x": x, "y": y, "z": z})
    }

    this.initProjection = function(){
        var r0 = this.plane.p1;
        var n = this.getNormal();
        var d0 = r0.x * n[0] + r0.y * n[1] + r0.z * n[2];

        var a = this.view_point.x;
        var b = this.view_point.y;
        var c = this.view_point.z;
        var d1 = a * n[0] + b * n[1] + c * n[2];
        var d = d0 - d1;
        var mpp = [[ d + a * n[0],     a * n[1],     a * n[2], -a * d0],
                   [     b * n[0], d + b * n[1],     b * n[2], -b * d0],
                   [     c * n[0],     c * n[1], d + c * n[2], -c * d0],
                   [         n[0],         n[1],         n[2],     -d1]];

        var mvt = this.getVerticesMatrix();
        var new_matrix = this.matrixMultiplication(mpp, mvt);
        var points = this.convertToCartesian(new_matrix);
        this.plotPoints(points);
    }

    this.plotPoints = function(points){
        for (var i = 0; i < this.ns; i++){
            for (var j = 0; j < this.surfaces[i].length - 1; j++){
                var vt1 = parseInt(this.surfaces[i][j].vt);
                var vt2 = parseInt(this.surfaces[i][j+1].vt);
                if (j == 0){
                    var vt_f = parseInt(this.surfaces[i][this.surfaces[i].length -1].vt);
                    this.draw_line(points[vt1-1], points[vt_f-1]);
                }
                this.draw_line(points[vt1-1], points[vt2-1]);
            }
        }
    }

    this.matrixMultiplication = function(mpp, mvt){
        var new_matrix = [[], [], [], []];
        for (var i = 0; i < 4; i++){
            for (var j = 0; j < this.nv; j++){
                var new_value = 0;
                for (var k = 0; k < 4; k++){
                    new_value += mpp[i][k]*mvt[k][j];
                }
                new_matrix[i].push(new_value);
            }
        }
        return new_matrix;
    }

    this.getVerticesMatrix = function(){
        var matrix_vt = [[], [], [], []];
        for (var i = 0; i < this.nv; i++){
            var x = this.vertices_coord[i].x;
            var y = this.vertices_coord[i].y;
            var z = this.vertices_coord[i].z;
            matrix_vt[0].push(x);
            matrix_vt[1].push(y);
            matrix_vt[2].push(z);
            matrix_vt[3].push(1);
        }
        return matrix_vt;
    }

    this.getNormal = function(){
        var u = [this.plane.p2.x - this.plane.p1.x,
                 this.plane.p2.y - this.plane.p1.y,
                 this.plane.p2.z - this.plane.p1.z];


        var v = [this.plane.p3.x - this.plane.p1.x,
                 this.plane.p3.y - this.plane.p1.y,
                 this.plane.p3.z - this.plane.p1.z];


        //u x v
        var s1 = u[1]*v[2] - u[2]*v[1];
        var s2 = u[2]*v[0] - u[0]*v[2];
        var s3 = u[0]*v[1] - u[1]*v[0];

        return [s1, s2, s3];
    }

    this.convertToCartesian = function(matrix){
        var points = [];
        for (var i = 0; i < this.nv; i++){
            var x = matrix[0][i] / matrix[3][i];
            var y = matrix[1][i] / matrix[3][i];
            var z = matrix[2][i] / matrix[3][i];
            x = x /// z;
            y = y /// z;
            points.push({"x": x, "y": y});
        }
        return points;
    }
    
    this.draw_line = function(p1, p2){
        alert("oi");
        var panel = document.getElementById("draw");
        var ctx = panel.getContext("2d");
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    }
}

projection = new Projection();
