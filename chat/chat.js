let chatmini=document.getElementById("chat-mini")
let chat=document.getElementById("chat")
let chatinput=document.getElementById("chat-input")

chatmini.addEventListener("click" , function(){
    chat.classList.add("active")
})
chat.querySelector(".close-icon").onclick=function(){
    chat.classList.remove("active")
}

chatinput.addEventListener("keypress",function(e){
    if(e.keyCode==13){
        e.preventDefault() 
    }
})

chatinput.addEventListener("keyup",function(e){
    if(e.keyCode==13){
        let userinput=this.value
            if(userinput.length){
                if(userinput[0].toUpperCase() ==userinput[0]){

            let div=document.createElement("div")
            div.className="message user"

            
            let textP=document.createElement("p")
            textP.innerText=userinput

            let timeP=document.createElement("p")
            timeP.className="time"

            let now=new Date();
            timeP.innerText=now.getHours() + ":" + now.getMinutes()
            div.appendChild(textP)
            div.appendChild(timeP)
            chat.querySelector("main").appendChild(div)
            chatinput.value=" ";
        }

        else{
            let div=document.createElement("div")
            div.className="message support"

            
            let textP=document.createElement("p")
            textP.innerText=userinput

            let timeP=document.createElement("p")
            timeP.className="time"

            let now=new Date();
            timeP.innerText=now.getHours() + ":" + now.getMinutes()
            div.appendChild(textP)
            div.appendChild(timeP)
            chat.querySelector("main").appendChild(div)
            chatinput.value=" ";
        }
    }
}

})