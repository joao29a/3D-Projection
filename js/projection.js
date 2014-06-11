function Projection(){
    this.viewport = {umin: 50, vmin: 50, umax: 550, vmax: 450};
    this.view_point = {x: 0, y: 0, z: 0};
    this.nv = 0;
    this.vertices_coord = [];
    this.plane = {p1: {x: 0, y: 0, z:0},
                  p2: {x: 0, y: 0, z:0},
                  p3: {x: 0, y: 0, z:0}}

    this.type = "per";

    this.hide = false;

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
        var r0 = this.plane.p2;
        var n = this.getNormal(this.plane.p1, this.plane.p2, this.plane.p3);
        var d0 = r0.x * n[0] + r0.y * n[1] + r0.z * n[2];
        var a = this.view_point.x;
        var b = this.view_point.y;
        var c = this.view_point.z;
        var d1 = a * n[0] + b * n[1] + c * n[2];
        var d = d0 - d1;

        var mpper = [[ d + a * n[0],     a * n[1],     a * n[2], -a * d0],
                     [     b * n[0], d + b * n[1],     b * n[2], -b * d0],
                     [     c * n[0],     c * n[1], d + c * n[2], -c * d0],
                     [         n[0],         n[1],         n[2],     -d1]];


        var mppar = [[  d - a * n[0],    -a * n[1],     -a * n[2], a * d0],
                     [     -b * n[0], d - b * n[1],     -b * n[2], b * d0],
                     [     -c * n[0],    -c * n[1],  d - c * n[2], c * d0],
                     [             0,            0,             0,     d1]];

        var mvt = this.getVerticesMatrix();
        var new_matrix;
        if (this.type === "per") new_matrix = this.matrixMultiplication(mpper, mvt);
        else new_matrix = this.matrixMultiplication(mppar, mvt);
        new_matrix = this.convertToCartesian(new_matrix);
        this.reflection(new_matrix);
        var min = this.getMin(new_matrix);
        var max = this.getMax(new_matrix);
        new_matrix = this.transformToViewPort(new_matrix, max, min);
        this.plotPoints(new_matrix);
    }

    this.reflection = function(new_matrix){
        for (var i = 0; i < this.nv; i++){
            new_matrix[1][i] = -new_matrix[1][i];
        }
    }

    this.getMin = function(matrix){
        var min = {x: Number.POSITIVE_INFINITY, y: Number.POSITIVE_INFINITY};
        for (var i = 0; i < this.nv; i++){
            if (matrix[0][i] < min.x)
                min.x = matrix[0][i];
            if (matrix[1][i] < min.y){
                min.y = matrix[1][i];
            }
        }
        return min;
    }

    this.getMax = function(matrix){
        var max = {x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY};
        for (var i = 0; i < this.nv; i++){
            if (matrix[0][i] > max.x)
                max.x = matrix[0][i];
            if (matrix[1][i] > max.y){
                max.y = matrix[1][i];
            }
        }
        return max;
    }

    this.plotPoints = function(matrix){
        plot.clear();
        for (var i = 0; i < this.ns; i++){
            var visible = true;
            if (this.hide == true)
                visible = this.isVisible(this.surfaces[i]);
            if (visible)
                for (var j = 0; j < this.surfaces[i].length - 1; j++){
                    var vt1 = parseInt(this.surfaces[i][j].vt);
                    var vt2 = parseInt(this.surfaces[i][j+1].vt);
                    var point1 = {x: matrix[0][vt1-1], y: matrix[1][vt1-1]};
                    var point2 = {x: matrix[0][vt2-1], y: matrix[1][vt2-1]};
                    if (j == 0){
                        var vt_f = parseInt(this.surfaces[i][this.surfaces[i].length -1].vt);
                        pointf = {x: matrix[0][vt_f-1], y: matrix[1][vt_f-1]};
                        plot.draw_line(point1, pointf);
                    }
                    plot.draw_line(point1, point2);
                }
            
        }
    }

    this.isVisible = function(surface){
        var n = this.getNormal(surface[1].vt[1], surface[0].vt[1], surface[2].vt[1]);
        var vx = this.view_point.x;
        var vy = this.view_point.y;
        var vz = this.view_point.z;
        var point = surface[1].vt[1];
        var d = [point.x - vx, point.y - vy, point.z - vz];
        var scalar_nv = n[0]*d[0] + n[1]*d[1] + n[2]*d[2];
        if (scalar_nv < 0)
            return false;
        return true;
    }

    this.matrixMultiplication = function(m, mvt){
        var new_matrix = [];
        for (var i = 0; i < m.length; i++){
            new_matrix.push([]);
            for (var j = 0; j < this.nv; j++){
                var new_value = 0;
                for (var k = 0; k < m.length; k++){
                    new_value += m[i][k]*mvt[k][j];
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

    this.getNormal = function(p1, p2, p3){
        var u = [p2.x - p1.x,
                 p2.y - p1.y,
                 p2.z - p1.z];


        var v = [p3.x - p1.x,
                 p3.y - p1.y,
                 p3.z - p1.z];


        //u x v
        var s1 = u[1]*v[2] - u[2]*v[1];
        var s2 = u[2]*v[0] - u[0]*v[2];
        var s3 = u[0]*v[1] - u[1]*v[0];


        return [s1, s2, s3];
    }

    this.convertToCartesian = function(matrix){
        var new_matrix = [[], [], []];
        for (var i = 0; i < this.nv; i++){
            var x = matrix[0][i] / matrix[3][i];
            var y = matrix[1][i] / matrix[3][i];
            var z = matrix[2][i] / matrix[3][i];
            new_matrix[0].push(x);
            new_matrix[1].push(y);
            new_matrix[2].push(1);
        }
        return new_matrix;
    }

    this.transformToViewPort = function(matrix, max, min){
        var umin = this.viewport.umin;
        var vmin = this.viewport.vmin;
        var umax = this.viewport.umax;
        var vmax = this.viewport.vmax;
        var mvp = [[(umax - umin) / (max.x - min.x), 0, (-min.x * (umax - umin) / (max.x - min.x)) + umin],
                   [0, (vmax - vmin) / (max.y - min.y), (-min.y * (vmax - vmin) / (max.y - min.y)) + vmin],
                   [0,  0,  1]];
        
        return this.matrixMultiplication(mvp, matrix);
    }

}

plot = new Plot();
projection = new Projection();
