let addbtn = document.getElementById('addbtn');
let all_tasks = document.getElementById('all_tasks');
let inputData = document.getElementById('inputData');
let NoTasks = document.getElementById('NoTasks');
let mood1 = document.getElementById('mood1');
let con11 = document.getElementById('con11');
let container = document.getElementById('cont');
let h1 = document.getElementById('todo');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let btns = document.getElementById('btns');
let ptasks = document.getElementById('ptasks');
let btnall = document.getElementById('btnall');
let tasksid = document.getElementById('tasksid');
new WOW().init();








//background-color: rgb(29, 29, 29);



let addTask = ()=>{
   let task_data=inputData.value;
   if(task_data.trim() =="" || task_data.length<3||task_data.length>80 ){
       alert('Please Enter Valid Data');
   }else{
       NoTasks.style.display = "none";
       btns.style.display= "block";
       all_tasks.style.display="block";
       all_tasks.innerHTML += `
       <div id="tasksid" class  = "tasks_div alert alert-primary"> <p id="ptasks" class = "alltsk">${task_data}</p>
       <button   style="margin-top:-38px ;" class="del btn btn-danger float-right">Delete</button>
       </div>`
       btns.innerHTML = `<div class = " mx-auto alert alert-warning w-50">
       <div class="row botns"  >
       <button    class="delb ml-2 btn btn-danger  float-right">Delete Marked</button>
       <button  id= "btnall"  class="delb delb2 ml-2 btn btn-danger  ">Delete All</button>
       </div>
       </div>`
      inputData.value="";
   }
}
let show2 =()=>{
    if(all_tasks.childElementCount ==  0){
        NoTasks.style.display = "block";
        btns.style.display = "none";


    }
}
document.addEventListener('click',function(e){
    if(e.target.classList.contains('alltsk')){
       e.target.parentElement.style.backgroundColor="rgb(255, 187, 162)";
      
    }
    
})
document.addEventListener('click',function(e){
    if(e.target.classList.contains('alltsk')){
        //alwan
       if(ptasks.parentElement.style.backgroundColor=="rgb(255, 187, 162)"){
        ptasks.parentElement.style.backgroundColor=="black";
       }
      
    }
    
})

document.addEventListener('click',function(e){
    if(e.target.classList.contains('mood')){
        if(this.body.style.backgroundColor=="rgb(47, 138, 241)"){
        this.body.style.backgroundColor = "black";
        mood1.style.color ="rgb(47, 138, 241)";
        con11.style.backgroundColor ="black";
        container.style.backgroundColor=" rgb(29, 29, 29)";
        h1.style.color="white";
        card1.style.backgroundColor="rgb(29, 29, 29)";
        card2.style.backgroundColor="rgb(29, 29, 29)";



        }
        else{
            this.body.style.backgroundColor="rgb(47, 138, 241)";
            mood1.style.color ="black";
            con11.style.backgroundColor ="rgb(47, 138, 241)";
            container.style.backgroundColor="white";
            h1.style.color="black";
            card1.style.backgroundColor="white";
            card2.style.backgroundColor="white";


        }
    }
})
addbtn.addEventListener('click',addTask);
document.addEventListener('click',function(e){
  if(e.target.classList.contains('del')){
      e.target.parentElement.remove();
      show2();

  }
})
document.addEventListener('click',function(e){
    if(e.target.classList.contains('delb2')){
       
        btns.style.display= "none";
        all_tasks.style.display="none";
                   
        NoTasks.style.display="block";
        //remove
             while(true){
                 let i=0;
            if(all_tasks.childElementCount>0){
            all_tasks.children[i].remove();
            }
            else if(all_tasks.childElementCount<i){
                i=0;
            }
            if(all_tasks.childElementCount==0){
                break;
            }

        } 
  
    }
   
  })
  






