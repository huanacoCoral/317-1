const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
// si se toca alguno de estos botones
open.addEventListener('click', ()=>
{
    modal_container.classList.add('show');//edita css para que aparezca la nueva ventana
   // alert('prueba'); aparece mensaje en la pantalla

});
close.addEventListener('click', () =>
{
    modal_container.classList.remove('show');//edita css para que desaparezca la nueva ventana
});