let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form is submited ");
//     let user=document.querySelector("#user");
// let pass=document.querySelector("#pass");
let user=this.elements[0];
let pass=this.elements[1];
console.log(`user name : ${user.value}`);
console.log(`password: ${pass.value}`);
});

