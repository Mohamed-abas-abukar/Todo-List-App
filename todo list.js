

const inputFeild = document.querySelector('.input') ;
const submitButton = document.querySelector('.submit-btn');
const showList = document.querySelector('.autput-ui');
const message = document.querySelector('.msg');
const clearAll = document.querySelector('.clear-btn');
const form  = document.querySelector('.form' );


form.addEventListener('submit',diplayInput);

// aoutput 

showList.addEventListener('click',deleteData);

// clearAll 

clearAll.addEventListener('click',clearAllData);


function diplayInput(e){
   e.preventDefault();

    if(inputFeild.value === '') {
        alert('Empy task ');
    }
    else {

   
     let task = document.createElement('li');
     task.classList = 'task'
     task.appendChild(document.createTextNode(inputFeild.value));


     let divAccon = document.createElement('div');
      divAccon.classList = 'accons';
     let remove = document.createElement('a');
     

     let done = document.createElement('a');
      
     
     let removeImg = document.createElement('img');
       removeImg.classList = 'removeBtn';
     let doneImg = document.createElement('img');
      doneImg.classList = 'doneBtn';
 

  removeImg.src = './delete.png';
  doneImg.src = './check.png';

     remove.appendChild(removeImg);
     done.appendChild(doneImg);

  
  
     divAccon.appendChild(remove);
     divAccon.appendChild(done);

     task.appendChild(divAccon);

     let container = document.createElement('div');
     container.classList = "container";

     showList.appendChild(task);

     inputFeild.value = "";

     message.style.display = 'none';

   

    }

 
    
}


function deleteData(e){
 if(e.target.classList.contains('removeBtn')){
    e.target.parentElement.parentElement.parentElement.remove();

 }
 else if(e.target.classList.contains('doneBtn')){
    e.target.parentElement.parentElement.parentElement.style.backgroundColor="lightGreen";
    e.target.parentElement.parentElement.parentElement.style.textDecoration = "line-through";
    e.target.parentElement.parentElement.parentElement.style.color = "black";
 }

}


// clearAll function 

function clearAllData(e){
    while(showList.firstChild){
       showList.removeChild(showList.firstChild);
    }

}