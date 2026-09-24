import { z } from 'zod';

import { IsNotEmpty } from '../const/validator';

export const isoDate = z.date(IsNotEmpty).transform((date) => date.toISOString());
