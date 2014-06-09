function Plot(){
    var panel = new jsgl.Panel(document.getElementById("draw"));

    this.draw_line = function(p1, p2){
        var line = panel.createLine();
        line.setStartPointXY(p1.x, p1.y);
        line.setEndPointXY(p2.x, p2.y);
        panel.addElement(line);
    }

    this.clear = function(){
        panel.clear();
    }
}
