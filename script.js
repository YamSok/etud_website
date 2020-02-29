window.onload = function() {
    document.getElementById("btn").onclick = function fun() {
        p = document.querySelectorAll('.back');
       for (i=0; i<3; i++) {
           p[i].classList.toggle('animback');
                           }
    }
}