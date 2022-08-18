let index = 0;


function submit() {

const inputTag = document.getElementById('textValue'); //<input type="text" id="itxt" name="itxt" value="abcd"/>
const inputValue = inputTag.value; // "abcd"

if(inputValue.length < 3){
  alert('error')
  return;
}


let innerdiv = document.createElement('div'); // <div></div>
innerdiv.classList.add('inner');
innerdiv.innerText = inputValue; //<div>abcd</div>


let outerdiv = document.createElement('div'); // <div></div>
outerdiv.classList.add(`outer`);
outerdiv.classList.add(`element-${index}`);
outerdiv.appendChild(innerdiv); //<div>abcd</div>


const con = document.getElementById('container');       //<div id="con"></div>
container.appendChild(outerdiv) // <div id="con"><div>abcd</div></div>

function deleteFunction(e){
  const id = e.target.id;
  document.getElementsByClassName(id)[0].remove();  
}

let deleteBtn = document.createElement('button'); //<button> </button>
deleteBtn.innerHTML="delete" ;//<button> delete </button>
deleteBtn.id = `element-${index}`;
deleteBtn.onclick = deleteFunction;
outerdiv.appendChild(deleteBtn);

index++;

// deleteBtn.addEventListener ("click", function() {
//   deleteBtn.remove();
//   outerdiv.remove();
  
//     });


  }


  function reset(){
    const btn = document.getElementById('reset');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();
    const reset1= document.getElementById('textValue');
    reset1.value="";
    console.log(reset1);
  });
  }