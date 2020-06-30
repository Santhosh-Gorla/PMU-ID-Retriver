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