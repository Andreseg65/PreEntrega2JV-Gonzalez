let inventario = [];

function mostrarInventario() {
  if (inventario.length === 0) {
    console.log("El inventario está vacío.");
  } else {
    console.log("Inventario actual:");
    inventario.forEach((cuaderno, index) => {
      console.log(
        `${index + 1}. Nombre Cuaderno: ${cuaderno.nombre}, Tipo: ${cuaderno.tipo}, Categoría: ${cuaderno.categoria}, Precio: $${cuaderno.precio}, Cantidad: ${cuaderno.cantidad}`
      );
    });
  }
}

function agregarcuaderno() {
  let nombre = prompt("Ingresa el nombre del cuaderno:");
  let tipo = prompt("Ingresa el tipo del cuaderno:");
  let categoria = prompt("Ingresa la categoría del cuaderno:");
  let precio = parseFloat(prompt("Ingresa el precio del cuaderno:"));
  let cantidad = parseInt(prompt("Ingresa la cantidad de cuadernos en inventario:"));

  let cuaderno = {
    nombre,
    tipo,
    categoria,
    precio,
    cantidad,
  };

  inventario.push(cuaderno);
  console.log(`cuaderno "${nombre}" agregado al inventario.`);
}

function eliminarcuaderno() {
  let nombre = prompt("Ingresa el nombre del cuaderno a eliminar:");
  let index = inventario.findIndex((cuaderno) => cuaderno.nombre.toLowerCase() === nombre.toLowerCase());

  if (index !== -1) {
    inventario.splice(index, 1);
    console.log(`cuaderno "${nombre}" eliminado del inventario.`);
  } else {
    console.log("El cuaderno no se encontró en el inventario.");
  }
}

function modificarcuaderno() {
  let nombre = prompt("Ingresa el nombre del cuaderno a modificar:");
  let index = inventario.findIndex((cuaderno) => cuaderno.nombre.toLowerCase() === nombre.toLowerCase());

  if (index !== -1) {
    let cuaderno = inventario[index];
    cuaderno.nombre = prompt(`Nuevo nombre (${cuaderno.nombre}):`, cuaderno.nombre) || cuaderno.nombre;
    cuaderno.tipo = prompt(`Nuevo tipo (${cuaderno.tipo}):`, cuaderno.tipo) || cuaderno.tipo;
    cuaderno.categoria = prompt(`Nueva categoría (${cuaderno.categoria}):`, cuaderno.categoria) || cuaderno.categoria;
    cuaderno.precio = parseFloat(prompt(`Nuevo precio (${cuaderno.precio}):`, cuaderno.precio)) || cuaderno.precio;
    cuaderno.cantidad = parseInt(prompt(`Nueva cantidad (${cuaderno.cantidad}):`, cuaderno.cantidad)) || cuaderno.cantidad;
    console.log(`cuaderno "${cuaderno.nombre}" modificado.`);
  } else {
    console.log("El cuaderno no se encontró en el inventario.");
  }
}

function buscarcuadernos() {
  let criterio = prompt("Buscar por: 1. Nombre 2. Tipo 3. Categoría");
  let termino = prompt("Ingresa el término de búsqueda:");

  let resultados = inventario.filter((cuaderno) => {
    if (criterio === "1") {
      return cuaderno.nombre.toLowerCase().includes(termino.toLowerCase());
    } else if (criterio === "2") {
      return cuaderno.tipo.toLowerCase().includes(termino.toLowerCase());
    } else if (criterio === "3") {
      return cuaderno.categoria.toLowerCase().includes(termino.toLowerCase());
    }
    return false;
  });

  if (resultados.length > 0) {
    console.log("Cuadernos encontrados:");
    resultados.forEach((cuaderno) => {
      console.log(`Nombre: ${cuaderno.nombre}, Tipo: ${cuaderno.tipo}, Categoría: ${cuaderno.categoria}`);
    });
  } else {
    console.log("No se encontraron cuadernos con ese criterio.");
  }
}

let opcion = "";

while (opcion !== "6") {
  opcion = prompt(
    "Administración de Inventario de Cuadernos\n1. Agregar cuaderno\n2. Eliminar cuaderno\n3. Modificar cuaderno\n4. Ver Inventario\n5. Buscar cuadernos\n6. Salir\nIngresa una opción (1-6):"
  );

  if (opcion === "1") {
    agregarcuaderno();
  } else if (opcion === "2") {
    eliminarcuaderno();
  } else if (opcion === "3") {
    modificarcuaderno();
  } else if (opcion === "4") {
    mostrarInventario();
  } else if (opcion === "5") {
    buscarcuadernos();
  } else if (opcion === "6") {
    console.log("Saliendo del sistema de administración.");
  } else {
    console.log("Opción no válida. Intenta de nuevo.");
  }
}
