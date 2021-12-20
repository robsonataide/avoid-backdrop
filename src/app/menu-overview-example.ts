import { OverlayContainer } from '@angular/cdk/overlay';
import { ThisReceiver } from '@angular/compiler/src/compiler';
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
  valid = false;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() {}

  showProblem() {
    alert('The problem...');
  }

  validate() {
    if (this.valid) {
      this.removeCloneBackdrop();
    } else {
      this.createCustomBackdrop();
    }
  }

  createCustomBackdrop() {
    const clones = document.querySelectorAll('.clone');
    if (clones?.length === 0) {
      const overlayers = document.querySelectorAll('.controlled');
      if (overlayers) {
        overlayers.forEach((element) => {
          const clone = element.cloneNode(true);
          (clone as Element).classList.add('clone');
          clone.addEventListener('click', this.select.bind(this));
          element.parentNode.insertBefore(clone, element.nextSibling);
        });
      }
    }
  }

  select(event: Event) {
    if (!this.valid) {
      event.stopPropagation();
      alert('It should be valid!');
    } else {
      this.removeCloneBackdrop();
      (document.querySelector('.controlled') as HTMLDivElement).click();
    }
  }

  removeCloneBackdrop() {
    this.isAvoidClickOutside = false;
    document.querySelectorAll('.clone').forEach((element) => element.remove());
  }
}
