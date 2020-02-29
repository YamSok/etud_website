window.onload = function() {
    btn = document.querySelectorAll('#btn');
    
    
    btn[0].onclick = function fun() { 
        p = document.querySelectorAll('.back');
       for (i=0; i<3; i++) {
           p[i].classList.toggle('animback');
                           }
    }
        btn[1].onclick = function fun() { 
        p = document.querySelectorAll('.back');
       for (i=3; i<6; i++) {
           p[i].classList.toggle('animback');
                           }
    }
            btn[2].onclick = function fun() { 
        p = document.querySelectorAll('.back');
       for (i=6; i<9; i++) {
           p[i].classList.toggle('animback');
                           }
    }

}