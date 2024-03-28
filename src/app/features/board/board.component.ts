import { Component, inject } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';

import { BoozeStore } from 'src/app/stores/booze.store';

import { GameGridComponent } from './game-grid/game-grid.component';

@Component({
    selector: 'app-board',
    standalone: true,
    imports: [MatTabsModule, GameGridComponent],
    templateUrl: './board.component.html',
    styleUrl: './board.component.scss',
})
export class BoardComponent {
    private readonly booze = inject(BoozeStore);
    tabs = [
        { label: '3 x 3', dimension: { width: 3, height: 3 } },
        { label: '4 x 4', dimension: { width: 4, height: 4 } },
    ];
    tiles = this.booze.entities;

    constructor() {}

    onTabChange(event: MatTabChangeEvent) {
        this.booze.setDimensions(this.tabs[event.index].dimension);
    }
}

export type BoardTab = {
    label: string;
    dimension: { width: number; height: number };
};
