let content = document.getElementById('content');
let button = document.getElementById('show-more');

button.onclick = function() {
    console.log('Evento disparado')
  if (content.className === 'open') {
    //shrink the box
    content.className = '';
    button.innerHTML = 'Show More';
  }
  // expand the box
  else {
    content.className = 'open';
    console.log(content.className)
    button.innerHTML = 'Show Less';
  }
};
    