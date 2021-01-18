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
{:else}
  {#if noTasks}
    <div class='list-items'>
      <div class='wrapper-message'>
        <span class='icon-check' />
        <div class='title-message'>You have no tasks.</div>
        <div class='subtitle-message'>Sit back and take a load off.</div>
        </div>
    </div>
  {:else}
    {#each tasksInOrder as task}
      <Task {task} on:onPinTask on:onArchiveTask />
    {/each}
  {/if}
{/if}

<style>

</style>