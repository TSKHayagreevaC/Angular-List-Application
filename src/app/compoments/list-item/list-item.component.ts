import { ListService } from './../../services/list.service';
import { List } from './../../models/List';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() list: List | any;

  @Output() deleteList: EventEmitter<List> = new EventEmitter();

  constructor( private listService:ListService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      list: true,
      'is-complete': this.list.completed
    }
    return classes;
  }

  onToggle(list:any) {
    // Toggle in UI
    list.completed = !list.completed;
    // Toggle in server
    this.listService.toggleCompleted(list).subscribe(list => console.log(list));
  }

  onDelete(list:any) {
    this.deleteList.emit(list);
  }

}
