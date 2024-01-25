let nextId = 0

export function createTodos(text, completed = false) {
    return {
        id: nextId++,
        text,
        completed
    }
}

export const initialTodos = [
    createTodos('Get apples', true),
    createTodos('Get oranges', true),
    createTodos('Get potatoes', false,)
]