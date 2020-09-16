
export class ScrollableComponent {

  public nativeElement: HTMLElement;
  public title: String;
  public expanded = false;

  constructor(nativeElement: HTMLElement, title: string) {
    this.nativeElement = nativeElement;
    this.title = title;
  }

  public getYCoordinates(): number {
    if (this.nativeElement) {
      return this.nativeElement.offsetTop;
    }
  }

}
