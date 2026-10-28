import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/shared/ui/card';
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell, } from '@/shared/ui/table';

export function CreateGrid() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Контрактные цены
        </CardTitle>
        <CardDescription>
          Контрактные цены
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableHead>Категории номеров</TableHead>

            <TableHead>1</TableHead>
            <TableHead>2</TableHead>
            <TableHead>3</TableHead>
            <TableHead>4</TableHead>
            <TableHead>5</TableHead>
            <TableHead>6</TableHead>
            <TableHead>7</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <TableRow>
                  <TableCell>Стандартный номре в виллах</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2 ADULTS  0 CHD 0 INF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1 ADULT 0 CHD 0 INF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5</TableCell>
                </TableRow>
              </TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
};