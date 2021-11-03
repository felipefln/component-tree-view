import React from 'react';
import mackData from '../services/api.js';

const newItem = {};

function setListed() {
  Object.values(mackData).map((i) => changeList({ item: i, key: i.id, parent: null }));

  function changeList({ item, parent }) {
    let child = false;
    if (item.children[0] != undefined) {
      child = true;
    }

    newItem[item.id] = {
      id: item.id,
      checked: false,
      close: true,
      parent: parent,
      isChildrenFalse: 0,
      child: child,
    };

    if ([item.children] && [item.children.length]) {
      Object.values(item.children).map((i) => changeList({ item: i, key: i.id, parent: item.id }));
    }
  }
  return newItem;
}

export default setListed;
