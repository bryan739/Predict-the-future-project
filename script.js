$(".namebutton").click(function(){
    var name=$(".name").val();
    $("h1").text("Hi " + name);
});
$(".restaurantbutton").click(function(){
    var restaurant=$(".restaurant").val();
    $("h2").text("Wow thats a good restaurant");
});
$(".visitbutton").click(function(){
    var visit=$(".visits").val();
    $("h3").text("You will visit this fast food restaurant "+  visit*4 + "  times this month");
});