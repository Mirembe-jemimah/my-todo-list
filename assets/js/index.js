
 const posts = [];

 // simple form processing
 //const lists =document.querySelector("todos");
const form = document.querySelector("form");
// let list1 = lists.list1;
// let list2 = lists.list2;
// let list3 = lists.list3;
let text1 = form.text1;



//add new todos
function nextTodo() {
  var li = document.createElement("li");
  var inp = document.getElementById("text1").value;
  var y = document.createTextNode(inp);
  li.appendChild(y);
  if (inp === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todos").appendChild(li);
  }
  document.getElementById("text1").value = "";
}


 form.addEventListener('submit', (e) => {
    e.preventDefault();  // stop operations until i say so


    let todo = {
        text1: text1.value,
          
    }

    // console.log('submited', posts)
    const posts = [todo]
    console.log('submitted', posts);
})
// todos.addEventListener('submit', (e) => {
//   e.preventDefault();  // stop operations until i say so


//   let todoj = {
//       list1: list1.value,
//       list2: list2.value,
//       list3: list3.value,
     
//   }

//   // console.log('submited', posts)
//   const posts = [todoj]
//   console.log('submitted', posts);
// })