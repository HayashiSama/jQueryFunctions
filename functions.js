$("#button1").click( function()
{
	console.log("button 1 clicked");
	$("#1").css('background-color','green');
});

$("#button2").click( function()
{
	console.log("button 2 clicked");
	$("#p_2").hide();
	$("#p_3").show();
});

$("#button3").click( function()
{
	$("#p_2").show();
	console.log("button 3 clicked");
	$("#p_3").hide();
});

$("#button4").click( function()
{
	console.log("button 4 clicked");

	$("#p_4").toggle();

});

$("#logo").click( function()
{
	$("#logo").toggle();	
});

$("#button5").click( function()
{
	console.log("button 5 clicked");

	$("#logo").slideDown("slow", function(){});

});

$("#button6").click( function()
{
	console.log("button 6 clicked");

	$("#logo").slideUp();

});

$("#button7").click( function()
{
	console.log("button 7 clicked");
	$("#logo").slideToggle();
});

$("#button8").click( function()
{
	console.log("button 8 clicked");
	$("#logo").fadeOut();
});
$("#button9").click( function()
{
	console.log("button 9 clicked");
	$("#logo").fadeIn();
});


$("#button11").click( function()
{
	console.log("button 11 clicked");
	$("#p_11").before("Hello There!");
});

$("#button12").click( function()
{
	console.log("button 12 clicked");
	$("#p_12").after("Goodbye Then!");
});

$("#button13").click( function()
{
	console.log("button 13 clicked");
	$("#13").append("APPEND TO DIV!");
	$("#button13").append("APPEND TO BUTTON!");
});

$("#button14").click( function()
{
	console.log("button 14 clicked");
	var text = $("#p_14").html();
	$("#p_14").append(text);
});

$("#button15").click( function()
{
	console.log("button 15 clicked");
	var text = $("#check1").attr("checked");
	$("#p_15").append("checked: "+ text);
});

$("#button16").click( function()
{
	console.log("button 16 clicked");
	var text = $("#textfield").val();
	$("#p_16").append(text);
});

$("#button17").click( function()
{
	console.log("button 17 clicked");
	$("#p_17").text( "Wheeeee");

});

$("#button18").click( function()
{

	console.log("button 18 clicked");
	$("#p_18").data("counter", 42);
	console.log("counter stored in p tag is: " + 42);
	var x = $("#p_18").data("counter");
	$("#p_18").text(x);
});




