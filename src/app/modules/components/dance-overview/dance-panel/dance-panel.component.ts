import { Component, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-dance-panel',
  templateUrl: './dance-panel.component.html',
  styleUrls: ['./dance-panel.component.scss']
})
export class DancePanelComponent {
  @Output() filterClick = new EventEmitter<Category>();
  @Output() newDanceClick = new EventEmitter();
  @Output() onAscDateClick = new EventEmitter();
  @Output() onDescDateClick = new EventEmitter();
  @Output() onAscPriceClick = new EventEmitter();
  @Output() onDescPriceClick = new EventEmitter();
 

  selectedFilter: Category = Category.ALL;

  readonly categories: Category[] = Category.getAllCategories();

  constructor(private authenticationService: AuthenticationService) {}

  onFilterClick(event: Category): void {
    this.filterClick.emit(event);
    this.selectedFilter = event;
  }

  onNewDanceClick(): void {
    this.newDanceClick.emit();
  }

  onAscDate():void {
    this.onAscDateClick.emit();
  }
  onDescDate():void {
    this.onDescDateClick.emit();
  }
  onAscPrice():void {
    this.onAscPriceClick.emit();
  }
  onDescPrice():void {
    this.onDescPriceClick.emit();
  }
  checkState(): boolean {
    return this.authenticationService.getState();
  }
}
