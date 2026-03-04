# Blog Setup Instructions

This blog is built with [Quarto](https://quarto.org/).

## Prerequisites

1. Install [Quarto](https://quarto.org/docs/get-started/).
2. Install the [Quarto VS Code Extension](https://marketplace.visualstudio.com/items?itemName=quarto.quarto).

## Running Locally

To preview the blog locally, open a terminal in the `blog` directory and run:

```bash
cd blog
quarto preview
```

## Deployment

To deploy this blog, you have two options:

### Option 1: GitHub Actions (Recommended)

1. Ensure your repository is on GitHub.
2. Go to `Settings > Pages` in your GitHub repository.
3. Under "Build and deployment", set "Source" to "GitHub Actions".
4. Quarto will automatically configure the build (or you can add a `publish.yml` workflow).

### Option 2: Manual Build

Run the following command to render the site to the `docs` folder:

```bash
cd blog
quarto render
```

Then, configure GitHub Pages to serve from the `blog/docs` folder (if possible) or push the contents of `docs` to a separate branch.
