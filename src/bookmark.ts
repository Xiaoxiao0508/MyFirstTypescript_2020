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

  setUrl(link: string) {
    this.Bookmark.Link = link;
  }

  spawn(Root: HTMLElement) {
    this.Item = document.createElement("div") as HTMLDivElement;
    this.Item.classList.add("bookmark");

    let Icon = document.createElement("P1");
    let symble = document.createElement("img") as HTMLImageElement;
    symble.src = this.Bookmark.Icon;
    symble.width = 30;
    Icon.appendChild(symble);
    Icon.classList.add("icon");

    let Title = document.createElement("div");
    Title.appendChild(document.createTextNode(this.Bookmark.Title));
    Title.appendChild(document.createElement("br"));
    Title.appendChild(document.createTextNode(this.Bookmark.Link));
    Title.classList.add("title");

    let fav = document.createElement("img") as HTMLImageElement;
    fav.src = "https://image.flaticon.com/icons/png/512/14/14815.png";
    fav.width = 20;
    fav.classList.add("fav");
    if (this.Bookmark.Favourite == true)
      fav.onclick = () => {
        fav.style.backgroundColor = "red";
      };
    this.Item.appendChild(Icon);
    this.Item.appendChild(Title);
    this.Item.appendChild(fav);

    Root.appendChild(this.Item);
  }
}
