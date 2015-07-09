var nav = document.getElementById('navLinks');

var button =  document.getElementById('navButton');

button.addEventListener('click', function(){
    nav.classList.toggle('hideNav');
    nav.classList.toggle('showNav');
});

(function(){
    classSwitch();
}("docReady", window));

window.addEventListener('resize', classSwitch);

function classSwitch(){
    var width = window.innerWidth;
    if(width <= 768){
        nav.classList.add('hideNav');
        nav.classList.remove('showNav');
    }else{
        nav.classList.add('showNav');
        nav.classList.remove('hideNav');
    }
}

(function(){
    var counter = 0; 
        items = document.querySelectorAll('.slideshow figure'),
        next = document.querySelector('.next'),
        prev = document.getElementsByClassName('prev')[0];
    var numItems = items.length;

    var timer = setTimeout(cycle, 5000);

    function cycle(){
            next.click();
    }

    

        function reset(){
        timer = setTimeout(cycle, 5000);
        }


    
        
        function showCurrent(){
            var itemsToShow = Math.abs(counter%numItems);
            
            for (var i = 0; i < numItems; i++){
                items[i].classList.remove('show');
            }
            items[itemsToShow].classList.add('show');
        }
            next.addEventListener('click', function(){
                clearTimeout(timer);
                reset();
                counter++;
                showCurrent();
            });
            prev.addEventListener('click', function(){
                clearTimeout(timer);
                reset();
                counter--;
                showCurrent();
            });

            //function makeScroll(){
            //  next.click();
            //} 

            //setInterval(makeScroll, 6000);
})();

var timeOut;

function scrollToTop() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0){
        window.scrollBy(0, -10);
        timeOut = setTimeout('scrollToTop()', 10);

    }else{
        clearTimeout(timeOut);
    }
}

var div =  document.getElementById('overlay'),
    open = document.getElementById('openModal'),
    close = document.getElementById('closeModal');

function show(){
    
    div.classList.toggle('hide');
}

open.addEventListener('click', show);
close.addEventListener('click', show);
