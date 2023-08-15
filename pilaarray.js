class stack{
    contructor(){
        this.items = [];
    }
    isEmpty(){//verifica si esta vacio
        return this.items.length === 0;
    }
    size(){//retornar tamaño
        return this.items.length;
    }
    clear(){
        this.items = [];
    }

    push(item){
        this.items.push(item);//Ingresar un dato
    }
    pop(){
        if(this.isEmpty()){
            return "La pila esta vacia"//Eliminar un dato
        }
        return this.items.pop();
    }
    peek(){//revisar el primer dato encontrado
        if(this.isEmpty()){
            return "La pila esta vacia"
        }
        return this.items[this.items.length-1];
    }
}
const stack=new Stack

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek())
stack.pop()
console.log(stack.peek())
stack.clear()
console.log(stack.peek())
