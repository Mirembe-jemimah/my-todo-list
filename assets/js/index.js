
const posts = [];

// simple form processing
const form = document.querySelector("form");
let text1 = form.text1;
let text2 = form.text2;
let text3 = form.text3;
let text4 = form.text4;
let text5 = form.text5;

//getting elememts by using id
 text1 = document.getElementById('text1');
 text2 = document.getElementById('text2');
 text3 = document.getElementById('text3');
 text4 = document.getElementById('text4');
//text4 = document.appendChild('text4');
  text5 = document.getElementById('text5');
// function createFormItem(sixth) {
//     let input = document.createElement('text6');
//     input.textContent = sixth;
//     return input;
// }

// const forms = document.querySelector('#forms');
// forms.appendChild(createFormItem('sixth thing'));

const node = document.createElement("text6");
const textnode = document.createTextNode("Sixth item");
node.appendChild(textnode);
document.getElementById("text6").appendChild(node)
 
 

form.addEventListener('submit', (e) => {
    e.preventDefault();  // stop operations until i say so


    let todo = {
        text1: text1.value,
        text2: text2.value,
        text3: text3.value,
        text4: text4.value,
        text5: text5.value,
    }

    // console.log('submited', blogBost)
    const posts = [todo]
    console.log('submitted', posts)
})
