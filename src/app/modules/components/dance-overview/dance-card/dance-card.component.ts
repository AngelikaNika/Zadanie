import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Dance } from 'src/app/shared/models/dance';


@Component({
  selector: 'app-dance-card',
  templateUrl: './dance-card.component.html',
  styleUrls: ['./dance-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DanceCardComponent {
  @Input() dance: Dance;
  @Output() test = new EventEmitter<string>();

  constructor(private router: Router) {
   
   }

  onRouterClick() {
    this.router.navigateByUrl('/dances/details/1');
  }

}
