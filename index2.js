function submit() {
    //     var x = document.getElementById("itxt").value;
    //     document.getElementById("demo").innerHTML = x;
    
    //  var myDiv = document.getElementById("demo");
    
    // // create the button object and add the text to it
    // var button = document.createElement("BUTTON");
    // button.innerHTML = "delete";
    
    // // add the button to the div
    // myDiv.appendChild(button);
    
    
    const inputTag = document.getElementById('itxt'); //<input type="text" id="itxt" name="itxt" value="abcd"/>
    const inputValue = inputTag.value; // "abcd"
    
    let innerdiv = document.createElement('div'); // <div></div>
    innerdiv.classList.add('inner');
    innerdiv.innerText = inputValue; //<div>abcd</div>
    
    
    let outerdiv = document.createElement('div'); // <div></div>
    outerdiv.classList.add('outer');
    outerdiv.appendChild(innerdiv); //<div>abcd</div>
    
    
    const con = document.getElementById('container');       //<div id="con"></div>
    container.appendChild(outerdiv) // <div id="con"><div>abcd</div></div>
    
    
    let btn = document.createElement('button'); //<button> </button>
    btn.innerHTML="delete" ;//<button> delete </button>
    outerdiv.appendChild(btn);
    
    
    btn.addEventListener ("click", function() {
      outerdiv.remove();
      btn.remove();
        });
    
    
        
    
    
    //     const div = document.createElement("div");
    //     // 1. Create the button
    // var button = document.createElement("button");
    // button.innerHTML = "delete";
    
    // // 2. Append somewhere
    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild(button);
    
    // // 3. Add event handler
    // button.addEventListener ("click", function() {
    //   alert("");
    // });
    
    
      }
    
    
      function reset(){
        const btn = document.getElementById('reset');
    
    btn.addEventListener('click', function handleClick(event) {
      // 👇️ if you are submitting a form (prevents page reload)
      event.preventDefault();
        const reset1= document.getElementById('itxt');
        reset1.value="";
        console.log(reset1);
      });
      }