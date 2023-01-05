let add_item_search_bar = document.getElementById('add_item');
let ul_task = document.getElementById('ul_tasks');
document.getElementById('small').style.display="none";

add_item_search_bar.addEventListener('focusout', ()=> {
  

  TOdo_item(); 

});
  
function TOdo_item(){

    // newlistitem//
let itemtext = add_item_search_bar.value;
    if (itemtext &&  itemtext !=0){
      document.getElementById('small').style.display="block";
    let newlist_item =  document.createElement("li");
    newlist_item.classList.add("element");   // element is a css class for styling the list item  
    ul_task.appendChild(newlist_item); 
    newlist_item.textContent = itemtext;
    add_item_search_bar.value = " ";
    newlist_item.addEventListener('click', ()=>newlist_item.classList.toggle('completed') )
    newlist_item.addEventListener('contextmenu', (e)=>{
          e.preventDefault();
          newlist_item.remove();
          
          } ) 


} 
}
