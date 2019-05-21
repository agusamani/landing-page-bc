import { format } from "util";

class Person {
  constructor(name, email, tech, message) {
      this.name = name;
      this.email = email;
      this.tech = tech;
      this.message = message;
  }

  addPerson() {
      return `${this.name}, ${this.email}, ${this.tech}, ${this.message}`
  }

}

let personList = [];
  
const personForm = document.querySelector('#form');

function savePerson(person) {

  personList.push(person);

  localStorage.setItem('persons', JSON.stringify(personList));
}

personForm.addEventListener('submit', function(e){
   e.preventDefault();

   const name = this.querySelector('#name');
   const email = this.querySelector('#email');
   const tech = this.querySelector('#tech');
   const message = this.querySelector('#message');

   const newPerson = new Person(name.value, email.value, tech.value, message.value)

   savePerson(newPerson.addPerson());

   this.reset();
})

function createModal() {
  
  let modal = document.createElement("div");
  let style = document.createElement("style");
  let modalClose = `<button class="modal-close">CLOSE</button>`;
  let css = `.my-modal {
    position: absolute;
    border: 1px solid black;
    margin: 100px 0 0 24%;
    background: white;
   }
   .modal-close {
     float: right;
     background: white;
     margin: 0 7px 9px 0;
     padding: 10px;
   }
   .modal-text {
     padding: 10px;
   }
   .modal-title{
     text-align: left;
     margin-top:5px;
   }
   @media screen and (min-width: 1000px) {
       .my-modal {
         margin: 120px 180px;
       }
   }
   `;
  let form = document.querySelector('#form');

     modal.setAttribute("class", "my-modal");
     modal.innerHTML = `
      <div class="modal-text">
        <h2 class="modal-title">Thank you for contacting us!</h2>
        <p>Remember, we'll get back to you after we get back from coding</p>
        ${modalClose}
      </div>
     `;
     form.appendChild(modal);

     modalClose = document.querySelector('.modal-close');

     style.appendChild(document.createTextNode(css))
     form.appendChild(style);

     if(modalClose) {
      modalClose.addEventListener('click', function() {
        modal.remove();
        style.remove();
      });
    }
}

form.addEventListener('submit', function(){
  createModal();
});
