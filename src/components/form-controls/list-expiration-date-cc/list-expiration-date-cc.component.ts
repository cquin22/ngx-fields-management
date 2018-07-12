import {Component, EventEmitter, Input, Output} from '@angular/core';



@Component({
  selector: 'app-list-expiration-date-cc',
  templateUrl: './list-expiration-date-cc.component.html',
  styleUrls: ['./list-expiration-date-cc.component.scss']
})
export class ListExpirationDateCcComponent{

  @Input() list: Array<string>;
  @Input() id: string;
  @Input() placeholderKey: string;

  @Output() select: EventEmitter<string> = new EventEmitter<string>();


  public selectDate(date: string) {
    this.select.emit(date);
  }

}
