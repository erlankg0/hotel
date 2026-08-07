import { Plus } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/shared/ui/table';

import type { FieldTableProps } from './model/types';


export function FieldTable({
                             children,
                             valueLabel,
                             handleAdd,
                           }: FieldTableProps) {
  return (
    <Table>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">№</TableHead>
            <TableHead>Получатель</TableHead>
            <TableHead>{valueLabel}</TableHead>
            <TableHead>Категория</TableHead>
            <TableHead className="w-20 text-end">Удалить</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {children}
        </TableBody>
        <TableFooter>
          <TableCell colSpan={5}>
            <Button
              type="button"
              variant="outline"
              className={'w-full min-w-1/2 border-2 border-dashed border-gray-200'}
              onClick={handleAdd}
            >
              <Plus size={18} className="mr-1" />
              Добавить
            </Button>
          </TableCell>
        </TableFooter>
      </Table>
    </Table>
  );
}