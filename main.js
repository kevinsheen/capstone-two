$( document ).ready(function() {
   
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
	
	$('.vote').on('click', function(event){ 
	   if ($(this).attr('data-vote') === 'great'){
		   ++voteCounts.great; 
		   ++voteCounts.total;
		   console.log(voteCounts);
		   } 
		else {						        
		   ++voteCounts.greatest;
	     ++voteCounts.total;
		   console.log(voteCounts);
	   }
	var greatPercent = ((voteCounts.great/voteCounts.total) * 100 + '%');  
	console.log(greatPercent);
	$('.great-progress').css('width', greatPercent);					
	var greatestPercent = ((voteCounts.greatest/voteCounts.total) * 100 + '%');  
	console.log(greatestPercent); 
	$('.greatest-progress').css('width', greatestPercent); 
		
	});
});