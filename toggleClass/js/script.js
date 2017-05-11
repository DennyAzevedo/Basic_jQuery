$(document).ready(function()
{
	$(".item1").on( "click", function()
	{
		$(".item1").addClass("blue");
	});

	$(".item2").on( "click", function()
	{
		$(".item2").removeClass("blue");
	});

	$(".item3").on( "click", function()
	{
		$(".item3").toggleClass("blue");
	});
});
