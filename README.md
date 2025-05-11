# Cloud Seeds MENA Website

This repository contains the source code for the Cloud Seeds MENA organization website, built using the [Hugo](https://gohugo.io/) static site generator.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Local Development](#local-development)
- [Content Management](#content-management)
  - [Adding Blog Posts](#adding-blog-posts)
  - [Adding Project Pages](#adding-project-pages)
  - [Adding News Items](#adding-news-items)
  - [Adding Community Content](#adding-community-content)
- [Site Structure](#site-structure)
- [Contribution Guidelines](#contribution-guidelines)
- [Deployment](#deployment)
- [License](#license)

## Overview

The Cloud Seeds MENA website serves as the main platform for our organization, showcasing our projects, blog posts, news, and community initiatives. The site is primarily in Arabic with right-to-left (RTL) support.

## Getting Started

### Prerequisites

To work with this website locally, you need:

- [Hugo](https://gohugo.io/getting-started/installing/) (Extended version recommended)
- Git

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/cloudseeds-mena/cloudseeds-website.git
   cd cloudseeds-website
   ```

2. Install dependencies (if any):
   ```bash
   # If using npm for asset pipelines
   npm install
   ```

### Local Development

To run the site locally:

```bash
hugo server -D
```

This will start a development server at http://localhost:1313/ with live reload enabled. The `-D` flag includes draft content.

## Content Management

All content is stored in the `content/ar/` directory, organized by section.

### Adding Blog Posts

To create a new blog post:

1. Create a new Markdown file in `content/ar/blog/` with a descriptive name.
2. Start the file with front matter:

```markdown
---
title: "عنوان المقالة"
date: YYYY-MM-DDT00:00:00+03:00
draft: false
image: "/img/blog/your-image.jpg"
tags: ["tag1", "tag2"]
categories: ["category1", "category2"]
author: "اسم الكاتب"
---

محتوى المقالة هنا...
```

3. Write your content in Markdown format below the front matter.
4. Place any images referenced in your post in the `static/img/blog/` directory.

**Note:** You can also use the Hugo command to generate a new post:

```bash
hugo new content/ar/blog/your-post-name.md
```

### Adding Project Pages

To add a new project:

1. Create a new Markdown file in `content/ar/projects/` with the project name.
2. Include the following front matter:

```markdown
---
title: "اسم المشروع"
date: YYYY-MM-DDT00:00:00+03:00
draft: false
image: "/img/projects/project-image.jpg"
github: "https://github.com/cloudseeds-mena/project-name"
website: "https://project-website.org" # Optional
status: "نشط" # أو "قيد التطوير" أو "مكتمل"
weight: 10 # Used for ordering - lower numbers appear first
---

وصف المشروع والمزيد من المعلومات...
```

3. Provide comprehensive information about the project, including:
   - Overview and purpose
   - Key features
   - Technologies used
   - How to contribute
   - Documentation links

### Adding News Items

For news articles:

1. Create a new file in `content/ar/news/`.
2. Use this front matter template:

```markdown
---
title: "عنوان الخبر"
date: YYYY-MM-DDT00:00:00+03:00
draft: false
image: "/img/news/news-image.jpg"
featured: false # Set to true for important news
---

محتوى الخبر...
```

### Adding Community Content

For community-related information:

1. Add files to `content/ar/community/`.
2. Use the appropriate front matter based on the type of content.
3. For events, include details like date, location, registration links, etc.

## Site Structure

```
├── archetypes/       # Templates for new content
├── config.toml       # Main configuration file
├── content/          # All site content
│   └── ar/           # Arabic content
│       ├── about/    # About pages
│       ├── blog/     # Blog posts
│       ├── community/# Community information
│       ├── news/     # News articles
│       └── projects/ # Project pages
├── layouts/          # HTML templates
├── static/           # Static assets (images, CSS, JS)
└── themes/           # Site themes (if used)
```

## Contribution Guidelines

1. Create a new branch for your changes
2. Make your changes and test locally
3. Submit a pull request with a clear description of your changes
4. Wait for review and approval before merging

## Deployment

The website is automatically deployed when changes are pushed to the main branch. The deployment process uses [specific deployment tool/service].

## License

[License information]
