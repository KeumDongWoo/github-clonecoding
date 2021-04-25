(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    //toggle-btn 을 클릭할시 감지
    $toggleBtn.addEventListener('click',function(){
        toggleElements();
    });

    //off toggle element
    window.addEventListener('resize',function(){
        if(window.innerWidth > 1024){
            offElements()
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)