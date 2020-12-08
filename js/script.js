'use strict';
 
const DomElement = function(selector = '.div', height = '100px', width = '200px', bg = 'red' , fontSize = '14px') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.elemCreate = function() {

        let elem = (this.selector.slice(0,1) === '.') ? 'div' : (this.selector.slice(0,1) === '#') ? 'p' : null;
        const srt = this.selector.slice(1);
        const newDiv = document.createElement(elem);
        document.body.append(newDiv);
        newDiv.style.cssText = `height: ${height}; width: ${width}; background: ${bg}; fontSize : ${fontSize} ; position:absolute; `;
        newDiv.textContent = 'Прокатимся?=)';

        (this.selector.slice(0,1) === '.') ?
        newDiv.classList.add(srt) : (this.selector.slice(0,1) === '#') ? newDiv.id = srt : null;
    
    };
    
};

function moveMyElem(callback){
  
    const target = document.querySelector('.square');
    const allStylee = window.getComputedStyle(target);
     
    const toleft = parseInt(allStylee.left);
    const totop = parseInt(allStylee.top);
     
    switch(callback.keyCode){
         
        case 37:  // клавиша влево
            if(toleft > 0)
                target.style.left = toleft - 10 + "px";
                console.log('target.style.left: ', target.style.left);
            break;
        case 38:   // клавиша вверх
            if(totop > 0)
                target.style.top = totop - 10 + "px";
            break;
        case 39:   // клавиша вправо
            if(toleft < document.documentElement.clientWidth - 100)
                target.style.left = toleft + 10 + "px";
            break;
        case 40:   // клавиша вниз
            if(totop < document.documentElement.clientHeight - 100)
                target.style.top = totop + 10 + "px";
            break;
    }
}

const myElem = new DomElement('.square', '100px', '100px', 'pink', '14px');

addEventListener('keydown', moveMyElem);

document.addEventListener("DOMContentLoaded", function(event) {
    myElem.elemCreate();
});

