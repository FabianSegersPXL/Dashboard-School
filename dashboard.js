const dashboard = document.querySelector('#dashboard');
const search = document.querySelector('#search');
const searchStatus = document.querySelector('#search-status');

const graphics = new Set([
  'calendar', 'envelope', 'devices', 'diamond', 'suite', 'network',
  'terminal', 'home', 'play', 'chat', 'briefcase', 'server',
]);

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function webAddress(value) {
  if (!value) return null;

  try {
    const address = new URL(value);
    return ['http:', 'https:'].includes(address.protocol) ? address : null;
  } catch {
    return null;
  }
}

function createTile(link) {
  const address = webAddress(link.url);
  const tile = createElement(address ? 'a' : 'div', address ? 'tile' : 'tile tile-missing');
  const icon = createElement('span', 'tile-icon');
  icon.dataset.color = link.color || 'mint';
  icon.setAttribute('aria-hidden', 'true');

  if (link.logo) {
    const image = createElement('img', 'tile-logo');
    image.alt = '';
    image.src = link.logo;
    icon.append(image);
  } else if (graphics.has(link.icon)) {
    icon.append(createElement('span', `glyph glyph-${link.icon}`));
  } else {
    icon.textContent = link.icon || link.name.slice(0, 1).toUpperCase();
  }

  const copy = createElement('span', 'tile-copy');
  copy.append(createElement('span', 'tile-name', link.name));
  if (link.description) copy.append(createElement('span', 'tile-description', link.description));

  tile.append(icon, copy);

  if (address) {
    tile.href = address.href;
    tile.target = '_blank';
    tile.rel = 'noopener noreferrer';
    const indicator = createElement('span', 'new-tab');
    indicator.setAttribute('aria-hidden', 'true');
    tile.append(indicator, createElement('span', 'visually-hidden', '(opent in een nieuw tabblad)'));
  } else {
    copy.append(createElement('span', 'missing-label', 'URL ontbreekt'));
  }

  return tile;
}

function forSearch(text) {
  return text.toLocaleLowerCase('nl').normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

const groups = linkGroups.map((group, index) => {
  const section = createElement('section', 'group');
  section.dataset.size = group.size || 'full';

  const heading = createElement('h2', 'group-title', group.title);
  heading.id = `groep-${index + 1}`;
  section.setAttribute('aria-labelledby', heading.id);

  const list = createElement('ul', 'tiles');
  if (group.links.length >= 5) list.classList.add('tiles-many');
  if (group.size === 'courses') list.classList.add('course-tiles');

  const items = group.links.map((link) => {
    const item = createElement('li');
    item.append(createTile(link));
    list.append(item);
    const keywords = forSearch([group.title, link.name, link.description, link.url].join(' '));
    return { item, keywords };
  });

  section.append(heading, list);
  dashboard.append(section);
  return { section, items };
});

function filterLinks() {
  const query = forSearch(search.value.trim());
  const terms = query ? query.split(/\s+/) : [];
  let total = 0;

  for (const { section, items } of groups) {
    let visible = 0;
    for (const { item, keywords } of items) {
      item.hidden = !terms.every((term) => keywords.includes(term));
      if (!item.hidden) visible++;
    }
    section.hidden = visible === 0;
    total += visible;
  }

  const noResults = query && total === 0;
  searchStatus.classList.toggle('visually-hidden', !noResults);
  searchStatus.textContent = noResults ? 'Geen resultaten gevonden.' : '';
  if (query && total) searchStatus.textContent = total === 1 ? '1 resultaat gevonden.' : `${total} resultaten gevonden.`;
}

search.addEventListener('input', filterLinks);
search.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && search.value) {
    search.value = '';
    filterLinks();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== '/' || event.altKey || event.ctrlKey || event.metaKey || event.defaultPrevented) return;
  if (event.target.isContentEditable || event.target.matches?.('input, textarea, select')) return;
  event.preventDefault();
  search.focus();
});

filterLinks();
