import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './../../../../App.css';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Organizer',
  },
  {
    id: 'cato',
    name: 'Speakers',
  },
  {
    id: 'kvn',
    name: 'Location',
  },
  {
    id: 'mooncake',
    name: 'Schedule',
  },
  {
    id: 'quinn',
    name: 'Sponsors',
  }
]

function AppNew() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li className='flex gap-x-3 items-center border border-[#d0d0d0] mb-[1em] rounded-lg px-[.8em] py-[.5em] hover:bg-primary' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="50" height="50" rx="8" fill="#FFFCF6"/>
                              <path d="M30.6 35L26.2 30.5556M17.4 15V35V15ZM17.4 15L21.8 19.4444L17.4 15ZM17.4 15L13 19.4444L17.4 15ZM30.6 35V15V35ZM30.6 35L35 30.5556L30.6 35Z" stroke="#FFC93E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <p className='text-xl font-bold'>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default AppNew;
