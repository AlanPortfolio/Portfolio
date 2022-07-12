let menu = document.getElementById('menu');
let btn = document.getElementById('menu_btn')
let line1 =  document.getElementById('menu_btn_line1') 
let line2 =  document.getElementById('menu_btn_line2') 
let line3 =  document.getElementById('menu_btn_line3') 
let clicks = 0
function btn_anim() {
    clicks+=1
        if(clicks%2 != 0 ){
    menu.style.opacity = '1'
    menu.style.transform = 'translateY(0%)'
    line1.classList.add('menu_btn_line1_active')
    line2.classList.add('menu_btn_line2_active')
    line3.classList.add('menu_btn_line3_active')
    line1.classList.remove('menu_btn_line1_active_reverse')
    line2.classList.remove('menu_btn_line2_active_reverse')
    line3.classList.remove('menu_btn_line3_active_reverse')

    }

    if(clicks%2 == 0){
        
        menu.style.opacity = '0'
        menu.style.transform = 'translateY(-100%)'
        line1.classList.remove('menu_btn_line1_active')
        line2.classList.remove('menu_btn_line2_active')
        line3.classList.remove('menu_btn_line3_active')
        line1.classList.add('menu_btn_line1_active_reverse')
        line2.classList.add('menu_btn_line2_active_reverse')
        line3.classList.add('menu_btn_line3_active_reverse')
        btn.classList.add('secondary')
        }
}

    

btn.addEventListener("click", btn_anim )