var count = 1;
function counter() {
    if(count==100){
        clearTimeout(id);
    }
    document.getElementById("count").textContent = count;
    count = count + 1;
    if(count<=97){
    let id = setTimeout(counter, 25) ;
    }else{
        let id = setTimeout(counter,300);
    }
    if(count==100){
        document.getElementById("count").textContent = count+"+";
    }    
}

var days=1;
function day(){
    if(days==366){
        clearTimeout(pnt);
    }
    document.getElementById('days').textContent = days;
    days = days + 1;
    if(days<=362){
        let pnt = setTimeout(day,0.05);
    }else{
        let pnt = setTimeout(day,150);
    }
}

counter();
day();