import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { take } from "rxjs/operators";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  contact;

  constructor(translate: TranslateService) {
    translate
      .get("sections.contact")
      .pipe(take(1))
      .subscribe(value => {
        this.contact = value;
      });
  }

  openUrl(url) {
    switch (url) {
      case "email":
        url = "mailto: " + this.contact.email.address;
        break;
      case "phone":
        url = "tel:" + this.contact.phone.address;
        break;
      case "instagram":
        url = this.contact.socials.instagram.address;
        break;
      case "facebook":
        url = this.contact.socials.facebook.address;
        break;
    }
    window.open(url, "_blank");
  }
}
