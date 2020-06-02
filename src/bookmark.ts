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
        let row = document.getElementById("row") as HTMLDivElement;
        let title = document.getElementById("title") as HTMLElement;
        title.innerHTML = this.Bookmark.Title;
        let icon = document.getElementById("icon") as HTMLElement;
        icon.innerHTML=this.Bookmark.Icon;
        
        let url=document.getElementById("url") as HTMLElement;

        url.innerHTML=link;
        
    }
}
