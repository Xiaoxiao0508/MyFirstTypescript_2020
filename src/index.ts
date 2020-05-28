import { Bookmark } from "./bookmark";

let bookmark1=new Bookmark("w3school","icon")
let title:string=document.getElementById("Title")?.innerHTML!;
bookmark1.Title=title;