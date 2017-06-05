'use strict';

import { INC, DEC, STEP_CHANGED } from './counterConstants';

export const inc = () => ({ type: INC });

export const dec = () => ({ type: DEC });

export const stepChanged = e => ({ type: STEP_CHANGED, payload: e.target.value });
