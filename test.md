# MatchPint Junior Front-End developer test
  1. Given the following code what would you expect to see in the console?

ANSWER:  * I would expect to see a returned array of the ids, e.g.   
`[1, 2, 3]`


 2. Write a function that returns true if input is 10 or larger and false if 9 or less.

```
function isTenOrLarger(num) {
  if (num >= 10) {
    return true
  } else {
    return false
  }
}
```
OR 
```
function isTenOrLarger(num) {
  return num > 9 ? true : false
}

console.log(isTenOrLarger(0))
```

  3. Given the two React components below, could you explain any key differences in the two and when and why you might use one over the other?

ANSWER:  The first is a class component, the second is a functional component using an arrow function. Before React Hooks, the main difference was that you had to use a class component to handle state, whereas now you can use a functional component and the React hook `useState`. 
I would use functional components above class components as the code is cleaner and more readable. 

 4. If you were creating a component that required you to present data from an external source either static JSON file or a request to an API, where in a react component(class or functional) would you place that logic? You could write sample code or just explain in natural language if you would prefer.

ANSWER:
	a) After installing axios with npm/yarn, I would create a folder in my 		front-end src called ‘lib’ and inside this a new file called ‘api.js’. 
	b) I would then `import axios from 'axios'` and create a function 		using an HTTP request (GET) axios.get:

  e.g.
```
import axios from ‘axios’

const baseUrl = ‘https://exampleurlwithapi.com’

export function getApiData() {
  return axios.get(`${baseUrl}`)
}
```

	c) I would then probably use `useState` to render the data from said 		API on the page, depending on how it was needed. 

  5. Describe what you know about javascript Promises, why are they needed? What problem do they solve? What is the common promise syntax?

ANSWER: 
A JavaScript promise is used to handle asynchronous operations, where an outcome is currently unknown and may become available at a later time.  It can be one of three states - pending, resolved or rejected. 
Since JavaScript is single threaded, a promise means that another piece of code can be executed while the promise is still pending its result.

 6. Given the following code and the assumption that “body” has 100% height what would you expect the layout to look like and give a brief explanation of why?

ANSWER: 
Nothing would render because the divs are empty, however if they contained some content or if the divs were assigned a fixed height then they would be solid coloured blocks in a row with no gaps, with the blue and red taking up 25% of the width each and the yellow 50% of the width of the page.
