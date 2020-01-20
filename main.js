window.onload = () =>{
    const capacity_btn = document.querySelectorAll('.capacity .size');

    for(let i = 0; i < capacity_btn.length; i++){
        let btn = capacity_btn[i];
        btn.addEventListener('click', function(){
            document.querySelector('.capacity .size.selected').classList.remove('selected');
            this.classList.add('selected');
        })
    }
}