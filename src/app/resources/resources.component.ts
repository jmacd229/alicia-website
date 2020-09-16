import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {

  translate:TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  data: Array<IItem>;

  activeCategory: IItem;
  activeResource: IResource;

  activeResources: Array<IResource>;
  activeDetails: IResource;

  ngOnInit(): void {
    console.log(this.data);
    this.translate.get('sections.resources.resources').pipe(take(1)).subscribe((value) => {
      this.data = value;
    });
  }

  select(item: IItem = null) {
    if (!item) {
      if (!this.activeResource) {
        this.activeCategory = null;
      }
      this.activeResource = null;
    } else {
      if (item.resources) {
        this.activeCategory = this.activeCategory === item ? null : item;
        if (this.activeCategory) {
          this.activeResources = this.activeCategory.resources;
        } else if (this.activeResource) {
          this.activeResource = null;
        }
      } else {
        this.activeResource = this.activeResource === item ? null : item;
        if (this.activeResource) {
          this.activeDetails = this.activeResource;
        }
      }
    }
  }

}

interface IResource extends IItem {
  description?: String;
  link?: ILink;
  image?: String;
}

interface IItem {
  title: String;
  resources?: Array<IResource>
}

interface ILink {
  title: String;
  href: String;
}
