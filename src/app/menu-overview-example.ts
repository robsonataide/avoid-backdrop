import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-overview-example.html',
})
export class MenuOverviewExample {
  hasBackdrop = true;
  isAvoidClickOutside: boolean;
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

  avoidClickOutside() {
    const overlayers = this.overlay
      .getContainerElement()
      .querySelectorAll('.controlled');

    console.log(overlayers);

    if (overlayers && this.isAvoidClickOutside) {
      overlayers.forEach((element) => {
        const clone = element.cloneNode(true);
        (clone as Element).classList.add('clone');
        clone.addEventListener('click', (event: Event) => {
          if (confirm('Not allowed... Do you want remove this behaviour?!')) {
            this.removeCloneBackdrop();
          }
        });

        element.parentNode.insertBefore(clone, element.nextSibling);
      });
    }
  }
  private removeCloneBackdrop() {
    this.isAvoidClickOutside = false;
    document.querySelectorAll('.clone').forEach((element) => element.remove());
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
