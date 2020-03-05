module.exports =  "<main>" +
"<h1> Calculator </h1>" +
"<form action='/calculator' method='POST'>" +
  "<label for='First_Number'>  First Number  </label>" +
  "<input type='number' name='First_Number'/>" +
  "<br>" +
  "<br>" +
    "<label for='operators'>operator</label>" +
    "<select name='operators'>"+
        '<option value="sum">+</option>'+
        '<option value="multiply">X</option>'+
        '<option value="divide">%</option>'+
        '<option value="subtract">-</option>'+
    "</select>"+
  "<br>" +
  "<br>" +
    "<label for='Second_Number'>  Second Number  </label>" +
    "<input type='number' name='Second_Number'/>" +
  "<br>" +
  "<br>" +
    // "<input type='submit' value='result'/>" +
    "<h2> Do you want to see your image here? </h2>" +
  //   "<label for='link'>paste a link and submit</label>" +
  
  //   "<input type='link' name='link'/>" +
  // "<br>" +
  //   "<input type='submit' value='submit'/>" +
    `<br>
    <label for='imageLink'> Paste a link and submit and see the image</label>
    <input type='text' name='imageLink'>
    <br>
    <input type='submit' value='submit'/>`
    
   
"</form>" +

"</main>"
