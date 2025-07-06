const allBtn = document.querySelectorAll('.card-btn');

let count = 0
    for(const btn of allBtn){
        btn.addEventListener('click',function(event){
           count = count + 1 ;
           document.getElementById('card-count').innerText = count;
        })
    }