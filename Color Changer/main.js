function changeColor() {
    let color = document.getElementById('txtField').value;
    document.body.style.backgroundColor = color;
    refreshRanger();

}
function changeRndColor() {
    let r = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    if (r < 10) { r = '0' + r.toString() }
    if (g < 10) { g = '0' + g.toString() }
    if (b < 10) { b = '0' + b.toString() }
    let color = '#' + r + g + b;
    document.body.style.backgroundColor = color;
    console.log(color)
    document.getElementById('txtField').value = color;
    refreshRanger();
}

function refreshRanger(){
    let colorBeforeChanges = document.getElementById('txtField').value.slice(1)
    let r = colorBeforeChanges.slice(0, 2);
    let g = colorBeforeChanges.slice(2, -2);
    let b = colorBeforeChanges.slice(4);
    document.getElementById('r').value = r;
    document.getElementById('g').value = g;
    document.getElementById('b').value - b;

}


function changeRangerColor(ranger) {
    let colorBeforeChanges = document.getElementById('txtField').value.slice(1)
    let r = colorBeforeChanges.slice(0, 2);
    let g = colorBeforeChanges.slice(2, -2);
    let b = colorBeforeChanges.slice(4);


    switch (ranger) {
        case 'rangerR':
            r = document.getElementById('r').value;
            if (r < 10) { r = '0' + r.toString() }
            if (r === 0) { r = 'FF' }

            console.log(r);

            break;

        case 'rangerG':
            g = document.getElementById('g').value;
            if (g < 10) { g = '0' + g.toString() }
            if (g === 0) { g = 'FF'  }

            console.log(g);
            break;
        case 'rangerB':
            b = document.getElementById('b').value;
            if (b < 10) { b = '0' + b.toString() }
            if (b === 0) { b = 'FF' }

            console.log(b);

            break;

    }
    let color = '#' + r + g + b;
    document.body.style.backgroundColor = color;
    console.log(color)
    document.getElementById('txtField').value = color;


}


function si() {
    document.getElementById('txtField').value = document.getElementById('r').value;
}