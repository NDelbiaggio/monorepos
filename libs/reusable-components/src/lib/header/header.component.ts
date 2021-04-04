import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'monorepos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * The name of the placeholder in the search input
   * @default 'search'
   */
  @Input() searchPlaceHolder: string = 'search';

  /**
   * Display the search button when set to true
   * @default false
   */
  @Input() displayButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
