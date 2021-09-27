window.addEventListener('DOMContentLoaded', ()=>{
    const medPic = document.querySelector('.firstscreen__medMed');
    const medMiniL = document.querySelector('.firstscreen__medMini');
    const medList = document.querySelector('.firstscreen__medList');
    const bee = document.querySelector('.buy__btn .main__button img');
    const buy = document.querySelector('.buy');


    window.addEventListener('mousemove', (e)=>{
        
        let xMed = e.pageX / window.screen.width * 12;
        let yMed = e.pageY / window.screen.height * 12;

        let xMini = e.pageX / window.screen.width * 4;
        let yMini = e.pageY / window.screen.height * 4;

        let xList = e.pageX / window.screen.width * 28;
        let yList = e.pageY / window.screen.height * 28;

        let xBee = e.pageX / window.screen.width * 17;
        let yBee = (e.pageY - buy.offsetTop - 400) / window.screen.height * 10;
        
        medPic.style.transform = `translate(${xMed}px,${yMed}px)`;
        medMiniL.style.transform = `translate(${xMini}px,${yMini}px)`;
        medList.style.transform = `translate(${xList}px,${yList}px)`;
        bee.style.transform = `translate(${xBee}px,${yBee}px)`;
    })
})
