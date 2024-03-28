import { Routes } from '@angular/router';

import { BoardComponent } from './features/board/board.component';

export const routes: Routes = [
    { path: '', redirectTo: 'board', pathMatch: 'full' },
    { path: 'board', component: BoardComponent },
    // ⬇️ this guy needs to be the last route in the array
    { path: '**', redirectTo: 'board' },
];
