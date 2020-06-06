import { Bookmark, Bookmarkitem } from "./bookmark";
let add=document.getElementById("add") as HTMLButtonElement;
let List:Bookmarkitem[]=[];
let bookmark1=new Bookmark("w3school","icon");
let bookmarkitem1=new Bookmarkitem(bookmark1);
let bookmark2=new Bookmark("swinburne","icon");
let bookmarkitem2=new Bookmarkitem(bookmark2);
let box=document.getElementById("box") as HTMLDivElement;
// add.onclick=function(){
// bookmarkitem1.setUrl("http://item1");
// bookmarkitem1.spawn(row);

// }
bookmarkitem1.setUrl("http://item1");
bookmarkitem1.spawn(box);
bookmarkitem2.setUrl("http://item2");
bookmarkitem2.spawn(box);



