import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import {List} from '../../models/List';
import { from } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists:List[] | any;

  constructor(private listService:ListService) { }

  ngOnInit() {
    this.lists = this.listService.getLists().subscribe(lists => {
      this.lists = lists;
    });
  }

  deleteList(list: List) {
    // Remove From UI
    this.lists = this.lists.filter((l: { id: any; }) => l.id !== list.id);
    // Remove From Server
    this.listService.deleteList(list).subscribe();
  }

  addList(list: List) {
    this.listService.addList(list).subscribe(list => {
      this.lists.push(list);
    });
  }
}
