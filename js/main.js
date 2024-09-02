let inventario = [];

function mostrarInventario() {
  console.log("Inventario actual: " + inventario.join(" - "));
}

let opcion = "";

while (opcion !== "4") {
  opcion = prompt("Administración de Cuadernos Artesanales\n1. Agregar Cuaderno\n2. Eliminar Cuaderno\n3. Ver Inventario\n4. Salir\nIngresa una opción (1-4):");

  if (opcion === "1") {  
    let cuaderno = prompt("Ingresa el nombre del cuaderno a agregar:");
    inventario.push(cuaderno);
    console.log("Cuaderno " + cuaderno + " agregado al inventario.");
  } else if (opcion === "2") {  
    let cuaderno = prompt("Ingresa el nombre del cuaderno a eliminar:");
    let index = inventario.indexOf(cuaderno);
    if (index !== -1) {
      inventario.splice(index, 1);
      console.log("Cuaderno " + cuaderno + " eliminado del inventario.");
    } else {
      console.log("El cuaderno no se encontró en el inventario.");
    }
  } else if (opcion === "3") { 
    mostrarInventario();
  } else if (opcion === "4") {  
    console.log("Saliendo del sistema de administración.");
  } else {
    console.log("Opción no válida. Intenta de nuevo.");
  }
}
