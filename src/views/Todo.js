import React, { useState, useEffect } from 'react';
import Lists from '../components/Lists';
import Cards from '../components/Cards';

function Todo() {
  const [list, setList] = useState('');
  const [lists, setLists] = useState([]);

  const title = 'เพิ่มข้อมูล';
  const header = 'ชื่อรายการ';
  const descript = 'กรอกชื่อรายการที่ต้องการเพิ่ม';
  const btn = 'เพิ่ม';

  useEffect(() => {
    console.log({ list });
    console.log({ lists });
  });

  const onListChange = (e) => {
    setList(e.target.value);
  };

  const onEditListChange = (index, e) => {
    const newlists = [...lists];
    newlists[index] = e.target.value;
    setLists(newlists);
  };

  const addLists = (e) => {
    e.preventDefault();
    setLists([...lists, list]);
  };

  const removeTodo = (index) => {
    const newlists = [...lists];
    newlists.splice(index, 1);
    setLists(newlists);
  };

  return (
    <div className="mt-5">
      <div className="d-flex flex-row justify-content-around">
        <Cards
          onListChange={onListChange}
          addLists={addLists}
          list={list}
          title={title}
          header={header}
          descript={descript}
          btn={btn}
        />
      </div>
      <Lists
        lists={lists}
        onEditListChange={onEditListChange}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default Todo;
