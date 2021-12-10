//mobile menu
const burgericon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgericon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

//tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'))
    tab.classList.add('is-active');

    const target = tab.dataset.target;
    tabContentBoxes.forEach(box => {
      if(box.getAttribute('id')===target){
        box.classList.remove('is-hidden');
      }else {
        box.classList.add('is-hidden');
      }
    });
  });
});

//Validacion Adicionar
const validar = document.querySelector('#Validar_Add');
const Input_Add = document.querySelector('#Nombre_Add');

validar.addEventListener('click', ()=> {
  
    //valido el nombre
    if (Input_Add.value === ''){
         Input_Add.classList.add('is-danger');
         Input_Add.focus();
    }
    else{
      Input_Add.classList.remove('is-danger');

    }
});


const Fecha_Add = document.querySelector('#Fecha_Add');

validar.addEventListener('click', ()=> {
  
    //valido el nombre
    if (Fecha_Add.value === ''){
         Fecha_Add.classList.add('is-danger');
         Fecha_Add.focus();
    }
    else{
      Fecha_Add.classList.remove('is-danger');

    }
});