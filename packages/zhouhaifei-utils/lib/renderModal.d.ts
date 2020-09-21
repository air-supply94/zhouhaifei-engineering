import React from 'react';
export declare function renderModal(element: React.ReactElement): HTMLElement;
export declare function destroyModal(): HTMLElement | undefined;
export declare function destroyModalUntil(stopDom: HTMLElement): void;
export declare function destroyAllModal(): void;
export declare function destroyLatestModal(count: number): void;
