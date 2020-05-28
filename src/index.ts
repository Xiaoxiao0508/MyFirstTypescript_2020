import { Bookmark,Bookmarkitem } from "./bookmark";
let add=document.getElementById("add") as HTMLButtonElement;
add.onclick=function(){
let bookmark1=new Bookmark("w3school","icon")
let row=document.getElementById("row")
let bookmarkitem1=new Bookmarkitem(bookmark1);
bookmarkitem1.setUrl("http://item1")
}

