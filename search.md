---
layout: page
title: 搜索
permalink: /search/
---

<div class="search-page">
  <div class="search-header">
    <h1>搜索文章</h1>
    <p>在这里搜索所有文章内容</p>
  </div>

  <div class="search-container">
    <input type="text" id="search-input" class="search-input" 
           placeholder="🔍 输入关键词搜索..." autocomplete="off">
    <div class="search-stats">
      <span id="search-stats"></span>
    </div>
  </div>

  <div id="search-results" class="search-results">
    <!-- 搜索结果将在这里显示 -->
  </div>

  <div id="no-results" class="no-results" style="display: none;">
    <div class="no-results-content">
      <span class="no-results-icon">🔍</span>
      <h3>没有找到相关文章</h3>
      <p>尝试使用不同的关键词或检查拼写</p>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchStats = document.getElementById('search-stats');
    const noResults = document.getElementById('no-results');
    
    // 获取URL参数中的搜索词
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('q');
    if (initialQuery) {
        searchInput.value = initialQuery;
        performSearch(initialQuery);
    }
    
    // 获取所有文章数据
    const posts = [
        {% for post in site.posts %}
        {
            title: {{ post.title | jsonify }},
            url: {{ post.url | jsonify }},
            date: {{ post.date | date: "%Y-%m-%d" | jsonify }},
            content: {{ post.content | strip_html | jsonify }},
            excerpt: {{ post.excerpt | strip_html | jsonify }},
            tags: {{ post.tags | jsonify }},
            categories: {{ post.categories | jsonify }}
        }{% unless forloop.last %},{% endunless %}
        {% endfor %}
    ];
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        
        searchTimeout = setTimeout(() => {
            if (query.length > 0) {
                performSearch(query);
            } else {
                clearResults();
            }
        }, 300);
    });
    
    function performSearch(query) {
        const results = searchPosts(query);
        displayResults(results, query);
        updateStats(results.length, query);
    }
    
    function searchPosts(query) {
        const queryLower = query.toLowerCase();
        return posts.filter(post => {
            return post.title.toLowerCase().includes(queryLower) ||
                   post.content.toLowerCase().includes(queryLower) ||
                   post.tags.some(tag => tag.toLowerCase().includes(queryLower)) ||
                   post.categories.some(cat => cat.toLowerCase().includes(queryLower));
        });
    }
    
    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }
        
        searchResults.style.display = 'block';
        noResults.style.display = 'none';
        
        searchResults.innerHTML = results.map(post => {
            const highlightedTitle = highlightText(post.title, query);
            const highlightedExcerpt = highlightText(post.excerpt.substring(0, 200) + '...', query);
            
            return `
                <article class="search-result-item">
                    <h3 class="result-title">
                        <a href="${post.url}">${highlightedTitle}</a>
                    </h3>
                    <div class="result-meta">
                        <span class="result-date">${post.date}</span>
                        ${post.tags.length > 0 ? `
                        <div class="result-tags">
                            ${post.tags.map(tag => `<span class="tag-item">${tag}</span>`).join('')}
                        </div>
                        ` : ''}
                    </div>
                    <p class="result-excerpt">${highlightedExcerpt}</p>
                </article>
            `;
        }).join('');
    }
    
    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    
    function updateStats(count, query) {
        if (count > 0) {
            searchStats.textContent = `找到 ${count} 篇包含 "${query}" 的文章`;
        } else {
            searchStats.textContent = '';
        }
    }
    
    function clearResults() {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        noResults.style.display = 'none';
        searchStats.textContent = '';
    }
});
</script>

<style>
.search-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.search-header {
    text-align: center;
    margin-bottom: 3rem;
}

.search-header h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.search-header p {
    color: #666;
    font-size: 1.1rem;
}

.search-container {
    margin-bottom: 2rem;
}

.search-input {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    border: 2px solid #e1e5e9;
    border-radius: 50px;
    outline: none;
    transition: all 0.3s ease;
    background: white;
}

.search-input:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-stats {
    margin-top: 1rem;
    text-align: center;
    color: #666;
    font-size: 0.9rem;
}

.search-result-item {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 10px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
}

.search-result-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.result-title {
    margin: 0 0 1rem 0;
    font-size: 1.3rem;
}

.result-title a {
    color: #333;
    text-decoration: none;
}

.result-title a:hover {
    color: #667eea;
}

.result-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.result-date {
    color: #666;
}

.result-tags {
    display: flex;
    gap: 0.5rem;
}

.tag-item {
    background: #667eea;
    color: white;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-size: 0.8rem;
}

.result-excerpt {
    color: #555;
    line-height: 1.6;
    margin: 0;
}

.no-results {
    text-align: center;
    padding: 3rem;
}

.no-results-icon {
    font-size: 4rem;
    display: block;
    margin-bottom: 1rem;
}

.no-results h3 {
    color: #333;
    margin-bottom: 0.5rem;
}

.no-results p {
    color: #666;
}

mark {
    background: rgba(102, 126, 234, 0.2);
    padding: 0.1rem 0.2rem;
    border-radius: 3px;
}

@media (max-width: 768px) {
    .search-page {
        padding: 1rem;
    }
    
    .search-header h1 {
        font-size: 2rem;
    }
    
    .result-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}
</style>
