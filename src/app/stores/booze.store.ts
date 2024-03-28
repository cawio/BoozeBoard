import {
    patchState,
    signalStore,
    withHooks,
    withMethods,
    withState,
} from '@ngrx/signals';
import { setEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, tap } from 'rxjs';

import { BoozeTile } from 'src/app/models/BoozeTile';
import { BoozeBoardFactory } from 'src/app/utils/BoozeBoardFactory';

export const BoozeStore = signalStore(
    { providedIn: 'root' },
    withState({
        dimenstions: { width: 3, height: 3 },
    }),
    withEntities<BoozeTile>(),
    withMethods((state) => ({
        setDimensions(dimensions: { width: number; height: number }) {
            patchState(state, { dimenstions: dimensions });
        },
        reset() {
            patchState(
                state,
                setEntities(BoozeBoardFactory.createBoard(state.dimenstions()))
            );
        },
        linkDimensionsToTiles: rxMethod<{ width: number; height: number }>(
            pipe(
                tap((dimensions) =>
                    patchState(
                        state,
                        setEntities(BoozeBoardFactory.createBoard(dimensions))
                    )
                )
            )
        ),
    })),
    withHooks({
        onInit(store) {
            store.linkDimensionsToTiles(store.dimenstions);
        },
    })
);
