import {configureStore} from '@reduxjs/toolkit';
import {reducer, preloadState} from './reducers';

export const store = configureStore({reducer, preloadState});
