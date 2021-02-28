import React from 'react';

function App(){

  // This is the function that multiplies the numbers given by the user.
  function multiplyBy(){

    // Initializing Variable for below usage otherwise you will get the famous "variable not defined".
    var i = 1;
    var list = "";
    var table = +document.getElementById("firstNumber").value;
    var length = +document.getElementById("secondNumber").value;
    var result = document.getElementById("result");

    // If no number is entered then the default value for the first field will be 1 and then the second field as 5 would be entered.
    if(table == "0")
    {
      table = document.getElementById("firstNumber").defaultValue = 1;      
    }

    if(length == "0")
    {
      length = document.getElementById("secondNumber").defaultValue = 5;      
    }
    
    for(i=1; i <= length; i++)
    {
      list += ("<br>"+table+" x "+i+" = " +"<b>"+(table * i)+"</b>");  
    }

    /*
    Every time innerHTML is set, the HTML has to be parsed, a DOM constructed, and inserted into the document. Try to use temporary string variable instead. This prevents apending the same result everytime.
    For example when the user want to display multiplication table 3 with the range 2
    Then the output would be displayed as 3 * 1 = 3 and 3 * 2 = 6
    Now if the same user changes the range to 4
    With the help of the above logic the new result will be 3 * 1 = 3, 3 * 2 = 6, 3 * 3 = 9, 3 * 4 = 12
    */

    list += "";
    result.innerHTML = list;
    
  }

  return (

    // In react always the return in this file should be enclose by one html tag.
    <div class="container">
      <br></br>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Multiplication Table</h3>
          <h5 >Get the Multiplication Table You Want!</h5> 
          <div class="help-tip">
            <p> 
              <b>Tips to Success</b>
              
              <br></br>
              <br></br>

              • An Application that displays the multiplication tables based on the given input.
              
              <br></br>
              <br></br>

              • Enter 3 and 10 in the first and second input box respectively to view the table of 3 with range of 10.
            
              <br></br>
              <br></br>

              • The default value of the first input box is 1. Both the boxes takes only numbers as input.

              <br></br>
              <br></br>

              • The input for the second box is important, without it you would not be able to view the output.
            
            </p>
          </div>

          <form id = "final">
                <div class="form-group">
                    <label>Enter the Number</label>
                    <input type="text" class="form-control" id="firstNumber" placeholder="Multiplication Table Number" type="number" 
                      onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}/>
                    <small class="form-text text-muted">Example - To View Multiplication table of 3, enter 3</small>
                </div>
                
                <div class="form-group">
                  <label for="exampleInputEmail1">Enter the Range</label>
                  <input type="text" class="form-control" id="secondNumber" aria-describedby="emailHelp" placeholder="Enter the Range" 
                    onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}/>
                    <small class="form-text text-muted">Example - To View 10 results, enter 10 as range</small>
                </div>
                
                <button type="button" class="btn btn-primary" onClick={multiplyBy} id = "submit">Submit</button>
                <button class = "btn btn-primary" id = "clear">Clear</button>
              
                <p id = "result">
                
                </p>
              
            </form>  

        </div>
      </div>
</div>
  );
}

export default App;