import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  slug: string;

  profile$: Observable<any>;

  constructor(private route: ActivatedRoute, private apis: ApiService, private titleService: Title) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get("slug");
    console.log(this.slug);

    this.profile$ = this.apis.getCareerBySlug(this.slug).pipe(
      tap(res => {
        this.titleService.setTitle(res.title);
      })
    );
    
  }

}
