---
layout: page
title: Projects
kicker: "ALL PROJECTS"
permalink: /projects/
---

<div class="projects-intro">
  <div>
    <p class="eyebrow">MY ENGINEERING WORK THROUGHOUT COLLEGE LIFE</p>
    <h2>Projects built across embedded systems, electronics, automation, and intelligent devices.</h2>
  </div>
</div>

<div class="project-grid project-grid-all">
  {% for project in site.projects %}
    <article class="project-card">
      <a class="project-visual {% if project.image %}project-visual-image{% else %}{{ project.visual | default: 'visual-default' }}{% endif %}" href="{{ project.url | relative_url }}" aria-label="Open {{ project.title }}">
        {% if project.image %}
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
        {% else %}
          <span class="visual-number">{{ forloop.index | prepend: '0' }}</span>
          <span class="visual-short">{{ project.short }}</span>
          <span class="visual-mark"></span>
        {% endif %}
      </a>
      <div class="project-body">
        <p class="project-meta">{{ project.role }}</p>
        <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        <p>{{ project.summary }}</p>
        <div class="project-tags">
          {% assign tags = project.stack | split: ',' %}
          {% for tag in tags limit: 4 %}<span>{{ tag | strip }}</span>{% endfor %}
        </div>
        <a class="read-more" href="{{ project.url | relative_url }}">Read case study <span>→</span></a>
      </div>
    </article>
  {% endfor %}
</div>
