import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tirelire',
  templateUrl: './tirelire.component.html',
  styleUrls: ['./tirelire.component.css']
})
export class TirelireComponent {
  @Input()
  solde!: number;

  @Output()
  UseEvent: EventEmitter<number> = new EventEmitter<number>();

    utiliserFrancs(){
      this.UseEvent.emit();
    }
}
