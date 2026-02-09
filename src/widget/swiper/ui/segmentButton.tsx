'use client';
import { memo, useCallback } from 'react';

import { Progress } from '@/shared/ui/progress';

import type { SegmentButtonProps } from '../model/type';

export const SegmentButton = memo(({
                                     index,
                                     isActive,
                                     segmentProgress,
                                     segmentWidth,
                                     onSegmentClick,
                                   }: SegmentButtonProps) => {
  const handleOnClick = useCallback(() => {
    onSegmentClick(index);
  }, [index, onSegmentClick]);

  return (
    <button
      className={`segment ${isActive ? 'segment-active' : ''}`}
      onClick={handleOnClick}
      type="button"
      aria-label={`Перейти к слайду ${index + 1}`}
      aria-current={isActive ? 'true' : 'false'}
      style={{ width: segmentWidth }}
    >
      {isActive && (
        <Progress
          indicatorClassName={'!bg-white rounded-none'}
          value={segmentProgress}
          isRounded
        />
      )}
    </button>
  );
});

SegmentButton.displayName = 'SegmentButton';