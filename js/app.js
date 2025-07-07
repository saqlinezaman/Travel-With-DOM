const allBtn = document.querySelectorAll('.card-btn');
// set innner text Function

function setInnerText(id,value) {
    document.getElementById(id).innerText = value;
}

let count = 0
    for(const btn of allBtn){
        btn.addEventListener('click',function(event){
           count = count + 1 ;
           const placeName =  event.target.parentNode.parentNode.childNodes[1].innerText;
           const Price =  event.target.parentNode.parentNode.childNodes[3].innerText;

           document.getElementById('place-name').innerText = placeName;
           document.getElementById('price').innerText = Price;

           console.log(placeName, Price);
           setInnerText('card-count',count);
        });
    }