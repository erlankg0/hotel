import { useCallback } from 'react';

import { Dialog, DialogContent } from '@/shared/ui/dialog';

import type { DialogProps } from '../model/type';

export function Modal(props: DialogProps) {
  const { content, isOpen, onClose } = props;

  const handleOnClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOnClose}>
      <DialogContent
        className="bg-white"
        showCloseButton={false}>
        <div className="mt-4">{content}</div>
      </DialogContent>
    </Dialog>
  );
}