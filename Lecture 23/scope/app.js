//var b = 20;
function a() {
    console.log(b);
}

a();


//--------------------------------

function outer() {
    var b=10;

    inner() ;
    function inner() {
        console.log(b);
    }  
}
outer();

