window.addEventListener('DOMContentLoaded', ()=>{
    const controlLeft = document.querySelector('.diplom__sliderControlLeft'),
          controlRight = document.querySelector('.diplom__sliderControlRight'),
          diplom__sliderTrack =document.querySelector('.diplom__sliderTrack'),
          diplom__block = document.querySelectorAll('.diplom__block');
    const diplom__slider = document.querySelector('.diplom__slider');


    let colums = 4;
    let margin = 33;
    let blockWidth = (diplom__slider.offsetWidth - margin * (colums - 1)) / colums;

    console.log(diplom__slider.offsetWidth);

    diplom__block.forEach(item=>{
        item.style.marginRight = margin + 'px';
    })
    diplom__block.forEach(item=>{
        item.style.width = blockWidth + 'px';
    })
    
    let diplom__blockHeight = diplom__block[0].offsetHeight;
   
    diplom__slider.style.height = diplom__blockHeight + 'px';

    let slideStatus = 0;
    let index = 1;
    function slide(side){
        index = index + 1 *side*(-1);
        
        if(index <= 0){
            index = 1
        } else if( index > (diplom__block.length - colums + 1)){
            index= diplom__block.length - colums  + 1;
        } else {
            
            slideStatus = slideStatus + side * (blockWidth+ margin) ;
            diplom__sliderTrack.style.transform = `translate(${slideStatus}px, 0)`;
            console.log(diplom__sliderTrack.offsetWidth);
        }
                
    }

    controlLeft.addEventListener('click', ()=>{
        slide(1);
        
    })
    controlRight.addEventListener('click', ()=>{
        slide(-1);
        
    })
})
