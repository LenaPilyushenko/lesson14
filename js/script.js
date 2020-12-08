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
        newDiv.style.cssText = `height: ${height}; width: ${width}; background: ${bg}; fontSize : ${fontSize} ;`;
        newDiv.textContent = 'Любой текст';

        (this.selector.slice(0,1) === '.') ?
        newDiv.classList.add(srt) : (this.selector.slice(0,1) === '#') ? newDiv.id = srt : null;
    
    };
    
};

const myElem = new DomElement('.test', '150px', '300px', 'red', '14px');

myElem.elemCreate();
