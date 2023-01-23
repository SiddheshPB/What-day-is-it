document.querySelector('#check').addEventListener('click', check)

function check() {

    const day = document.querySelector('#day').value.toLowerCase()

    if(day === "tuesday" || day === "thursday"){
        alert("You Have A Class")
    }else if(day === "saturday" || day === "sunday"){
        alert("It's a weekend!")
    }else{
        alert("BORINGGGG")
    }
}