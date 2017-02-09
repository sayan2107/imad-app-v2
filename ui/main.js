//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick = function(){
//create a request to counter endpoint
var request = new XMLHttpRequest();


//capture the request and store it inside a variable
request.onreadystatechange = function(){
if(request.readyState===XMLHttpRequest.DONE){
//TAKE ACTION
 if(request.status===200){  //checking if it is a succesfull request or not
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
