let submit = document.querySelector(`#button`);

function register(){
    let yourName = document.querySelector(`#name`).value;
    let yourAge = document.querySelector(`#age`).value;
    let yourJob = document.querySelector(`#job`).value;
    if(yourName ==="" || yourAge==="" || yourJob ==="")
        window.alert(`please fill all fields`);
    else{
        if(yourAge < 18){
            window.alert("you are under age")
        }else {
            window.alert("registration completed")
        }
        console.log("Name :", yourName);
        console.log("Age :" , yourAge)
        console.log("Job :" , yourJob)
    }
}
submit.addEventListener("click" , register);

