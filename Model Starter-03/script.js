'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// as multiple show model are there so we need queryselectorAll
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);

const openModel = function(){
    //don't pass the class name with dot in classlist methods
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
};
const closeModal = function(){
    modal.classList.add('hidden');  
    overLay.classList.add('hidden');
    };    

for(let i = 0; i < btnsOpenModel.length; i++){
    btnsOpenModel[i].addEventListener('click', openModel);
}
 btnCloseModal.addEventListener('click',closeModal);
 overLay.addEventListener('click',closeModal);
 document.addEventListener('keydown', function(e){
//   console.log('A key was pressed');
//   console.log(e);
//   console.log(e.key);
 if(e.key === 'Escape' && !modal.classList.contains('hidden')){    
         closeModal();   
    }
 })
