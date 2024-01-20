let counter = 0;
let proCount = 0;
window.addEventListener('scroll', function(event){
    if(event.deltaY < 0){
        counter +=45;
        proCount += 1;
        $('.main_box').css({"transform":"rotate("+counter+"deg)"});
    } else if(event.deltaY > 0){
        counter -=45;
        proCount -= 1;
        $('.main_box').css({"transform":"rotate("+counter+"deg)"});
    }
})