import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export const AppStore = signalStore(
    { providedIn: 'root' },
    withState({
        drawerOpen: false,
        darkThemeEnabled: false,
    }),
    withMethods((state) => ({
        toggleDrawer() {
            patchState(state, { drawerOpen: !state.drawerOpen() });
        },
        toggleTheme() {
            patchState(state, { darkThemeEnabled: !state.darkThemeEnabled() });
            state.darkThemeEnabled()
                ? document.body.classList.add('dark-theme')
                : document.body.classList.remove('dark-theme');
        },
    }))
);
