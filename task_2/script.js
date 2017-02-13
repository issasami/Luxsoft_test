window.onload = function(){

    function addEvent(elem, type, handler){
        if(elem.addEventListener){
            elem.addEventListener(type, handler, false);
        } else {
            elem.attachEvent('on'+type, function(){ handler.call( elem ); });
        }
        return false;
    }

    var showPopup = document.querySelector('.popup-link'),
        hidePopup = document.querySelector('.hide-popup');

    addEvent(showPopup, 'click', function(e){
        document.querySelector('.popup-wrap').style.display = 'flex';
    });

    addEvent(hidePopup, 'click', function(e){
        document.querySelector('.popup-wrap').style.display = '';
    })
};
