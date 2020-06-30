

var link1 = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css";
var link2 = "stylesheet";
var element1 = document.createElement("link");
element1.setAttribute("rel", link2);
element1.setAttribute("href", link1);
//element1.innerHTML = "your text";
document.head.appendChild(element1);

var link3 = "https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.min.css";
var link4 = "stylesheet";
var element2 = document.createElement("link");
element2.setAttribute("rel", link4);
element2.setAttribute("href", link3);
//element2.innerHTML = "your text";

document.head.appendChild(element2);
// Head part copleted
document.body.textContent = "";

var pre = document.createElement("pre");
pre.id = "jsonData";
document.body.appendChild(pre);



var myParent = document.body;

var center = document.createElement("center");
document.body.appendChild(center);

//Create array of options to be added
var array = ["Volvo:10002","Saab:10003","Mercades:10004","Audi:10005"];

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";
// added
selectList.setAttribute("class","chosen");
selectList.setAttribute("multiple","multiple");

document.body.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}

var button = document.createElement("button");
button. innerHTML = "Submit";
button.id = "put";
document.body.appendChild(button);

 var input = document.createElement("input");
 input.type = "text";
 input.readonly = "readonly";
 input.id = "txtresults";
 document.body.appendChild(input);

center.appendChild(selectList);



	$(function(){
	   $("#mySelect").change(function(){
	   var displaycourse=$("#mySelect option:selected").val(); 
	   $("#txtresults").val(displaycourse);
	   })
	 })
	  $(document).ready(function() {
    $("button").click(function(){
	 var selected = $('#mySelect').val();
	   $("#txtresults").val(selected);

    });
});
	  $(document).ready(function() {
     $('#put').click(function() {
      var selected = $('#mySelect').val();
	   $("#txtresults").val(selected);
     
  })
});
jQuery(document).ready(function(){
	jQuery(".chosen").chosen();
	
	var pmuname = document.getElementById("mySelect").value;
  
});
		function getOption() {  
		var pmuname = document.getElementById("mySelect").value;
		} 


