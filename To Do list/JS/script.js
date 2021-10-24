var input=document.getElementById("input");
var add_task=document.getElementById("add");
var list=document.getElementById("list");
var del=document.getElementsByClassName("delete");
var refresh=document.getElementById("refresh");

function addtask(){
	task=  '<div class="item">'+
              '<input type="checkbox" class="checkbox">'+
              '<label class="text" contenteditable="true">'+input.value+'</label>'+
              '<span class="delete">x</span>'+
            '</div>'

	list.insertAdjacentHTML("beforeend",task)	
	input.value=""
};
function checkinput(){
	if(input.value.length>0){
		addtask()
	}	
}
function checkkey(event){
	if(event.which ==13){
		checkinput()
	}
}
function dyanamictasks(event){
	var element=event.target
	var elementtask= event.target.className
	if(elementtask=="delete")
	{
		removetask(element)
	}
	/*
	var checkbox=event.target.type
	if(checkbox=="checkbox")
	{
		if(event.target.checked)
		{

		}
	}
	*/
}
function removetask(element){
	element.parentNode.parentNode.removeChild(element.parentNode)
}
function refreshtasks(){
	while(list.children.length){
		list.removeChild(list.childNodes[0])
	}
}
add_task.addEventListener("click",checkinput)
input.addEventListener("keypress",checkkey)
list.addEventListener("click",dyanamictasks)
refresh.addEventListener("click",refreshtasks)