import { createBrowserHistory } from 'history';
import type { History } from 'history';

export const history: History = createBrowserHistory({ basename: '/' });
