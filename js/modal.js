var div =  document.getElementById('overlay'),
	open = document.getElementById('openModal'),
	close = document.getElementById('closeModal');

function show(){
	debugger;
	div.classList.toggle('hide');
}

open.addEventListener('click', show);
close.addEventListener('click', show);

  