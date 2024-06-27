
const openX = document.getElementById('openX');
const cambiandoX = document.getElementById('cambiandoX');
const closeX = document.getElementById('closeX');
// si se toca alguno de estos botones
openX.addEventListener('click', ()=>
{
    cambiandoX.classList.add('showA');//edita css para que aparezca la nueva ventana
   //alert('prueba'); //aparece mensaje en la pantalla
 
});
closeX.addEventListener('click', () =>
{
    cambiandoX.classList.remove('showA');//edita css para que desaparezca la nueva ventana
});

/***************************/ 
const buscar = document.getElementById('buscar');

const cambiandoZ = document.getElementById('buscador');

buscar.addEventListener('click', ()=>
{
    cambiandoZ.classList.add('showA');//edita css para que aparezca la nueva ventana
   //alert('prueba'); //aparece mensaje en la pantalla
 
});
const b = document.getElementById('Lbuscar');
b.addEventListener('click', () =>
{
    cambiandoZ.classList.remove('showA');//edita css para que desaparezca la nueva ventana
});