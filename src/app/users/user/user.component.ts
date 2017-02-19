import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: Observable<string>;

  constructor(private route: ActivatedRoute, private localize: LocalizeRouterService, private router: Router) {
    this.user = route.params.map((p: any) => p.id);
  }

  goBack() {
    this.localize.translateRoute('../').subscribe((path: string) => {
      this.router.navigate([path], { relativeTo: this.route });
    });
  }
}
