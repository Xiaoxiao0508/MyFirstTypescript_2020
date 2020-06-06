export class Bookmark {
  Title: string;
  Icon: string;
  Link: string = "0";
  Favourite: boolean = false;
  constructor(pTitle: string, pIcon: string) {
    this.Title = pTitle;
    this.Icon = pIcon;
  }
}
export class Bookmarkitem {
  Bookmark: Bookmark;
  Item: HTMLElement | null = null;
  constructor(Pbookmark: Bookmark) {
    this.Bookmark = Pbookmark;
  }

  // let row = document.getElementById("row") as HTMLDivElement;
  // let title = document.getElementById("title") as HTMLElement;
  // title.innerHTML = this.Bookmark.Title;
  // let icon = document.getElementById("icon") as HTMLElement;
  // icon.innerHTML=this.Bookmark.Icon;
  setUrl(link: string) {
    this.Bookmark.Link = link;
  };


  spawn(Root: HTMLElement) {
    this.Item = document.createElement("div") as HTMLDivElement;
    this.Item.classList.add("bookmark");
   
   let Icon=document.createElement("P1");
  

    // Icon.appendChild(document.createTextNode(this.Bookmark.Icon));
    // Icon.classList.add("icon");
    // let Title= document.createElement("h2");
    // Title.classList.add("title");
    // Title.appendChild(document.createTextNode(this.Bookmark.Title));
    // let Link= document.createElement("h3");
    // Link.classList.add("link");
    // Link.appendChild(document.createTextNode(this.Bookmark.Link));
    // this.Item.appendChild(Icon);
    // this.Item.appendChild(Title);
    // this.Item.appendChild(Link);
    // Root.appendChild(this.Item);

    Icon.appendChild(document.createTextNode(this.Bookmark.Icon));
    Icon.classList.add("icon");
    let Title= document.createElement("div");
    Title.appendChild(document.createTextNode(this.Bookmark.Title));
    Title.appendChild(document.createElement("br"));
   
    Title.appendChild(document.createTextNode(this.Bookmark.Link));
    Title.classList.add("title")
    this.Item.appendChild(Icon);
    this.Item.appendChild(Title);
    Root.appendChild(this.Item);
  };

}
