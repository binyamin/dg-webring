---
title: Digital Gardens Webring
layout: default.html
---

# Digital Gardens Webring
Hey 👋, thanks for dropping by. This is the homepage of a [webring](https://en.wikipedia.org/wiki/Webring) for digital gardens. [Add your garden](https://github.com/binyamin/dg-webring/issues/new) to the list.

**This webring includes:**
{% for member in members %}
- [{{member.name}}]({{member.url}}) {% if member.feed %} [(rss feed)]({{member.feed}}){%endif%}
{%endfor%}
