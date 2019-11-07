$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("button").click(function(){
    let input = $(".input").val();
//  let splitinput = input.split("")
    let charinput = input.charAt(0);
    let length = input.length;

    let sliceinput = input.slice(1, length);
    console.log(sliceinput + charinput + "ay")
    let result = sliceinput + charinput + "ay"
  //  let addition = (charinput)
    $(".output").text(result);
    });
});

