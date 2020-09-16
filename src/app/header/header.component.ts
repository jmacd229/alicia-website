import { ScrollableComponent } from './../models/ScrollableComponent';
import { Component, HostListener, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import { allAnimations } from '../animations/textAnimations';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [allAnimations]
})

export class HeaderComponent implements AfterViewInit {

  @ViewChild("triangle", { static: false }) triangleRef: ElementRef;

  triangle: HTMLElement;
  triangleOffset = 0;
  showBackToTop = false;
  readonly triangleHeight = 32;
  expand: Subject<Number> = new Subject();
  isExpanding = false;
  el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @Input() sections: Array<String>;

  ngAfterViewInit(): void {
    this.triangle = <HTMLElement>this.triangleRef.nativeElement;
    this.triangleOffset = this.triangle.offsetTop;
    this.el = <HTMLElement>((<HTMLElement>this.el).firstElementChild);
  }

  clickLink(section) {
    document.getElementById(section.id).scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    if (window.pageYOffset >= this.el.getBoundingClientRect().height - this.el.firstElementChild.getBoundingClientRect().height) {
      this.showBackToTop = true;
      if (!this.triangle.classList.contains("scroll")) {
        this.triangle.classList.add("scroll");
      }
      this.triangle.style.top = `${this.el.firstElementChild.getBoundingClientRect().height}px`;
    } else {
      this.showBackToTop = false;
      if (this.triangle.classList.contains("scroll")) {
        this.triangle.classList.remove("scroll");
      }
      this.triangle.style.top = "unset";
    }
  }

  backToTop() {
    (<HTMLElement>document.getElementsByClassName('back-to-top')[0]).style.display = 'none';
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
