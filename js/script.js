'use strict';
 
const DomElement = function(selector = '.div', height = '100px', width = '200px', bg = 'red' , fontSize = '14px') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.elemCreate = function() {
        if (this.selector.slice(0, 1) === '.') {
            const srt = this.selector.slice(1);
            const newDiv = document.createElement('div');
            newDiv.classList.add(srt);
            document.body.append(newDiv);
            newDiv.style.cssText = `height: ${height};
                                    width: ${width};
                                    background: ${bg};
                                    fontSize : ${fontSize} ;
                                    textAlign: center;
                                    
            `;
            newDiv.textContent = 'Погнали';
        } 
        if (this.selector.slice(0, 1) === '#') {
            const newp= document.createElement('p');
            const srtId = this.selector.slice(1);
            newp.id = srtId;
            document.body.append(newp);
            newp.style.cssText = `height: ${height};
                                width: ${width};
                                background: ${bg};
                                fontSize : ${fontSize}  ;
                                position: absolute;
                              
            `;
            newp.textContent = 'Погнали';
        }
    };
  
};

function moveMyElem(callback){
  
    const target = document.querySelector('.square');
    const allStylee = window.getComputedStyle(target);
     
    const left = parseInt(allStylee.marginLeft);
    const top = parseInt(allStylee.marginTop);
     
    switch(callback.keyCode){
         
        case 37:  // клавиша влево
            if(left > 0)
                target.style.marginLeft = left - 10 + "px";
            break;
        case 38:   // клавиша вверх
            if(top > 0)
                target.style.marginTop = top - 10 + "px";
            break;
        case 39:   // клавиша вправо
            if(left < document.documentElement.clientWidth - 100)
                target.style.marginLeft = left + 10 + "px";
            break;
        case 40:   // клавиша вниз
            if(top < document.documentElement.clientHeight - 100)
                target.style.marginTop = top + 10 + "px";
            break;
    }
}

const myElem = new DomElement('.square', '100px', '100px', 'pink', '14px');

addEventListener('keydown', moveMyElem);

document.addEventListener("DOMContentLoaded", function(event) {
    myElem.elemCreate();
});