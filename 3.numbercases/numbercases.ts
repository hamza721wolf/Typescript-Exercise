let personName: string = "Hamza";
console.log(personName.toLowerCase())
console.log(personName.toUpperCase())
let words: string[]=personName.split("");
let titlecase: string =""
for (let i=0; i < words.length; i++){
    titlecase + words[i].charAt(0).toUpperCase()+ words[i].slice(1).toLowerCase()+""
}
console.log(titlecase)