---
layout: page
title: Projects
kicker: "SELECTED PROJECTS"
permalink: /projects/
---

A collection of academic and project-based work across embedded systems, electronics, automation, robotics, and intelligent devices.

<div class="project-grid project-grid-all">
  {% for project in site.projects %}
    <article class="project-card">
      <a class="project-visual {{ project.visual | default: 'visual-default' }}" href="{{ project.url | relative_url }}" aria-label="Open {{ project.title }}">
        <span class="visual-number">{{ forloop.index | prepend: '0' }}</span>
        <span class="visual-short">{{ project.short }}</span>
        <span class="visual-mark"></span>
      </a>
      <div class="project-body">
        <p class="project-meta">{{ project.role }}</p>
        <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        <p>{{ project.summary }}</p>
        <a class="read-more" href="{{ project.url | relative_url }}">Read case study →</a>
      </div>
    </article>
  {% endfor %}
</div>
