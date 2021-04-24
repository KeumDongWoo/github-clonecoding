(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    //toggle-btn 을 클릭할시 감지
    $toggleBtn.addEventListener('click',function(){
        toggleElements();
    });

    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
    }
})(window, document)