function upDate(previewPic){
  var src = previewPic.getAttribute("src");
  document.getElementById('Image').style.backgroundImage = "url('" + src + "')";
  document.getElementById('Image').innerHTML = previewPic.alt;
 
}

function unDo(){
 document.getElementById('Image').style.backgroundImage = "url('./nVRJGvq.jpg')";
 var text = "Please move the mouse over the picture to see it on the TV";
 document.getElementById('Image').innerHTML= text;
}