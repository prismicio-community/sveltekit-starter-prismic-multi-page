# Prismic + SvelteKit Multi-Page Starter

This page covers how to use **Prismic + SvelteKit Multi-Page Starter** with Prismic.

- **Demo**: [Open live demo][live-demo]
- **Learn more about Prismic and SvelteKit**: [Prismic SvelteKit Documentation][prismic-docs]

&nbsp;

<img src="https://user-images.githubusercontent.com/8601064/166617932-eaaa1643-f086-4909-9868-56234f8da98d.png" alt="Screenshots of the site seen on deskop and mobile browsers" />

&nbsp;

## 🚀 Quick Start

To start a new project using this starter, run the following commands in your terminal:

```sh
npx @slicemachine/init --starter sveltekit-starter-prismic-multi-page
```

The commands will do the following:

1. Start a new SvelteKit project using this starter.
2. Ask you to log in to Prismic or [create an account][prismic-sign-up].
3. Create a new Prismic content repository with sample content.

When you're ready to start your project, run the following command:

```sh
npm run dev
```

To learn more about working with Prismic, [**see the Prismic docs**](https://prismic.io/docs/technologies/sveltekit).

## Using and customizing your project

To get started after creating your new project, go to [prismic.io/dashboard](https://prismic.io/dashboard), click on the repository for this website, and start editing.

### Create a page

To create a page, click on the green pencil icon, then select **Page**.

Your new page will be accessible by its URL, but it won't appear on the website automatically. To let users discover it, add it to the navigation.

### Update the navigation

To add a page to your navigation menu, go to the document list and open the **Navigation** document. In the **Links** group, click **Add a new element in Links**. Select the page to add and fill in a label.

### Customize this website

This website is preconfigured with Prismic. It has three Prismic packages installed:

- `@prismicio/client` provides helpers for fetching content from Prismic
- `@prismicio/svelte` provides Svelte components for rendering content from Prismic

These packages are already integrated and employed in this app. Take a look at the code to see how they're used.

### Edit the code

There are two steps to rendering content from Prismic in your SvelteKit project:

1. Fetch content from the Prismic API using `@prismicio/client`.
2. Template the content using components from `@prismicio/react`.

Here are some of the files in your project that you can edit:

- `src/lib/prismicio.js` - This file includes configuration for `@prismicio/client` and exports useful API helpers.
- `src/routes/+layout.svelte` - This is your layout component.
- `src/routes/+page.svelte` - This is the app homepage. It queries and renders a page document with the UID (unique identifier) "home" from the Prismic API.
- `src/routes/[uid]/+page.svelte` - This is the page component, which queries and renders a page document from your Prismic repository based on the UID.
- `src/lib/slices/\*/index.svelte` - Each Slice in your project has an `index.svelte` file that renders the Slice component. Edit this file to customize your Slices.

These are important files that you should leave as-is:

- `src/routes/slice-simulator/+page.svelte` - Do not edit or delete this file. This file simulates your Slice components in development.
- `src/lib/slices/` - This directory contains Slice components, which are generated programmatically by Slice Machine. To customize a Slice template, you can edit the Slice's index.js file. To add Slices, delete Slices, or edit Slice models, use Slice Machine (more info below).

Learn more about how to edit your components with [Fetch Data in SvelteKit](https://prismic.io/docs/technologies/fetch-data-sveltekit) and [Template Content in SvelteKit](https://prismic.io/docs/technologies/template-content-sveltekit).

Styling in this project is implemented with Tailwind CSS. See the [Tailwind docs](https://tailwindcss.com/docs) for more info.

### Deploy to the web

To put your project online, see [Deploy your SvelteKit App](https://prismic.io/docs/technologies/deploy-sveltekit).

### Edit content models with Slice Machine

This project includes an application called Slice Machine, which generates models for your Custom Types and Slices. Slice Machine stores the models locally in your codebase, so you can save and version them. It also syncs your models to Prismic. To learn how to use Slice Machine, read [Model Content in SvelteKit](https://prismic.io/docs/technologies/model-content-sveltekit).

If you change or add to your Custom Types, you'll need to update your route handling to match. To learn how to do that, read [Define Paths in SvelteKit](https://prismic.io/docs/technologies/define-paths-sveltekit).

## Learn more

For the official Prismic documentation, see [Prismic's guide for SvelteKit](https://prismic.io/docs/technologies/sveltekit) or the [technical references for the installed Prismic packages](https://prismic.io/docs/technologies/technical-references).

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/sveltekit
[prismic-sign-up]: https://prismic.io/dashboard/signup
[sveltekit]: https://sveltekit.org/
[live-demo]: https://sveltekit-starter-prismic-multi-page.vercel.app/
