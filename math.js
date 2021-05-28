
$(document).ready(
    function(){
      
            
      $('#numfact').click(function(){
                     
                let num = $('#numb').val();
            
                $.get(
                    "http://numbersapi.com/"+num,
                    function(data){
                     $("#result").text(data);
                    
                     
                     
    
                     
                })          
     
        }
      )
      $('#mathfact').click(function(){
                     
        let num2 = $('#numb').val();
    
        $.get(
            "http://numbersapi.com/"+num2+"/math",
            function(data){
             $("#result").text(data);
            
             
             

             
        })          

}
)

$('#datefact').click(function(){
                     
    let date = $('#date').val();
    let month = $('#month').val();

    $.get(
        "http://numbersapi.com/"+date+"/"+month,
        function(data){
         $("#result").text(data);
        
         
         

         
    })          

}
)

    }
    )
























