'use client';

import { useHotelAllQuery } from '@/entities/hotel';
import { useHotelSwitch } from '@/shared/store/';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

export function HotelSwitch() {
  const { data, isLoading } = useHotelAllQuery();

  const hotelId = useHotelSwitch((state) => state.hotelId);
  const setHotelId = useHotelSwitch((state) => state.setHotelId);

  return (
    <Select
      value={hotelId ?? ''}
      onValueChange={setHotelId}
      disabled={isLoading}
    >
      <SelectTrigger
        className="
          w-full
          border-border/60
          bg-background
          shadow-none
          hover:bg-muted/40
          focus:ring-1
          focus:ring-ring
        "
      >
        <SelectValue placeholder="Выбор отеля" />
      </SelectTrigger>

      <SelectContent className="min-w-50">
        {data?.map((hotel) => (
          <SelectItem
            key={hotel.id}
            value={hotel.id}
            className="py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="min-w-0">
                <div className="truncate font-medium">
                  {hotel.title}
                </div>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}