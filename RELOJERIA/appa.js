//Variable que mantiene el estado visible del carrito
var carritoVisible = false;

//Espermos que todos los elementos de la pàgina cargen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    
    //Agregremos funcionalidad a los botones eliminar del carrito ELIMINA EL BOTON elimina todo el carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');/*SE COMUNICA POR EL NOMBRE DE LA CLASE  */
   for(var i=0;i<botonesEliminarItem.length; i++){//itera sobre todos los elementos que tengan 'btn-eliminar'
       var button = botonesEliminarItem[i];// guarda cada uno de los botones Eliminar
       button.addEventListener('click',eliminarItemCarrito);// event listener" que escucha el evento de clic ('click') y llama a la función eliminarItemCarrito() cuando se produce este evento.
   }
}

//elimino el iten selecciona do del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;//e utiliza para identificar el elemento que ha desencadenado el evento de clic, es decir, el botón de eliminar en el que se hizo clic. 
    // parentElement dos veces, se navega hasta el elemento contenedor que envuelve todo el artículo del carrito
    //buttonClicked.parentElement.parentElement.remove();//elimina todos los pedidos
    buttonClicked.parentElement.remove();//elimina solo un pedido

    //Actualizamos el total del carrito
    actualizarTotalCarrito();
//la siguiente funciòn controla si hay elementos en el carrito

    //Si no hay elimino el carrito
    ocultarCarrito();
}

//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        var items =document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}
//Actualizamos el total de Carrito
function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];//encontrar todos los elementos con la clase "carrito", se accede al primer elemento encontrado utilizando la notación de corchetes y el índice 0
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');//
    var total = 0;
    //recorremos cada elemento del carrito para actualizar el total
    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        //quitamos el simobolo peso y el punto de milesimos.
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") + ",00";

}