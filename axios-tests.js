// This is an environment provided by Haiku Academy to test async functions without the need to configure a server on your machine

import axios from 'axios'

// Your async code below

// Get First ToDo
// Create an async function getFirstTodo that uses axios to make a request to the url https://jsonplaceholder.typicode.com/todos/1 and returns the data of the response object.
// Test your code on the Simulation Platform.

// Test the following:

async function getFirstTodo() {
  let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  return response.data
}

console.log(await getFirstTodo()) // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

