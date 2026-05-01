// import React from 'react'
// import AcceptTask from './AcceptTask'
// import NewTask from './NewTask'
// import CompleteTask from './CompleteTask'
// import FailedTask from './FailedTask'

// const TaskList = ({data}) => {
//   return (
//     <div id='taskList' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-100'>
//        {data.tasks.map((elem, idx) =>{
//          if(elem.active){
//           return <AcceptTask key={idx} data={elem}/>
//          }
//          if(elem.newTask){
//           return <NewTask key={idx} data={elem}/>
//          }
//          if(elem.completed){
//           return <CompleteTask key={idx} data={elem}/>
//          }
//          if(elem.failed){
//           return <FailedTask key={idx} data={elem}/>
//          }
         
//        })}
       
       
       
//     </div>
//   )
// }

// export default TaskList
import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id='taskList'
      className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10'
    >
      {data.tasks.map((elem) => {
        return (
          <React.Fragment key={elem.id}>
            {elem.active && <AcceptTask data={elem} />}
            {elem.newTask && <NewTask data={elem} />}
            {elem.completed && <CompleteTask data={elem} />}
            {elem.failed && <FailedTask data={elem} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TaskList;