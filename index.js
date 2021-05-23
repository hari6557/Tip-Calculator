// window.onload = () =>{
//     document.querySelector('#calculate').onclick = calculate;
// }


function calculate(){
    let bill = document.querySelector('#billamt').value;
    let people = document.querySelector('#peopleamt').value;
    let service = document.querySelector('#serviceQual').value;

    if(service=='Choose your Option' || bill ==''){
        alert("Please Enter Bill Amount");
    }
    if(people==='1' || people ===''){
        people=1;
        document.querySelector("#each").innerHTML=""
    }
    else{
      document.querySelector("#each").innerHTML="Each";
    }
    let total = (bill*service)/people;
    total = total.toFixed(2);

    
    document.querySelector('#tip').innerHTML=total+"Rs";
}





