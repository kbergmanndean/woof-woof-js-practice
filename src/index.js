document.addEventListener("DOMContentLoaded",()=> {
//get dogs 
    fetch("http://localhost:3000/pups")
    .then(resp=>resp.json())
    .then(data=>data.forEach(renderEach))

 //patch goodDog toggle
 function goodToggle(dog) {
     fetch(`http://localhost:3000/pups/${dog.id}`, {
         method: "PATCH",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(dog)
     })
     .then(resp=> resp.json())
     
 }   
//  //patch badDog toggle
 function badToggle(dog) {
    fetch(`http://localhost:3000/pups/${dog.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dog)
    })
    .then(resp=> resp.json())
    
}   
   
    
 //render dog buttons   
const renderEach=(dog)=>{
        const span=document.createElement("span")
        const dogBar=document.getElementById("dog-bar")
        span.innerText=dog.name
        dogBar.append(span)
        //click event on span
        span.addEventListener("click",()=> {
            renderDog(dog);
        })

}
//function to make dog show up
const renderDog= (dog) => {
    const h2=document.createElement("h2")
    const img=document.createElement("img")
    const button=document.createElement("button")
    h2.innerText=dog.name
    img.src=dog.image
    if(dog.isGoodDog=true) {
        button.innerText="Good Dog!"
    } else {
        button.innerText="Bad Dog!"
    }
    const div=document.getElementById("dog-info")
    div.append(h2,img,button)
    button.addEventListener("click", ()=> {
        if (dog.isGoodDog===true) {
            button.innerText="Bad Dog!"
            dog.isGoodDog=false
            badToggle(dog);
        } else if (button.innerText==="Bad Dog!") {
            button.innerText="Good Dog!"
            dog.isGoodDog=true
            goodToggle(dog);
        }
    })
}
    

})