# Jiashen Liu's academic homepage

A Jekyll website based on [academic-homepage](https://github.com/luost26/academic-homepage).

Live site: [michaelgentsjason.github.io](https://michaelgentsjason.github.io/).

## Editing

- `index.html`: homepage content and experience.
- `_layouts/default.html`: navigation, metadata, and footer.
- `_includes/publications.html`: shared publication list.
- `assets/css/site.css`: site styling.
- `CV_Jiashen Liu.pdf`: current CV.
- `_publications/`: publication records with `title`, `order`, `year`, `authors`, `venue`, `status`, `image`, `image_alt`, `paper_url`, and optional `arxiv_url`. Authors have a `name` and optional `equal` or `corresponding` markers. Lower `order` values appear first. Both the homepage and Publications page use these records.
- `assets/images/publications/`: publication preview figures.
- `assets/papers/`: hosted paper PDFs.

Run locally with `bundle install` followed by `bundle exec jekyll serve`. GitHub Pages can build the site from the repository's publishing branch.

Template distributed under the MIT License; see `LICENSE`.
