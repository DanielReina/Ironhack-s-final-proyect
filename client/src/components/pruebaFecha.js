
let d = new Date();
// console.log('Fecha: '+d.getDate(),'Dia de la semana: '+d.getDay(),'Mes (0 al 11): '+d.getMonth(),'Año: '+d.getFullYear(),'Hora: '+d.getHours(),'Hora UTC: '+d.getUTCHours(),'Minutos: '+d.getMinutes(),'Segundos: '+d.getSeconds());


const getTime = dateTo => {
    let now = new Date(),
        time = (new Date(dateTo) - now + 1000) / 1000,
        seconds = ('0' + Math.floor(time % 60)).slice(-2),
        minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
        hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
        days = Math.floor(time / (3600 * 24));
  
    console.log(
        days, 'dias',
        hours, 'horas',
        minutes, 'minutos',
        seconds, 'segundos',       
        time, 'milisegundos'
    )
};




let fechaParaCambiar='2020-12-11T22:52:00.000+00:00'

function wrongDateFormat(string){
let year= string.substring(0, 4)
let day= string.substring(8, 10)
let digitMonth= string.substring(5, 7)
let month ='default'
switch (digitMonth) {
    case '01':
        month = 'January'
    break;
    case '02':
        month = 'February'
    break;
    case '03':
        month = 'March'
    break;
    case '04':
        month = 'April'
    break;
    case '05':
        month = 'May'
    break;
    case '06':
        month = 'June'
    break;
    case '07':
        month = 'July'
    break;
    case '08':
        month = 'August'
    break;
    case '09':
        month = 'September'
    break;
    case '10':
        month = 'October'
    break;
    case '11':
        month = 'November'
    break;
    case '12':
        month = 'December'
    break;  
  }
  let horaMenosUno= string.substring(11, 19)
  let soloHoraMenosUno = horaMenosUno.substring(0,2)
  let hourToNumber= parseInt(soloHoraMenosUno, 10) + 1;
  let correctStringNumber = hourToNumber.toString()
  let hour = `${correctStringNumber}`+`${string.substring(13, 19)}`

console.log(`${month} ${day}, ${year} ${hour}`)
}


let fechaParaCambiar2='2020-12-11T22:52:00.000+00:00'

getTime('December 10, 2020 14:00:00')
wrongDateFormat('2020-12-10T13:00:00.000+00:00')





