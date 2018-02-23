import {AfterViewInit, Component, ElementRef} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

const KEY_ENTER: string = 'Enter';
const KEY_ESCAPE: string = 'Escape';

@Component({
  selector: 'app-viewer',
  templateUrl: './app.viewer.html',
  styleUrls: ['./app.viewer.css'],
  animations: [
    trigger('windowState', [
      state('inactive', style({opacity: 0, top: '1vh', display: 'none',})),
      state('active', style({opacity: 1, top: '60px', display: 'box',})),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ]),
    trigger('backgroundState', [
      state('inactive', style({opacity: 0, display: 'none',})),
      state('active', style({opacity: 1, display: 'box',})),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ])
  ]
})
export class ViewerComponent implements AfterViewInit {

  state: string = 'inactive';

  constructor(public element: ElementRef) {
  }

  ngAfterViewInit() {
    document.addEventListener('keyup', this.keyUp.bind(this));
  }

  show() {
    this.state = 'active';
  }

  hide() {
    this.state = 'inactive';
  }

  private isActive(): boolean {
    return this.state == 'active';
  }

  private keyUp(event: any) {
    if(this.isActive()) {
      if (event.key === KEY_ENTER || event.key === KEY_ESCAPE) {
        this.hide();
      }
    }
  }
}
