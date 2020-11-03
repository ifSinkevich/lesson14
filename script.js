'use strict';

const DomElement = function(height, width, bg, fontSize, selector, str, creator) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.selector = selector;
    this.str = str;
    this.creator = function() {

        if (this.selector[0] === ".") {
          let className = this.selector.slice(1);
          const newElem = document.createElement('div');
          newElem.classList.add('className');
          newElem.style.cssText = `width: ${this.width};
                            height: ${this.height}; 
                            background-color: ${this.bg};
                            font-size: ${this.fontSize};
                          `;
          newElem.textContent = `${this.str}`;
          document.body.append(newElem);
        };

        if (this.selector[0] === "#") {          
          let idName = this.selector.slice(1);
          const newElem = document.createElement('p');
          newElem.setAttribute('id', idName);
          newElem.style.cssText = `width: ${this.width};
                            height: ${this.height}; 
                            background-color: ${this.bg};
                            font-size: ${this.fontSize};
                          `;
          newElem.textContent = `${this.str}`;
          document.body.append(newElem);
        };        
    };
};


const domElement = new DomElement('500px', '500px', 'blue', '120px', '.lalala', 'hi');

domElement.creator();


 


