


document.querySelectorAll(".quesion").forEach((quesion) => quesion.addEventListener("click", () => {

    

    if(quesion.parentNode.classList.contains("active")) {

        quesion.parentNode.classList.toggle("active")
        
    }
    else{
        document.querySelectorAll(".quesion").forEach(quesion => quesion.parentNode.classList.remove("active"))

        quesion.parentNode.classList.add("active")
    }


}))