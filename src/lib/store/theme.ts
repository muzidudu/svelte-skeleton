import { browser } from '$app/env';
import { localStore } from './localStore';

export const theme = localStore('theme', '');

export const isDark = () => browser ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;

export const isLight = () => browser ? window.matchMedia('(prefers-color-scheme: light)').matches : false;
