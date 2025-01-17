import { Input } from 'src/components/atoms/Input';
import { Select } from 'src/components/atoms/Select';

import React from 'react';

type Props = {
  filter: { sort: string; query: string };
  setFilter: (filter: { sort: string; query: string }) => void;
};

export const PostFilter: React.FC<Props> = ({ filter, setFilter }) => (
  <div>
    <Input
      type="text"
      value={filter.query}
      onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      placeholder="Поиск..."
    />

    <Select
      value={filter.sort}
      onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
      defaultValue="Сортировка"
      option={[
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ]}
    />
  </div>
);
