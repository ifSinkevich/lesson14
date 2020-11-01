'use strict';

const DomElement = function() {
    this.height = '';
    this.width ='';
    this.bg = '';
    this.fontSize = '';
    this.selector = '';
    this.creator = function() {

        if (this.selector[0] === ".") {
          let className = this.selector.slice(1);
          const newElem = document.createElement('div');
          newElem.classList.add('className');
          newElem.textContent = 'hi';
          document.body.append(newElem);
        };

        if (this.selector[0] === "#") {          
          let idName = this.selector.slice(1);
          const newElem = document.createElement('p');
          newElem.setAttribute('id', idName);
          newElem.textContent = 'hi-hi';
          document.body.append(newElem);
        };        
    };
};


const domElement = new DomElement;

domElement.height = '1000px';
domElement.width = '1000px';
domElement.bg = 'blue';
domElement.fontSize = '120px';
domElement.selector = '#lalala';

domElement.creator();


 


