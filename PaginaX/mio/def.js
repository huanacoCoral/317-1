
                                document.getElementById("lista-alimentos").addEventListener("click", function(e)
                                //Cuando se hace clic en cualquier parte del elemento con el id "lista-alimentos"
                                    {
                                    if (e.target.tagName === "LI") // se verifica que el elemento sea tipo Li
                                    {//para quesolo se ejecuten los clics en los elementos de la lista
                                        var valorSeleccionado = e.target.textContent;//obtiene el contenido de texto del elemento <li>
                                                                                    // que fue clicado y lo almacena en la variable
                                        
                                        // Enviar el valor seleccionado al script PHP utilizando AJAX
                                        var xhr = new XMLHttpRequest();//Se crea un objeto XMLHttpRequest este objeto es fundamental para realizar solicitudes HTTP desde JavaScript
                                       //HTTP:Es el fundamento de la comunicación de datos en la web y define cómo se transmiten y reciben los recursos, como documentos HTML
                                        xhr.open("POST", "procesar_seleccion.php", true);//Se establece la solicitud HTTP a través del método POST y se especifica la URL del script PHP al que se enviarán los datos.
                                        
                                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//establece tipo de conexion
                                        xhr.onreadystatechange = function() //funciona para manejr el cambio de estado de solicitud.     readyState que indica el estado actual de la solicitud
                                        {// Cuando el estado de la solicitud es 4 (completado) y el código de estado es 200 (éxito), 
                                            if (xhr.readyState === 4 && xhr.status === 200) {//se actualiza el contenido del elemento con el id "resultado" con la respuesta del servidor.
                                                document.getElementById("AlimentoS").innerHTML = xhr.responseText;
                                            }
                                        };
                                        xhr.send("seleccionAlimento=" + encodeURIComponent(valorSeleccionado));
                                        
                                        //la solicitud se envía con los datos proporcionados como argumento en el método send()
                                        //encodeURIComponent() es una función de JavaScript que codifica una cadena para que sea válida para valorSeleccionado
                
                                    }
                                    });

                                    //nuevoooooooooo CANTIDAD

                                    document.getElementById("lista-Cantidad").addEventListener("click", function(e)
                                
                                    {
                                    if (e.target.tagName === "LI") // se verifica que el elemento sea tipo Li
                                    {//para quesolo se ejecuten los clics en los elementos de la lista
                                        var valorSeleccionado = e.target.textContent;//obtiene el contenido de texto del elemento <li>
                                                                                    // que fue clicado y lo almacena en la variable
                                        
                                        // Enviar el valor seleccionado al script PHP utilizando AJAX
                                        var xhr = new XMLHttpRequest();//Se crea un objeto XMLHttpRequest este objeto es fundamental para realizar solicitudes HTTP desde JavaScript
                                       //HTTP:Es el fundamento de la comunicación de datos en la web y define cómo se transmiten y reciben los recursos, como documentos HTML
                                        xhr.open("POST", "procesar_seleccion.php", true);//Se establece la solicitud HTTP a través del método POST y se especifica la URL del script PHP al que se enviarán los datos.
                                       // xhr.open("POST", "procesar_formulario.php", true);
                                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//establece tipo de conexion
                                        xhr.onreadystatechange = function() //funciona para manejr el cambio de estado de solicitud.     readyState que indica el estado actual de la solicitud
                                        {// Cuando el estado de la solicitud es 4 (completado) y el código de estado es 200 (éxito), 
                                            if (xhr.readyState === 4 && xhr.status === 200) {//se actualiza el contenido del elemento con el id "resultado" con la respuesta del servidor.
                                                document.getElementById("CantidadS").innerHTML = xhr.responseText;
                                            }
                                        };
                                        xhr.send("seleccionCantidad=" + encodeURIComponent(valorSeleccionado));
                                        //la solicitud se envía con los datos proporcionados como argumento en el método send()
                                        //encodeURIComponent() es una función de JavaScript que codifica una cadena para que sea válida para valorSeleccionado
                                    }
                                    });

                                    //nuevoooooooooo Unidad 

                                    document.getElementById("lista-Unidad").addEventListener("click", function(e)
                                
                                    {
                                    if (e.target.tagName === "LI") // se verifica que el elemento sea tipo Li
                                    {//para quesolo se ejecuten los clics en los elementos de la lista
                                        var valorSeleccionado = e.target.textContent;//obtiene el contenido de texto del elemento <li>
                                                                                    // que fue clicado y lo almacena en la variable
                                        
                                        // Enviar el valor seleccionado al script PHP utilizando AJAX
                                        var xhrA = new XMLHttpRequest();//Se crea un objeto XMLHttpRequest este objeto es fundamental para realizar solicitudes HTTP desde JavaScript
                                       //HTTP:Es el fundamento de la comunicación de datos en la web y define cómo se transmiten y reciben los recursos, como documentos HTML
                                        xhrA.open("POST", "procesar_seleccion.php", true);//Se establece la solicitud HTTP a través del método POST y se especifica la URL del script PHP al que se enviarán los datos.
                                      
                                        xhrA.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//establece tipo de conexion
                                        xhrA.onreadystatechange = function() //funciona para manejr el cambio de estado de solicitud.     readyState que indica el estado actual de la solicitud
                                        {// Cuando el estado de la solicitud es 4 (completado) y el código de estado es 200 (éxito), 
                                            if (xhrA.readyState === 4 && xhrA.status === 200) {//se actualiza el contenido del elemento con el id "resultado" con la respuesta del servidor.
                                                document.getElementById("UnidadS").innerHTML = xhrA.responseText;
                                            }
                                        };
                                        xhrA.send("seleccionUnidad=" + encodeURIComponent(valorSeleccionado));
                                        //la solicitud se envía con los datos proporcionados como argumento en el método send()
                                        //encodeURIComponent() es una función de JavaScript que codifica una cadena para que sea válida para valorSeleccionado
                                    }
                             });

                               
                                    function enviarDatosC() {
                                        // Obtener la información de los divs
                                        var alimento = document.getElementById("AlimentoS").textContent;
                                        var cantidad = document.getElementById("CantidadS").textContent;
                                        var unidad = document.getElementById("UnidadS").textContent;

                                        // Asignar los valores a campos ocultos del formulario
                                        document.getElementById("inputAlimento").value = alimento;
                                        document.getElementById("inputCantidad").value = cantidad;
                                        document.getElementById("inputUnidad").value = unidad;

                                        // Imprimir los valores en la consola para verificar
                                        console.log("Alimento:", alimento);
                                        console.log("Cantidad:", cantidad);
                                        console.log("Unidad:", unidad);
                                        return true; // Permite que el formulario se envíe
                                    }

                                