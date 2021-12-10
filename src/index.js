import _ from 'lodash';

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// function aa() {
//     alert("alert from webpack");
// }

// document.body.appendChild(component());
// document.body.appendChild(aa());

import $ from 'jquery';

$(document).ready(function () {

  $(body).html('hello6!!');
  // $('#content').append('<p>請輸入：<input type="text" id="enter"></p>');
  // $('#content').append('<p><input type="button" id="btn" value="Click"></p>');
  
  
  $('#btn').click(function () {
    let enter = $('#enter').val();
    show(enter);
  });
});

function show(enter) {
  if ((enter === 'undefined') || (enter == '')) {
    alert('no input!!');
  }
  else {
    alert("show alert...\n $`{enter}`" );
  }
}

