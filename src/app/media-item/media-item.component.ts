import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input('mediaItemToWatch') mediaItem;
  @Output() delete = new EventEmitter();

  name = 'The Redemption';
  wasWatched(){
    return true;
  }

  onDelete(){
    console.log("OnDelete working");
    this.delete.emit(this.mediaItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
