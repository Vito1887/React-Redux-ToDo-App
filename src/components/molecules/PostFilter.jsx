import React from "react";
import { Input } from "src/components/atoms/Input";
import { Select } from "src/components/atoms/Select";

export const PostFilter = ({ filter, setFilter }) => (
  <div>
    <Input
      value={filter.query}
      onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      placeholder="Поиск..."
    />

    <Select
      value={filter.sort}
      onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
      defaultValue="Сортировка"
      option={[
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ]}
    />
  </div>
);
