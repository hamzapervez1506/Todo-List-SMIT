let addbtn=document.getElementById("addbtn")
let input=document.getElementById("inputfield")
let savebtn=document.getElementById("savebtn")
let todolist=document.getElementById("list")
let delbtn=document.getElementById("delbtn")
let editedli=null;
savebtn.style.display="none"
delbtn.style.display="none"
function add(){    
    let inputval=input.value;

    if(inputval.trim()){
        let createli=document.createElement("li")
        createli.innerText=inputval;
//edit
        let editbtn =document.createElement("button")
        editbtn.innerText="Edit";
        createli.appendChild(editbtn);
        editbtn.setAttribute("class", "bg-red");
        //del
        let delbtn=document.createElement("button")
        delbtn.innerText="Delete"
        createli.appendChild(delbtn)

        //append Li in OL
        todolist.appendChild(createli)
        delbtn.style.display="inline-block"
        //del li
        delbtn.addEventListener("click",function(){
            createli.remove();
            if (todolist.children.length===0){
                delbtn.style.display="none"
            }
        });

        editbtn.addEventListener("click", function () {
            let forEditText = createli.childNodes[0].nodeValue;
            inputval.value = forEditText;
            savebtn.style.display = "inline-block";
            addbtn.style.display = "none";
            editedli = createli;
          });
      
          //   Save Edited Todo
          savebtn.addEventListener("click", function () {
            savebtn.style.display = "none";
            addbtn.style.display = "inline-block";
            editedli.childNodes[0].nodeValue = inputval.value;
          });
        } else {
          alert("Please Input Todo");
        }
      
        inputval.value = "";
      }
      
      function deleteAll() {
        console.log(todolist.children.length);
        if (todolist.children.length > 0) {
          todolist.innerHTML = null;
        }
        delbtn.style.display = "none";
      }