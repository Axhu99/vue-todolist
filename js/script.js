const {createApp} = Vue;

const app = createApp({
    data:() =>({

        todos:[
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' }
        ],
        newTodo: ''
    }),

    methods: {
        removeTodo(id){
            const newTodos = this.todos.filter((task) =>{
                if(id !== task.id) return true
                else return false;
            })
            this.todos = newTodos
        },

        addTodo(){
            const newTodo = {
                id: 7,
                done: false,
                text: this.newTodo
            }

            return this.todos.push(newTodo) 
        }
    }

});

app.mount('#root');
