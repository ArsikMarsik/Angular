import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * @title Tab group with dynamic height based on tab contents
 */
@Component({
  selector: 'tab',
  templateUrl: 'tab.html',
  styleUrl: 'tab.css',
  standalone: true,
  imports: [MatTabsModule],
})
export class TabGroupDynamicHeightExample {}
