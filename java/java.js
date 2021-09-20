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
let QUS = document.getElementById('QUS');
let MODAL12 = document.getElementById('MODAL12');



new WOW().init();
//background-color: rgb(29, 29, 29);
let addTask = ()=>{
   let task_data=inputData.value;
   if(inputData.value=="" || task_data.length<3||task_data.length>80 ){
       alert('Please Enter Valid Data');
   }else{
       NoTasks.style.display = "none";
       btns.style.display= "block";
       all_tasks.style.display="block";
       all_tasks.innerHTML += `
       <div id="tasksid" class  = "alert  main-color"> <p id="ptasks" class = " alltsk">${task_data}</p>
       <button   style="margin-top:-38px ;" class="del btn btn-danger float-right">Delete</button>
       </div>`
       btns.innerHTML = `<div class = " mx-auto alert alert-warning w-50">
       <div class="row botns"  >
       <button    class="marked delb ml-2 btn btn-danger  float-right">Delete Marked</button>
       <button  id= "btnall"  class="delb delb2 ml-2 btn btn-danger  ">Delete All</button> 
       </div>
       <!-- Button trigger modal -->
       <!-- Modal -->
       <div class="row HOW-btn">
       <button type="button" class=" btn btn-primary" data-toggle="modal" data-target="#exampleModal">
       Need Help?
</button>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Help Center</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>1-press on the text that you want to delete tasks by using the button "Delete Marked".<p>
        <p>2-the button "Delete All" used to delete all tasks.</p>
        <p>3-the light bulb used for switching between dark mood and light mood</p>
        <p>4-you cant add less than 3 characters</p>
        <p>Contact Us: <a href="https://www.facebook.com/ziadahmed19" target="__blank"> On Facebook</a></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
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
//so2al
document.addEventListener('click',function(e){
    if(e.target.classList.contains('main-color')){
        e.target.classList.toggle('main-color',false);
        e.target.classList.toggle('chng_color',true);
        e.target.classList.toggle('alltsk',false);
        e.target.classList.toggle('lineSsss',true);
    }
     if(e.target.classList.contains('alltsk')){
        e.target.parentElement.classList.toggle('main-color',false);
        e.target.parentElement.classList.toggle('chng_color',true);
        e.target.classList.toggle('alltsk',false);
        e.target.classList.toggle('lineSsss',true);
     }
    
});
/*document.addEventListener('click',function(e){
    if(e.target.classList.contains('lineSsss') ){
         e.target.parentElement.classList.toggle('chng_color',false);
         e.target.parentElement.classList.toggle('main-color',true);
         e.target.classList.toggle('lineSsss',false);
         e.target.classList.toggle('alltsk',true);
    }
    
});*/
document.addEventListener('click',function(e){
    if(e.target.classList.contains('mood')){
        if(container.style.backgroundColor=="white"){
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
});
document.addEventListener('click',function(e){
    if(e.target.classList.contains('delb2')){
        btns.style.display= "none";
        NoTasks.style.display="block";
        //remove
         while(true){
                 let i=0;
            if(all_tasks.childElementCount>0){
            all_tasks.children[i].remove();
            i++;
            }
            if(all_tasks.childElementCount==0){
                break;
            }
        } 
    }
  });
  document.addEventListener('click',function(e){
    if(e.target.classList.contains('marked')){       
        //remove-selected
        let i=0;
        let j =0;
        while(true){
            if(all_tasks.children[i].classList.contains('chng_color')){
                all_tasks.children[i].remove();
                i=0;
            }
            else{
                i++;
            }
           
            
            if(all_tasks.childElementCount==0){
                btns.style.display= "none";
                NoTasks.style.display="block";
                   break;
               }
              

        }
        
    }
});