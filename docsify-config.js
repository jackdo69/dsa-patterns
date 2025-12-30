window.$docsify = {
  name: 'DSA Patterns',
  repo: '',
  loadSidebar: true,
  alias: {
    '/.*/_sidebar.md': '/_sidebar.md'
  },
  subMaxLevel: 2,
  auto2top: true,
  homepage: 'README.md',
  search: {
    placeholder: 'Search patterns...',
    noData: 'No results found',
    depth: 3
  },
  pagination: {
    previousText: 'Previous',
    nextText: 'Next',
    crossChapter: true
  },
  plugins: [
    function(hook) {
      hook.afterEach(function(html) {
        // Match "Tags: tag1, tag2, tag3" pattern
        return html.replace(/Tags:\s*([^\n<]+)/gi, function(_match, tags) {
          const tagList = tags.split(',').map(tag => tag.trim());
          const tagColors = {
            'array': '#dc322f',
            'string': '#cb4b16',
            'linked list': '#b58900',
            'tree': '#859900',
            'graph': '#2aa198',
            'dynamic programming': '#268bd2',
            'dp': '#268bd2',
            'greedy': '#6c71c4',
            'backtracking': '#d33682',
            'sorting': '#dc322f',
            'searching': '#cb4b16',
            'binary search': '#cb4b16',
            'stack': '#b58900',
            'queue': '#859900',
            'heap': '#2aa198',
            'hash table': '#268bd2',
            'math': '#6c71c4',
            'bit manipulation': '#d33682',
            'two pointers': '#dc322f',
            'sliding window': '#cb4b16',
            'dfs': '#859900',
            'bfs': '#2aa198',
            'recursion': '#6c71c4',
            'divide and conquer': '#d33682'
          };

          const badges = tagList.map(tag => {
            const color = tagColors[tag.toLowerCase()] || '#839496';
            return `<span style="display: inline-block; background-color: ${color}; color: #fdf6e3; padding: 4px 12px; border-radius: 12px; font-size: 0.85em; font-weight: 500; margin-right: 8px; margin-bottom: 8px;">${tag}</span>`;
          }).join('');

          return `<p style="margin: 1.5em 0 1em 0;"><strong style="color: #93a1a1; margin-right: 10px;">Tags:</strong>${badges}</p>`;
        });
      });
    }
  ]
}
