import { SaveIcon } from 'lucide-react';

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

export function AlertDialogInfo({
    title = 'Подтвердить изменения?',
    description = 'Вы уверены, что хотите сохранить внесённые изменения?',
    onConfirm,
    isPending = false,
    open,
    onOpenChange,
}: Props) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia>
                        <SaveIcon />
                    </AlertDialogMedia>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel variant="outline" disabled={isPending} type="button">
                        Отмена
                    </AlertDialogCancel>

                    <AlertDialogAction onClick={onConfirm} disabled={isPending} type="button">
                        {isPending ? 'Сохранение...' : 'Обновить'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}