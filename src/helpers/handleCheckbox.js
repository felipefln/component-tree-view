import produce from 'immer';
import isChildren from './isChildren';

const handleCheckbox = (listEdit, setListedEdit, { id }) => {
  const nextState = produce(listEdit, (draftState) => {
    const checkedItem = draftState[id].checked;
    function editCheckbox(ids) {
      draftState[ids].checked = !checkedItem;
      Object.values(listEdit).map((item) => item.parent === ids && editCheckbox(item.id));
    }

    draftState[id].isChildrenFalse = 0;
    draftState[id].checked = !checkedItem;
    Object.values(listEdit).map((item) => item.parent === id && editCheckbox(item.id));
  });
  setListedEdit(nextState);
  isChildren(id, nextState, setListedEdit);
};

export default handleCheckbox;
