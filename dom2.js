var form=document.getElementById('addForm');
//console.log(form);
var itemlist=document.getElementById('items');
  //console.log(itemlist);

  var filter = document.getElementById('filter');

filter.addEventListener('keyup',filterItems);

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
  var description=document.getElementById('description').value;
//create new elemnet
   var li=document.createElement('li');

//add a class
   li.className='list-group-item';

//add text node
  li.appendChild(document.createTextNode(newItem));
  
  li.appendChild(document.createTextNode(description));

//add li elment itemslist

itemlist.appendChild(li);
  //console.log(li);

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
}


function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemlist.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    //console.log(item.firstChild);
    var itemName = item.firstChild.textContent;
    var desName=item.childNodes[1].textContent;
    if(desName!=undefined){
      console.log(desName)
    if((itemName.toLowerCase().indexOf(text) != -1)||(desName.toLowerCase().indexOf(text) != -1)){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  } else{
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
  } else {
     item.style.display = 'none';
  }
}
  
  });
}