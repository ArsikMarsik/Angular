import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class MenuOverviewExample {}
