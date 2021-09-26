window.addEventListener('DOMContentLoaded', ()=>{
    const header = document.querySelector('.header');
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 10){
            header.classList.add('header__mini');
        }else{
            header.classList.remove('header__mini');
        }
        
    })


    function scrollToElement(elem){
        window.scroll({
            top:elem.offsetTop - 100,
            behavior: 'smooth'
        })
    }

    function selectScroll(btn, elem){
        btn.forEach(item=>{
            item.addEventListener('click',()=>{
                scrollToElement(elem);
            })
        })
    }

    const goAbout = document.querySelectorAll('#goAbout'),
          goPrice = document.querySelectorAll('#goPrice'),
          goPart = document.querySelectorAll('#goPart'),
          goContacts = document.querySelectorAll('#goContacts'),
          about = document.querySelector('#about'),
          price = document.querySelector('#price'),
          contacts = document.querySelector('#contacts'),
          part = document.querySelector('#part');

    selectScroll(goAbout, about);
    selectScroll(goPrice, price);
    selectScroll(goPart, part);
    selectScroll(goContacts, contacts);

})