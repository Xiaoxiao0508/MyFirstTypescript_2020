import { Bookmark, Bookmarkitem } from "./bookmark";
let add=document.getElementById("add") as HTMLButtonElement;
let bookmark1=new Bookmark("w3school","icon");
let bookmarkitem1=new Bookmarkitem(bookmark1);
let row=document.getElementById("row") as HTMLDivElement;
add.onclick=function(){
bookmarkitem1.setUrl("http://item1");
bookmarkitem1.spawn(row);

}

