*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app with storybook

This is taken from the tutorial lessons on combining Svelte and Storybook, found at [Learn Storybook](https://www.learnstorybook.com/intro-to-storybook/svelte/en/get-started/). Remarkably, this was better for learning about both Svelte and Storybook than many of the Svelte materials I'd found.

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```
*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

Add in Storybook:

```bash
npx -p @storybook/cli sb init --type svelte
```

...then start [Rollup](https://rollupjs.org):

```bash
# Command to run Svelte dev
npm run dev

# And to run Storybook
npm run storybook
```

Also, 

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

Note that Storybook will start its own tab in your default browser, pointing to [localhost:6006](http://localhost:6006). Any editing of stories or components will cause a hot-reload of the component displayed.