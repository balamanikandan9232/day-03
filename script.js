var employee=[{"Name":"bala",
         "age":"22",
         "email":"balamanikandan9232@gmail.com",
         "salary":"8000$"},
         
         {"Name":"siva",
         "age":"22",
         "email":"sivashankar@gmail.com",
         "salary":"5000$"},
         
         {"Name":"arun",
         "age":"22",
         "email":"arun@gmail.com",
         "salary":"6000$"}];


//for loop   
for(i=0;i<employee.length;i++){
   console.log(employee[i]);          
} ;
console.log("...............");
//for in loop

for( const x in employee){
    console.log(employee[x]);
} ;       
console.log("..............");
//for of loop

for(let a of employee){
    console.log(a);
};
console.log("..............");
//for Each loop
employee.forEach(function()
{
    console.log(employee[0]);
});