let btnEkle = document.querySelector("#liveToastBtn")
let taskDom = document.querySelector("#task")
let listDom = document.querySelector("#list")
let listUl = document.getElementsByTagName("li")

for (let i = 0; i < listUl.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    listUl[i].append(closeButton);
    listUl[i].onclick = check;
}

btnEkle.addEventListener('click', elemanEkle)

function removeButton(){
    this.parentElement.remove();
}

function check(){
    this.classList.toggle("checked");
}

function elemanEkle(){
    if (taskDom.value == taskDom.value.trim().length>0 ){
        $(".error").toast("show");
    }
    if (taskDom.value == "") {
       $(".error").toast("show"); 
    } else {
        $(".success").toast("show");

        let liDOM = document.createElement('li')
        listDom.appendChild(liDOM);
        liDOM.innerHTML = task.value;
        taskDom.value = "";
        liDOM.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00d7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        liDOM.append(closeButton);
        listDom.append(liDOM);
        inputElement.value = ("");
    }
}

