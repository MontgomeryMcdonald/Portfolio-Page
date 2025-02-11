var images = [
    "BobsBricks.png",
    "DarylsDucks.png",
    "SuperShredders.png"
]
var currentimage = 0
function Swap(step = 1){
    currentimage += step
    if(currentimage > 2){
        currentimage = 0
    }
    $("#carousel-img").prop("src", images[currentimage])
}


$("forward").click(function(){
    Swap(1)
})
$("back").click(function(){
    Swap(-1)
})


setInterval(Swap, 5000)
$("#carousel-img").prop("src", images[currentimage])