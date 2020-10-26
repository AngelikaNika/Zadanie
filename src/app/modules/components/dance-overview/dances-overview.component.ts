import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Dance } from 'src/app/shared/models/dance';
import { DancesService } from '../../services/dances.service';

@Component({
  selector: 'app-dances-overview',
  templateUrl: './dances-overview.component.html',
  styleUrls: ['./dances-overview.component.scss']
})
export class DancesOverviewComponent implements OnInit {
  dances$: Observable<Dance[]>;
  public danceToSearch: string;
  constructor(private dancesService: DancesService) { }

  ngOnInit() {
    console.log('overwiew component');
     this.dances$ = this.dancesService.getDancesByStatus()  //pobiera aktywne ogloszenia, a nie wszystkie
      .pipe(distinctUntilChanged());
  }

  onFilter(category: string): void {
    this.dancesService.filterDances(category);
  }

  sortByPriceAsc(): void {
    this.dancesService.getSortByPriceAsc();
  }
  sortByPriceDesc(): void {
    this.dancesService.getSortByPriceDesc();
  }
  sortByDateAsc(): void {
    this.dancesService.getSortByDateAsc();
  }
  sortByDateDesc(): void {
    this.dancesService.getSortByDateDesc();
  }

  onSearchClick() {
    console.log("OnSearchClick " + this.danceToSearch);
    this.dances$ = this.dancesService.getDancesByTitle(this.danceToSearch);
  }

  onNewDance(): void {
    const newDance = {
        id: '5',
        image: 'Na skraju załamania',
        title: 'Cha-cha',
        type: '',
        danceToSearch: '2018-02-15',
        price: '28,49',
        categories: ['Taniec'],
        description: 'Taki taniec latynoski'
    } as unknown as Dance;
    this.dancesService.saveDance(newDance);
  }


}
