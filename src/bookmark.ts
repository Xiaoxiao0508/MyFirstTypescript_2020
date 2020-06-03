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
    this.Item.appendChild(document.createTextNode(this.Bookmark.Icon));
    this.Item.appendChild(document.createTextNode(this.Bookmark.Title));
    this.Item.appendChild(document.createTextNode(this.Bookmark.Link));
    Root.appendChild(this.Item);
  };
}
