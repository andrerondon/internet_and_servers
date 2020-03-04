module.exports =  "<main>" +
"<h1> Calculator </h1>" +
"<form action='/calculator'>" +
  "<label for='First_Number'>  First Number  </label>" +
  "<input type='number' name='First_Number'/>" +
  "<br>" +
    "<label for='operators'>operator</label>" +
    "<select name='operators'>"+
        '<option value="sum">+</option>'+
        '<option value="multiply">X</option>'+
        '<option value="divide">%</option>'+
        '<option value="subtract">-</option>'+
    "</select>"+
    "<label for='Second_Number'>  Second Number  </label>" +
  "<input type='number' name='Second_Number'/>" +
  "<br>" +
    "<input type='submit' value='submit'/>" +
"</form>" +

"</main>"
