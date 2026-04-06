import { Search } from 'lucide-react';

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';
import { Text } from '@/shared/ui/text';

import type { PageHeaderProps } from '../model/type';
import type { ChangeEvent } from 'react';

export function PageHeader({
                             title,
                             searchValue,
                             onSearchOnChange,
                             slot,
                           }: PageHeaderProps) {

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchOnChange?.(event.target.value);
  };


  return (
    <div className={'container'}>
      <Text variant={'title'} tag={'h4'}>{title}</Text>
      <div className={'flex gap-3 items-center justify-center'}>
        {onSearchOnChange && (
          <InputGroup>
            <InputGroupInput
              onChange={onChange}
              value={searchValue}
              placeholder={'Поиск'}
            />
            <InputGroupAddon>
              <Search size={16} />
            </InputGroupAddon>
          </InputGroup>
        )}
        {slot && (
          <div>
            {slot}
          </div>
        )}
      </div>
    </div>
  );
}