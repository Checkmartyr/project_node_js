$(document).ready(function(){
    $('#upload-file').change(function() {
       var filename = $(this).val();
       $('#file-upload-name').html(filename);
       if(filename!=""){
           setTimeout(function(){
               $('.upload-wrapper').addClass("uploaded");
           }, 600);
           setTimeout(function(){
               $('.upload-wrapper').removeClass("uploaded");
               $('.upload-wrapper').addClass("success");
           }, 1600);
       }
   });
});