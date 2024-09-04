class Empleado {
    constructor(nombre, salario, departamento) {
        this.nombre = nombre;
        this.salario = salario;
        this.departamento = departamento
    }

    calcularSalario(aumento){
        this.salario += aumento;        
    }

    cambiarDepartamento(depto){
        this.departamento = depto;        
    }

    detalleEmpleado(){
         console.log(`Nombre: ${this.nombre}, Salario: ${this.salario}, Departamento: ${this.departamento}`)
    }
}

const miEmpleado = new Empleado("Juan Pérez", 5000, "Ventas");

miEmpleado.detalleEmpleado();
miEmpleado.calcularSalario(500);
miEmpleado.detalleEmpleado();
miEmpleado.cambiarDepartamento("Marketing");
miEmpleado.detalleEmpleado();
