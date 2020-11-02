'use strict';

const DomElement = function() {
    this.height = '500px';
    this.width ='500px';
    this.bg = 'blue';
    this.fontSize = '120px';
    this.selector = '#lalala';
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
          newElem.textContent = 'hi';
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
          newElem.textContent = 'hi-hi';
          document.body.append(newElem);
        };        
    };
};


const domElement = new DomElement;

domElement.creator();


 


