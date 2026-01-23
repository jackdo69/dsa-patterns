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
        const topicColors = {
          'array': '#dc322f',
          'matrix': '#c4716c',
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
          'hash map': '#268bd2',
          'hash table': '#268bd2',
          'math': '#6c71c4',
          'bit manipulation': '#d33682',
          'two pointers': '#dc322f',
          'two pointer': '#dc322f',
          'cyclic sort': '#b58900',
          'sliding window': '#cb4b16',
          'dfs': '#859900',
          'bfs': '#2aa198',
          'recursion': '#6c71c4',
          'divide and conquer': '#d33682',
          'knapsack': '#268bd2',
          'trie': '#859900',
          'union find': '#2aa198',
          'topological sort': '#6c71c4',
          'monotonic stack': '#b58900',
          'prefix sum': '#cb4b16',
          'intervals': '#d33682',
          'design': '#839496'
        };

        const difficultyColors = {
          'easy': '#859900',
          'medium': '#b58900',
          'hard': '#dc322f'
        };

        const frequencyColors = {
          'very low': '#586e75',
          'low': '#839496',
          'medium': '#b58900',
          'high': '#cb4b16',
          'very high': '#dc322f'
        };

        // Style Topic field
        html = html.replace(/Topic:\s*([^\n<]+)/gi, function(_match, topics) {
          const topicList = topics.split(',').map(t => t.trim());
          const badges = topicList.map(topic => {
            const color = topicColors[topic.toLowerCase()] || '#839496';
            return `<span style="display: inline-block; background-color: ${color}; color: #fdf6e3; padding: 4px 12px; border-radius: 12px; font-size: 0.85em; font-weight: 500; margin-right: 8px; margin-bottom: 8px;">${topic}</span>`;
          }).join('');
          return `<strong style="color: #93a1a1; margin-right: 10px;">Topic:</strong>${badges}`;
        });

        // Style Difficulty field
        html = html.replace(/Difficulty:\s*([^\n<]+)/gi, function(_match, difficulty) {
          const level = difficulty.trim();
          const color = difficultyColors[level.toLowerCase()] || '#839496';
          const badge = `<span style="display: inline-block; background-color: ${color}; color: #fdf6e3; padding: 4px 12px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">${level}</span>`;
          return `<strong style="color: #93a1a1; margin-right: 10px;">Difficulty:</strong>${badge}`;
        });

        // Style Interview Frequency field
        html = html.replace(/Interview Frequency:\s*([^\n<]+)/gi, function(_match, frequency) {
          const level = frequency.trim();
          const color = frequencyColors[level.toLowerCase()] || '#839496';
          const badge = `<span style="display: inline-block; background-color: ${color}; color: #fdf6e3; padding: 4px 12px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">${level}</span>`;
          return `<strong style="color: #93a1a1; margin-right: 10px;">Interview Frequency:</strong>${badge}`;
        });

        return html;
      });
    }
  ]
}
