function val (result) {
    form.display.value = form.display.value + result;
}


function calculate () {
    if(form.display.value === "") {
        alert('Please Enter a Number')
    }
    else {
        form.display.value = eval(form.display.value)
    }
    
    const btn = form.vequal;
    btn.addEventListener('dblclick', function() {
        form.display.value = "";
    })
}