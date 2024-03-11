// mendapatkan pilihan komputer
function getPilihanComp() {
    const computer = Math.random();
    if (computer <= 0.34) return 'gajah';
    if (computer > 0.34 && computer < 0.64) return 'orang';
    return 'semut';
}

function hasil(computer, player) {
    if (player == computer) return 'SERI!';
    if (player == 'gajah') return (computer == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'semut') return (computer == 'gajah') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (computer == 'gajah') ? 'KALAH!' : 'MENANG!';
}

// gajah
const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function() {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = 'gajah';
    const hasilSuwit = hasil(pilihanComp, pilihanPlayer)
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', pilihanComp + '.png')
    const boxHasil = document.querySelector('.info');
    boxHasil.innerHTML = hasilSuwit; 
})

// orang
const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function() {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pOrang.className;
    const hasilSuwit = hasil(pilihanComp, pilihanPlayer)
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', pilihanComp + '.png')
    const boxHasil = document.querySelector('.info');
    boxHasil.innerHTML = hasilSuwit; 
})

// semut
const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function() {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pSemut.className;
    const hasilSuwit = hasil(pilihanComp, pilihanPlayer)
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', pilihanComp + '.png')
    const boxHasil = document.querySelector('.info');
    boxHasil.innerHTML = hasilSuwit; 
})