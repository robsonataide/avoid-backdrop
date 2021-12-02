import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { OverlayContainer } from '@angular/cdk/overlay';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-overview-example.html',
})
export class MenuOverviewExample {
  hasBackdrop: boolean;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private overlay: OverlayContainer) {}

  update() {
    this.trigger.closeMenu();
    setTimeout(() => {
      this.trigger.openMenu();
    }, 200);
  }

  showProblem() {
    alert('The problem...');
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
