function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

getfile("Divi.json",function(text){
   let data=JSON.parse(text);
   console.log(data);
   basicinfo(data.basics);
   eduinfo(data.education);
   skills(data.skills);
});

var main=document.querySelector('.flex-parent');//getting through class name


function basicinfo(basic){
  var profile=document.getElementById("basics");
  var name=document.createElement("h2");
  name.innerHTML=basic.name;
  profile.appendChild(name);
  var phone=document.createElement("h3");
  phone.innerHTML=basic.phone;
  profile.appendChild(phone);
  var email=document.createElement("h3");
  email.innerHTML=basic.email;
  profile.appendChild(email);
  var photo=document.createElement("img");
  photo.src=basic.photo;
  photo.setAttribute("id","photo");
  profile.appendChild(photo);
}

var right=document.createElement("div");
right.classList.add("content-child");
//education div
main.appendChild(right);//append right to main
var e1=document.createElement("div");
e1.classList.add("edu");
right.appendChild(e1);//append div e1 to right
var h1=document.createElement("h1");
h1.setAttribute("id","heading");
h1.textContent=("Education Details");
h1.appendChild(document.createElement("HR"));
e1.appendChild(h1);

 function eduinfo(education){
      for(var i=0; i<education.length; i++){
        //course creation
        console.log("hi");
        console.log(education[i].course);
        var h2=document.createElement("h2");
        h2.classList.add("edu1");
        h2.textContent=education[i].course;
        h1.appendChild(h2);
      //college creation
      var h3=document.createElement("h3");
      h3.classList.add("edu2");
      h3.textContent=education[i].college;
      h2.appendChild(h3);
//to get data
      var ul=document.createElement("ul");
      ul.classList.add("edu3");
      h3.appendChild(ul);
      //for(j in education.data){
        var li=document.createElement("li");
        li.textContent=education[i].data;


      ul.appendChild(li);
    //  }
}
 }
 function skills(kill){
   var table=document.createElement("table");
   var row=" ";
   for(var k=0; k<kill.length; k++){
     row+="<tr><td><strong>"+kill[k].name+"</strong></td><td>"+kill[k].info+"</td></tr>";

   }
   table.innerHTML=row;
   right.appendChild(table);
 }
