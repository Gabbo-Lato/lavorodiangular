import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  showAdditionalContainer = false;
  constructor(private router: Router) {}
  isHomepageVisible = true;
  showContainer() {
    if (this.showAdditionalContainer === false) {
      this.showAdditionalContainer = true;
    } else {
      this.showAdditionalContainer = false;
    }
  }

}
