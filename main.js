function setup(){
    canvas = document.getElementById("canvas").value;
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.center()
}

function draw(){
    image(video,0,0,500,300);
}