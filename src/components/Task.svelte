<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();


// event handler for Pin Task
function PinTask() {
  dispatch('onPinTask',{
    id: task.id
  })
}

// event handler for Archive Task
function ArchiveTask() {
  dispatch('onArchiveTask',{
    id: task.id
  })
}

// Task props
export let task = {
  id: '',
  title: '',
  state: '',
  updatedAt: new Date(),
};

// Reactive declaration (computed prop in other frameworks)
$: isChecked= task.state === 'TASK_ARCHIVED';

</script>

<div class='list-item {task.state}'>
  <label class='checkbox'>
    <input type="checkbox" checked={isChecked} disabled name='checked' />
    <span class='checkbox-custom' on:click={ArchiveTask} />
  </label>
  <div class='title'>
    <input type="text" readonly value={task.title} placeholder='Input title' />
  </div>
  <div class='actons'>
    {#if task.state !== 'TASK_ARCHIVED'}
    <a href='/' on:click|preventDefault={PinTask}>
      <span class={task.state==='TASK_PINNED' ? 'icon-star': 'icon-star-hollow'} />
    </a>
    {/if}
  </div>
</div>

<style>

</style>