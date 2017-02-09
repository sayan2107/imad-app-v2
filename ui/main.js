console.log('Loaded!');
//changing inner html with ID 'bla'
document.getElementById('bla').innerHTML='new valuie';
// alert("value changed");


//move image
var img=document.getElementById('madi');
img.onClick=function(){
 img.style.marginleft = '300px';
};