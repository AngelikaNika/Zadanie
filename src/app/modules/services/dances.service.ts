import { Category } from 'src/app/shared/models/category';
import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { Status } from 'src/app/shared/models/status';
import { Dance } from 'src/app/shared/models/dance';

@Injectable({
  providedIn: 'root'
})
export class DancesService {
  private origindances: Dance[];
  private dances$: BehaviorSubject<Dance[]> = new BehaviorSubject<
    Dance[]
  >([]);
  private currentCategory: Category = Category.ALL;

  constructor(private apiService: ApiService) {}

  getDances(): Observable<Dance[]> {
    if (!this.origindances) {
      this.apiService.getDances().subscribe(dances => {
        this.origindances = dances;
        this.dances$.next(dances);
      });
    }
    
console.log('origindaces: ' + this.origindances);
    return this.dances$;
  }
  getDancesByTitle(title: string): Observable<Dance[]> {
 
      this.apiService.getDancesByTitle(title).subscribe(dances => {
        this.origindances = dances;
        this.dances$.next(dances);
      });
    
    
console.log('origindaces: ' + this.origindances);
    return this.dances$;
  }

  getDancesByStatus(): Observable<Dance[]> {
    if (!this.origindances) {
      this.apiService.getDanceByStatus(Status.AKTIV).subscribe(dances => {
        this.origindances = dances;
        this.dances$.next(dances);
      });
    } 
    console.log('origindaces: ' + this.origindances);
    return this.dances$;
  }


  getDanceDetails(danceId: number): Observable<Dance> {
    return this.apiService.getDanceDetails(danceId);
  }

  getSortByPriceAsc(): Observable<Dance[]> {
    this.apiService.getSortByPriceAsc().subscribe(dances => {
      this.origindances = dances;
      this.dances$.next(dances);
    });
    this.filterDances(this.currentCategory);
    this.getDancesByStatus();
    return this.dances$;
  }
  getSortByPriceDesc(): Observable<Dance[]> {
    this.apiService.getSortByPriceDesc().subscribe(dances => {
      this.origindances = dances;
      this.dances$.next(dances);
    });
    this.filterDances(this.currentCategory);
    this.getDancesByStatus();
    return this.dances$;
  }
  getSortByDateAsc(): Observable<Dance[]> {
    this.apiService.getSortByDateAsc().subscribe(dances => {
      this.origindances = dances;
      this.dances$.next(dances);
    });
    this.filterDances(this.currentCategory);
    this.getDancesByStatus();
    return this.dances$;
  }
  getSortByDateDesc(): Observable<Dance[]> {
    this.apiService.getSortByDateDesc().subscribe(dances => {
      this.origindances = dances;
      this.dances$.next(dances);
    });
    this.filterDances(this.currentCategory);
    this.getDancesByStatus();
    return this.dances$;
  }

  saveDance(dance: Dance): void {
    this.apiService.saveDance(dance)
    .subscribe(newDance => {
        this.origindances.push(newDance);
        this.filterDances(this.currentCategory);
    });
  }

  filterDances(category: Category): void {
    this.currentCategory = category;
    const nextDances =
      category === Category.ALL
        ? this.origindances
        : this.origindances.filter(
            dance => !!dance.categories && dance.categories.indexOf(category) > -1
          );
    this.dances$.next(nextDances);
  }
  
}
