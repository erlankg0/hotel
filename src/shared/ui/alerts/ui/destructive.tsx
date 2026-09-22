import { Trash2Icon, Loader2 } from 'lucide-react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
} from '@/shared/ui/alert-dialog';
import type { Props } from '../model/types';

export function AlertDialogDestructive({
  open,
  onOpenChange,
  title = 'Удалить запись?',
  description = 'Это действие нельзя отменить. Вы уверены, что хотите удалить эту запись?',
  onConfirm,
  isPending = false,
}: Props) {
  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <Trash2Icon className="size-5" />
          </AlertDialogMedia>

          <AlertDialogTitle>
            {title}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isPending}
          >
            Отмена
          </AlertDialogCancel>

          <AlertDialogAction
            variant="destructive"
            disabled={isPending}
            onClick={onConfirm}
            className="gap-2"
          >
            {isPending && (
              <Loader2 className="size-4 animate-spin" />
            )}

            {isPending ? 'Удаление...' : 'Удалить'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}