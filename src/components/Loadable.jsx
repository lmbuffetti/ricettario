import Loadable from 'react-loadable';
import { Loading } from './Loading';

export const LoadableHeader = Loadable({
    loader: () => import('./Header' /* webpackChunkName: "header" */),
    loading: Loading,
});

export const LoadableAddress = Loadable({
    loader: () => import('./Address' /* webpackChunkName: "address" */),
    loading: Loading,
});

export const LoadableFooter = Loadable({
    loader: () => import('./Footer' /* webpackChunkName: "footer" */),
    loading: Loading,
});

export const LoadableSpinner = Loadable({
    loader: () => import('./Spinner' /* webpackChunkName: "spinner" */),
    loading: Loading,
});

export const LoadableDateYearPicker = Loadable({
    loader: () => import('./DateYearPicker' /* webpackChunkName: "date-picker" */),
    loading: Loading,
});
