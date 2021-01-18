import PureTaskList from './PureTaskList.svelte';
import * as TaskStories from './Task.stories';

export default {
  component: PureTaskList,
  title: 'PureTaskList',
  argTypes: {
    onPinTask: { action: 'onPinTask'},
    onArchiveTask: { action: 'onArchiveTask'},
  },
};

const Template = args => ({
  Component: PureTaskList,
  props: args,
  on: {
    ...TaskStories.actionsData,
  },
});

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // Th data was inherited from the Default story.
  tasks: [
    {...TaskStories.Default.args.task, id: '1', title: 'Task One'},
    {...TaskStories.Default.args.task, id: '2', title: 'Task Deux'},
    {...TaskStories.Default.args.task, id: '3', title: 'Task Dri'},
    {...TaskStories.Default.args.task, id: '4', title: 'Task Quatre'},
    {...TaskStories.Default.args.task, id: '5', title: 'Task Five'},
    {...TaskStories.Default.args.task, id: '6', title: 'Task Zeta'},
    {...TaskStories.Default.args.task, id: '7', title: 'Task Fred'},
    {...TaskStories.Default.args.task, id: '8', title: 'Task Purple'},
  ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0,5),
    {...TaskStories.Default.args.task, id: '6', title: 'Task Zeta (Pinned)', state: 'TASK_PINNED'},
    ...Default.args.tasks.slice(6)
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
}