var form=document.getElementById('addForm');
console.log(form);
var itemlist=document.getElementById('items');
  console.log(itemlist);


itemlist.addEventListener('click',deleteItem);


function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li=e.target.parentElement;
               itemlist.removeChild(li);

        }
    }
}

//form submit event
//form.addEventListener('submit',addItem);
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();



//create new elemnet
  var newItem=document.getElementById('item').value;
//create new elemnet
   var li=document.createElement('li');

//add a class
   li.className='list-group-item';

//add text node
  li.appendChild(document.createTextNode(newItem));

//add li elment itemslist

itemlist.appendChild(li);
  console.log(li);

  //create a new del button

var deletebtn=document.createElement('button');

//added class name
deletebtn.className='btn btn-danger btn-sm float-right delete';

//add text node
deletebtn.appendChild(document.createTextNode('X'));

li.appendChild(deletebtn);

itemlist.appendChild(li);

//let add edit button

var edit=document.createElement('button');

//add class btn
edit.className='btn btn-danger btn-sm float-right edit';

//add text edit
edit.appendChild(document.createTextNode('Edit'));
//add to edit btn to li

li.appendChild(edit);

itemlist.appendChild(li);