//java script gerar scaout, relatório...

//cronômetro  -------------------------------------

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function start(btnLigar) {
    pause();
    console.log('função start');
    cron = setInterval(() => { timer(); }, 10);
}

function pause() {
    clearInterval(cron);
    console.log('função Parar');
    if (cron > 0) {
        document.getElementById('btnLigar').innerHTML = 'Retomar';
    }
}

function zerar() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    //cron = 0;
    console.log('função reset');
   // clearInterval(cron);
    // cron = setInterval(() => { timer(); }, 0);
    //document.getElementById('hour').innerText = '00';
    document.getElementById('minutos').value = '00';
    document.getElementById('segundos').value = '00';
    //document.getElementById('millisecond').innerText = '000';
    document.getElementById('btnLigar').innerHTML = 'Iniciar';

}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }

    //if (minute == 60) {
    //    minute = 0;
    //    hour++;
    //}


    //document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minutos').value = returnData(minute);
    document.getElementById('segundos').value = returnData(second);
    //document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}

//fim cronômetro  ---------------------------------


function somarItem(Somar) {
    let txtItemScout = document.getElementById(Somar).value;
    txtItemScout++;
    //alert(txtItemScout);
    document.getElementById(Somar).value = txtItemScout;
}


function DiminuirItem(diminuir) {
    let txtItemScout = document.getElementById(diminuir).value;
    if (txtItemScout > 0) {
        var soma = (txtItemScout--);
        document.getElementById(diminuir).value = txtItemScout;
    }
}

