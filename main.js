window.onload = () =>{
    const colour_btn = document.querySelectorAll('.colours .colour');
    const capacity_btn = document.querySelectorAll('.capacity .size');
    const imagery = document.querySelector('.imagery');
    const image = document.querySelector('.imagery .image');
    const price = document.querySelector('.price');
    

    for(let i = 0; i < capacity_btn.length; i++){
        let btn = capacity_btn[i];
        btn.addEventListener('click', function(){
            document.querySelector('.capacity .size.selected').classList.remove('selected');
            this.classList.add('selected');
            price.innerText = this.dataset.price;
        })
    }
    for(let i = 0; i < colour_btn.length; i++){
        let btn = colour_btn[i];
        btn.addEventListener('click', function(){
            document.querySelector('.colours .colour.selected').classList.remove('selected');
            this.classList.add('selected');
            image.src = "images/phone-" + this.dataset.name + '.png';
            imagery.style.background = this.dataset.colour;
        })
    }
}