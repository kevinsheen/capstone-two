$( document ).ready(function() {
   
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
	
	$('.vote').on('click', function(event){ // set up .vote class 
	   if ($(this).attr('data-vote') === 'great'){
		   ++voteCounts.great; 
		   ++voteCounts.total;
		   console.log(voteCounts);
		   } 
		else {						        // (($(this).attr('data-vote') === 'greatest')){??
		   ++voteCounts.greatest;
	     ++voteCounts.total;
		   console.log(voteCounts);
	   }
	var greatPercent = ((voteCounts.great/voteCounts.total) * 100 + '%');  // determine percentages on progress bar for great
	console.log(greatPercent);
	$('.great-progress').css('width', greatPercent);						//used .css over .attr
	var greatestPercent = ((voteCounts.greatest/voteCounts.total) * 100 + '%');  // determine percentage on progress bar for greatest
	console.log(greatestPercent); 
	$('.greatest-progress').css('width', greatestPercent); 
		
	});
});