<script>
import Task from './Task.svelte';
import LoadingRow from './LoadingRow.svelte';

export let loading = false;
export let tasks = [];

// Reactive declarations
$: noTasks = tasks.length === 0;
$: emptyTasks = noTasks && !loading;
$: tasksInOrder = [
  ...tasks.filter( (task) => task.state==='TASK_PINNED'),
  ...tasks.filter( (task) => task.state!=='TASK_PINNED'),
];

</script>

{#if loading}
  <div class='list-items'>
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
  </div>
{/if}
{#if emptyTasks}
  <div class='list-items'>No Tasks!</div>
{/if}
{#each tasksInOrder as task}
  <Task {task} on:onPinTask on:onArchiveTask />
{/each}


<style>

</style>