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


    // Работа с мобильной навигацией

    const header__nav = document.querySelector('.header__nav'),
          headerExit = document.querySelector('.header__nav-exit svg'),
          headerBtn = document.querySelector('.header__mobmenu svg'),
          header__navUl = document.querySelector('.header__nav ul'),
          header__navLogo = document.querySelector('.header__nav-logo');

    headerBtn.addEventListener('click', ()=>{
        header__nav.style.left = '0';
        header__navUl.style.opacity = '1';
        setTimeout(()=>{
            header__navLogo.style.opacity = '1';
        }, 610)
        
    })
    headerExit.addEventListener('click', ()=>{
        header__nav.style.left = '100%';
        header__navUl.style.opacity = '0';
        header__navLogo.style.opacity = '0';
    })


    // Прод смена картинок

    const prod__pic = document.querySelectorAll('.prod__pic img');

    prod__pic.forEach(item =>{
        let lastSrc = item.src;
        item.addEventListener('mouseenter', ()=>{
            
            item.src = item.dataset.alt;
        })
        item.addEventListener('mouseout', ()=>{
            item.src = lastSrc;

        })
    })
})