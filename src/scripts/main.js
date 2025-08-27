AOS.init();

const dataEvento = new Date("Sep 27, 2025 16:00:00")
const timeStampEvento = dataEvento.getTime()

const contaHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    let timeStampRestante = timeStampEvento - timeStampAtual

    
    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60
    const segundosEmMs = 1000

    const diasRestantes = Math.floor(timeStampRestante / diaEmMs)
    const horasRestantes = Math.floor((timeStampRestante % diaEmMs) / horaEmMs)
    const minutosRestantes = Math.floor((timeStampRestante % horaEmMs) / minutosEmMs)
    const segundosRestantes = Math.floor((timeStampRestante % minutosEmMs) / segundosEmMs)

    document.getElementById('dias').innerText = diasRestantes
    document.getElementById('horas').innerText = horasRestantes
    document.getElementById('minutos').innerText = minutosRestantes
    document.getElementById('segundos').innerText = segundosRestantes

    if(timeStampRestante < 0){
        clearInterval(contaHoras)
        document.getElementById('mensagem').innerText = 'Minha festa já aconteceu ou está acontecendo!'

        document.getElementById('dias').innerText = '0'
        document.getElementById('horas').innerText = '0'
        document.getElementById('minutos').innerText = '0'
        document.getElementById('segundos').innerText = '0'
    }

}, 1000)