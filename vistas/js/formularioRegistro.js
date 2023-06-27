
$(document).ready(function() {
    $("#benviar").on("click", function(event) {
        event.preventDefault(); 

        var hasErrors = false;

        var nameInput = $("#name");
        var nameError = $("#name-error");
        var name = nameInput.val().trim();
        if (name.length < 3 || name.length > 20) {
            nameError.text("El nombre debe tener entre 3 y 20 caracteres");
            hasErrors = true;
        } else {
            nameError.text("");
        }


        var apellidoInput = $("#appaterno");
        var apellidoError = $("#appaterno-error");
        var apellido = apellidoInput.val().trim();
        if (apellido.length < 3 || apellido.length > 20) {
            apellidoError.text("El apellido paterno debe tener entre 3 y 20 caracteres");
            hasErrors = true;
        } else {
            apellidoError.text("");
        }


        var emailInput = $("#email");
        var emailError = $("#email-error");
        var email = emailInput.val().trim();
        if (email.length === 0) {
            emailError.text("El campo de email es obligatorio.");
            hasErrors = true;
        } else {
            emailError.text("");
        }


        if (!hasErrors) {
            alert("Los datos han sido ingresados correctamente, te enviaremos un cuestionario de que te parecio nuestra pagina a tu correo personal.");
        }
    
});
    fetch('https://worldtimeapi.org/api/ip')
    .then(response => response.json())
    .then(data => {
        let fecha = new Date(data.datetime);
        let fechaISO = fecha.toISOString().slice(0,10); 
        let partes = fechaISO.split('-'); 
        let fechaFormateada = `${partes[2]-1}-${partes[1]}-${partes[0]}`;
        document.getElementById('fecha').innerHTML = fechaFormateada;
    })
    .catch(err => console.log(err));
});


$("#carrito-btn").click(function() {
    $("#carrito").toggle(); 
  });
  
var carrito = [];
var productos = [
  {nombre: 'Canon EOS R5', precio: 100.033},
  {nombre: 'Sony A7 III', precio: 200.023},
  {nombre: 'Nikon D850', precio: 904.330},
  {nombre: 'Canon EF 50mm f/1.8 STM', precio: 432.343},
  {nombre: 'Nikon AF-S 70-200mm f/2.8E', precio: 500.540},
  {nombre: 'Sony FE 24-70mm f/2.8 GM', precio: 423.443},
  {nombre: 'dron DJI Mavic 2 Pro', precio: 543.645},
  {nombre: 'dron DJI Phantom 4 Pro V2.0', precio: 434.654},
  {nombre: 'dron DJI Mini 2', precio: 133.221},
  {nombre: 'Sony PXW-FS7 II', precio: 432.432},
  {nombre: 'Blackmagic URSA', precio: 231.433},
  {nombre: 'Canon EOS C300 Mark III', precio: 243.233},
 
 
];

document.querySelectorAll('.btn').forEach(function(button, index) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    agregarAlCarrito(index);
    mostrarToast("Producto agregado al carrito");
  });
});

function mostrarToast(mensaje) {
    var toast = document.getElementById('toast');
    toast.textContent = mensaje;
    toast.className = "mostrar";
    
    // Después de 3 segundos, eliminar la clase "mostrar"
    setTimeout(function(){ toast.className = toast.className.replace("mostrar", ""); }, 3000);
  }



function agregarAlCarrito(index) {
  carrito.push(productos[index]);
  actualizarCarrito();
}

function actualizarCarrito() {
  var itemsCarrito = '';
  var total = 0;
  
  carrito.forEach(function(producto, index) {
    itemsCarrito += '<p>' + producto.nombre + ' - $' + producto.precio + ' <button onclick="quitarDelCarrito(' + index + ')">Quitar</button></p>';
    total += producto.precio;
  });
  
  document.getElementById('items-carrito').innerHTML = itemsCarrito;
  document.getElementById('total').innerText = 'Total: $' + total;
}

function quitarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}



