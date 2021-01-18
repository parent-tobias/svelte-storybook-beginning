// A simple svelte store implementation with update methods and initial data.
// A true app would be more complex, and separated across stores?

import { writable } from 'svelte/store';

const TaskBox = () => {
  // Creates a new writable store populated with some initial data.
  const { subscribe, update } = writable([
    {id: '1', title: 'Something to start', state: 'TASK_INBOX' },
    {id: '2', title: 'Something more', state: 'TASK_INBOX' },
    {id: '3', title: 'Something else again', state: 'TASK_INBOX' },
    {id: '4', title: 'Horse of a different color', state: 'TASK_INBOX' },
    {id: '5', title: 'Dog of a different breed', state: 'TASK_INBOX' },
  ])

  return {
    subscribe,
    // method to archive a task - think redux or vuex Action
    archiveTask: id => 
      update(tasks =>
        tasks.map(task => (task.id === id ? { ...task, state: task.state!=='TASK_ARCHIVED'?'TASK_ARCHIVED':'TASK_INBOX'}  : task))
      ),
    pinTask: id =>
      update(tasks =>
        tasks.map(task => (task.id === id ? {...task, state: task.state!=='TASK_PINNED' ? 'TASK_PINNED':'TASK_INBOX'} : task))  
      ),
  }
};

export const taskStore = TaskBox();

// Store to handle the app state
const AppState = () => {
  const { subscribe, update } = writable(false);
  return {
    subscribe,
    error: () => update(error => !error),
  }
}

export const AppStore = AppState();