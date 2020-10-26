import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Dance } from 'src/app/shared/models/dance';
import { DancesService } from '../../services/dances.service';

@Component({
  selector: 'app-dance-details',
  templateUrl: './dance-details.component.html',
  styleUrls: ['./dance-details.component.scss']
})
export class DanceDetailsComponent implements OnInit, OnDestroy {
  dance: Dance;

  private readonly destroy$ = new Subject();

  constructor(private route: ActivatedRoute, private dancesService: DancesService) { }

  ngOnInit() {
    this.dancesService.getDanceDetails(+this.route.snapshot.paramMap.get('id'))
      .pipe(takeUntil(this.destroy$))
      .subscribe(dance => {
        this.dance = dance;
      });
  }

  onEdit(dance): void {
  
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
