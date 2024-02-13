// This is an environment provided by Haiku Academy to test async functions without the need to configure a server on your machine

import axios from 'axios'

// Your async code below

// Get First ToDo
// Create an async function getFirstTodo that uses axios to make a request to the url https://jsonplaceholder.typicode.com/todos/1 and returns the data of the response object.
// Test your code on the Simulation Platform.

// Test the following:

async function getFirstTodo1() {
  let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  return response.data
}

console.log(await getFirstTodo1()) // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }


// Get ToDo

// Create an async function getTodo that:

// receives a parameter number
// uses axios to make a request to the url https://jsonplaceholder.typicode.com/todos/1 replacing the last 1 with the parameter function
// returns the data of the response object
// Test your code on the Simulation Platform.

async function getFirstTodo(id) {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return response.data
  }
  

// Test the following:

console.log(await getTodo(1)) // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }) 
console.log(await getTodo(2)) // { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false })
console.log(await getTodo(3)) // { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false })



// Get Comments
// Create an async function getComments that:

// uses axios to make a request to the url https://jsonplaceholder.typicode.com/posts/1/comments
// returns the data of the response object
// Test your code on the Simulation Platform.

async function getComments() {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    return response.data
  }

// Test the following:

console.log(await getComments()) // [ { postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', ...}  5 objects total ]

