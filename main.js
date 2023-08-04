let random = (Math.random() * 100).toFixed()
let mynumb = document.getElementById("one")
console.log(random);
let text = document.getElementById("hhh")
let but = document.getElementById("but")
let i=0

let but22 = document.getElementById("but22")
let nam= document.getElementById("name")

let bname=document.querySelector(".name")

let cont=document.querySelector(".cont")
but22.onclick=()=>{bname.classList.toggle('closed')

cont.classList.toggle("closed")

}

but.onclick=() =>{

    
    ++i
        
    console.log(i);

     

    if (Number(mynumb.value) == random) {
        text.innerHTML =(`поздравляю ${nam.value} вы выиграли!!! вам потребовалось ${i} попыток.<br>
        Нажмите F5 чтобы сыграть еще раз`);
        text.style.color=("green")

    } else if (Number(mynumb.value) > random) {
        text.innerHTML = ('загаданное вами число БОЛЬШЕ, нужно меньше ')

    }
    else if (Number(mynumb.value) < random) {
        text.innerHTML = ('загаданное вами число МЕНЬШЕ, нужно больше ')


    }
    
}




