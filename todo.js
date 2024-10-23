let todo=document.querySelector('.list-body');
let taskInput=document.querySelector('#task');
let btn=document.querySelector('.btn');
let done=document.querySelector('.completed-body');


btn.addEventListener('click',(event)=>{
    let task=taskInput.value;

    todo.innerHTML+=`
    <div>
    <input type="checkbox" class="form-check-input" id="currenttask" name="currenttask" value="${task}"> <p class="d-inline">${task}</p>
    </div>
    `
    taskInput.value=''
})

todo.addEventListener('change',(event)=>{
    if (event.target.type=='checkbox'){
        if (event.target.checked){
            console.log(event.target.value);
            event.target.nextElementSibling.remove()
            event.target.remove()
            
            done.innerHTML+=`
            <p class="m-0">✔ ${event.target.value}</p>
            `

            // event.target.value=''

        }
    }
})
