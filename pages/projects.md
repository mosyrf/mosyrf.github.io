---
layout: page
title: Portfolio
permalink: /projects/
---

Here are a few selected projects. Each project uses the **page with right sidebar** pattern inspired by Feeling Responsive.

<div class="project-grid">{% for project in site.projects %}<article class="project-card"><div class="placeholder">{{ project.short }}</div><div class="project-body"><h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3><p>{{ project.summary }}</p><a href="{{ project.url | relative_url }}">Read more →</a></div></article>{% endfor %}</div>
