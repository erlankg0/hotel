import { z } from 'zod';

import { AvailabilityStatus } from '@/shared/const/enums';
import { isoDate, IsNotEmpty } from '@/shared/zod';

export const contractAvailabilitySchema = z.object({
    date: isoDate,
    roomToSell: z.int(IsNotEmpty),
    netBooked: z.int(IsNotEmpty),
    status: z.enum([AvailabilityStatus.BOOKABLE, AvailabilityStatus.CLOSED, AvailabilityStatus.STOP_SELL])
});