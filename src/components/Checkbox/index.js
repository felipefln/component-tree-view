import React, { memo } from 'react';
import { Style } from './styles';

function Checkbox({ id, name, arrow, checkbox, checked, isChildrenFalse }) {
  return (
    <Style>
      <label className="container">
        {name}
        <input
          className="checkbox"
          type="checkbox"
          checked={checked}
          onChange={checkbox}
          name={`checkbox-${id}`}
          id={id}
        />
        {isChildrenFalse < 0 ? <span className="checkmark2" /> : <span className="checkmark" />}
      </label>
      {arrow}
    </Style>
  );
}
export default memo(Checkbox);
