

 let canvas=document.getElementById("paint");
 let ctx=canvas.getContext("2d");
 let drawing=false;

 canvas.onmousedown= function (event)
 {
drawing=true;
ctx.beginPath();
ctx.moveTo(event.offsetX, event.offsetY);

 };

 canvas.onmouseup= function ()
 {
    drawing=false;
 };

 canvas.onmouseleave=function()
 {
    drawing=false;
 };

 canvas.onmousemove=function(event)
 {
    if(drawing)
    {
        ctx.strokeStyle=document.getElementById("color").value;
        ctx.lineWidth=document.getElementById("size").value;
        ctx.lineCap="round";

        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();
    }

     
 };
 function clearcanvas() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }