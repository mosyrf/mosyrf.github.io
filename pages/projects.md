---
layout: page
title: Projects
permalink: /projects/
---

Explore a selection of projects I've worked on across
embedded systems, electronics, industrial automation,
IoT, and intelligent systems.

<div class="project-grid">
  {% for project in site.projects %}
    <article class="project-card">

      <div class="placeholder">
        {{ project.short }}
      </div>

      <div class="project-body">

        <h3>
          <a href="{{ project.url | relative_url }}">
            {{ project.title }}
          </a>
        </h3>

        <p>
          {{ project.summary }}
        </p>

        <a href="{{ project.url | relative_url }}">
          Read more →
        </a>

      </div>

    </article>

{% endfor %}

</div>
