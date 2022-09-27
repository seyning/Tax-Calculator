
let NetPayInput = document.getElementById('netpay-input');
let nssf = document.getElementById('nssf');
let taxable = document.getElementById('taxable');
let relief = document.getElementById('relief');
let personal = document.getElementById('personal');
let insurance = document.getElementById('insurance');
let paye = document.getElementById('PAYE')
let nhif = document.getElementById('NHIF')


nssf.oninput = function(){
    NetPayInput.value = nssf.value*0.03
}
taxable.oninput = function(){
    NetPayInput.value = taxable.value*0.05
}

relief.oninput = function(){
    NetPayInput.value = relief.value*0.03
}

personal.oninput = function(){
    NetPayInput.value = personal.value*0.02
}

insurance.oninput = function(){
    NetPayInput.value = insurance.value*0.04
}

paye.oninput = function(){
    NetPayInput.value = paye.value*0.02
}

nhif.oninput = function(){
    NetPayInput.value = nhif.value*0.04
}