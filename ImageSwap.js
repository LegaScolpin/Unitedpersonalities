/* Image swap function */

$(document).ready(function()
{
	$("#thumbs a").click(function(event)
	{
		var urlThumbClicked = $(this).attr("href");		
		$("#sketch").attr("src", urlThumbClicked);
		
		var artName = $(this).attr("title");			
		$("#title").text(artName);
		
		var artDescription = $(this).attr("alt");
		$("#description").text(artDescription);

		event.preventDefault();							
		
	});     
});