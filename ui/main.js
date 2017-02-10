//counter code
var button=document.getElementById('counter');

button.onclick = function(){
//create a request to counter endpoint
var request = new XMLHttpRequest();


//capture the request and store it inside a variable
request.onreadystatechange = function(){
if(request.readyState===XMLHttpRequest.DONE){
//TAKE ACTION
 if(request.status===200){               //checking if it is a succesfull request or not
        counter=0;                         
        var counter=request.responseText;
        
        counter=counter+1;
        document.getElementById('count').innerHTML = counter.toString();
        }
     }

//later  else part

  };
  
//make a request

request.open('GET','http://sayan2107.imad.hasura-app.io/counter',true);
request.send(null);

};






//submit names

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
var request = new XMLHttpRequest();  //request to the server
//capture the request and store it inside a variable
request.onreadystatechange = function(){
if(request.readyState===XMLHttpRequest.DONE){
//TAKE ACTION
 if(request.status===200){               //checking if it is a succesfull request or not
       //capture the list of names and render it as a list

var names = request.responseText;
names = JSON.parse(names);
var list="";
for(var i=0; i<names.length; i++){
    list += '<li>' + names[i] + '</li>';
 }
 var ul = document.getElementById('namelist');
 ul.innerHTML = list;
        }
     }

//later  else part

  };
  
//make a request
var nameinput=document.getElementById('name');
var name = nameinput.value;
request.open('GET','http://sayan2107.imad.hasura-app.io/submit-name?name=' + name,true);
request.send(null);

};
