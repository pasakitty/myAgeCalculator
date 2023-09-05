const btnEl = document.getElementById("btn");

const birthdayEl = document.getElementById("birthday");

const resultEl = document.getElementById("result");

function calculateAge(){
    //console.log("clicked");  //Bu, en başta çalışıyo mu diye kontrol ettiğim

    const birthdayValue = birthdayEl.value;

    if(birthdayValue === ""){
        alert("Please enter your birthday");
    }else{
        const age = getAge(birthdayValue); //Burda kullanıcam fonksiyonu aşağıda tanımladım.
        resultEl.innerText = `Your age is ${age}  ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date()  //new Date()-> javascriptin kendi hazır fonksiyonlarından(hazır metotlardan yani).
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month =  currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0  && currentDate.getDate() < birthdayDate.getDate() ) ) {
        age--;
    }

    return age;
}


btnEl.addEventListener("click", calculateAge);