var person = {
    name: "Mario",
    lastname: "López",
    birthday: new Date(1998, 9, 25)
};

//Algoritmo de cálculo de edad.
function getAge(birthday) {
    var today = new Date(Date.now());
    var age = today.getUTCFullYear()-birthday.getUTCFullYear();

    if(today.getMonth() > birthday.getMonth()){
        
    }else if(today.getMonth() == birthday.getMonth()){
        if(today.getDate() >= birthday.getDate()){
            
        }else{
            age--;
        }
    }else{
        age--;
    }
    return age;

}

console.log("Fecha de nacimiento: "+person.birthday.getDate()+"/"+(person.birthday.getMonth()+1)+"/"+person.birthday.getUTCFullYear()+ " (dd/mm/yyyy)");
console.log("Edad: "+getAge(person.birthday)+" años");