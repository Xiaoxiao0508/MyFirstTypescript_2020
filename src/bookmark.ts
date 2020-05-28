export class Bookmark{
    Title:string;
    Icon:string;
    Favourite:boolean=false
constructor(pTitle:string,pIcon:string){
    this.Title=pTitle;
    this.Icon=pIcon
}


}
export class Bookmarkitem{
    Bookmark:Bookmark;
    Item:HTMLElement|null=null
constructor(Pbookmark:Bookmark){
    this.Bookmark=Pbookmark;
}
    setUrl(link:string){
     this.Item=document.getElementById("row");
    this.Bookmark.Title=document.getElementById("Title")!.innerHTML;
    this.Bookmark.Icon=document.getElementById("icon")!.innerHTML;
    link=document.getElementById("url")?.innerHTML!;
    }
}
