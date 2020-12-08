'use strict';
 
const DomElement = function(selector = '.div', height = '100px', width = '200px', bg = 'red' , fontSize = '14px') {
    this.selector = selector;
    console.log('selector: ', this.selector.slice(0, 1));
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
            `;
            newDiv.textContent = 'Любой текст';
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
            `;
            newp.textContent = 'Любой текст';
        }
    };
    
};

const myElem = new DomElement('#test', '150px', '300px', 'red', '14px');

myElem.elemCreate();
