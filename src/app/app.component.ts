import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_CAPSULES, GET_CAPSULE, GET_CEO } from './graphql.operations';
import { Observable, map, tap } from 'rxjs';
import { Capsule_Query, Capsules_Query, Ceo_Query } from './queries';
import { Capsule } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ceo!: Observable<string>;
  capsule!: Observable<Capsule>;
  capsules!: Observable<Capsule[]>;
  page: number = 5;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.ceo = this.apollo
      .watchQuery<Ceo_Query>({ query: GET_CEO })
      .valueChanges.pipe(map((x) => x.data.company.ceo));

    this.getCapsules();
  }

  openDetails(id: string) {
    this.capsule = this.apollo
      .watchQuery<Capsule_Query>({
        query: GET_CAPSULE,
        variables: {
          capsuleId: id,
        },
      })
      .valueChanges.pipe(map((x) => x.data.capsule));
  }

  getCapsules() {
    this.capsules = this.apollo
      .watchQuery<Capsules_Query>({
        query: GET_ALL_CAPSULES,
        fetchPolicy: 'network-only',
        variables: {
          offset: 0,
          limit: this.page,
        },
      })
      .valueChanges.pipe(map((x) => x.data.capsules));
  }
}
