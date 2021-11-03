import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input('mediaItemToWatch') mediaItem;

  name = 'The Redemption';
  wasWatched(){
    return true;
  }

  onDelete(){
    console.log("OnDelete working");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
