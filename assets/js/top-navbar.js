// 顶部导航栏功能
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (mobileToggle && navbarNav) {
        mobileToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('show');
            
            // 动画效果
            const lines = mobileToggle.querySelectorAll('.hamburger-line');
            if (navbarNav.classList.contains('show')) {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
        
        // 点击菜单项后关闭移动端菜单
        const navLinks = navbarNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navbarNav.classList.remove('show');
                    const lines = mobileToggle.querySelectorAll('.hamburger-line');
                    lines[0].style.transform = 'none';
                    lines[1].style.opacity = '1';
                    lines[2].style.transform = 'none';
                }
            });
        });
    }
    
    // 滚动时导航栏样式变化
    const navbar = document.querySelector('.top-navbar');
    let lastScrollY = window.scrollY;
    
    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 搜索功能
    const searchInput = document.querySelector('#navbar-search');
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length > 0) {
                searchTimeout = setTimeout(() => {
                    performSearch(query);
                }, 300);
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value.trim();
                if (query.length > 0) {
                    performSearch(query);
                }
            }
        });
    }
    
    // 简单的搜索功能实现
    function performSearch(query) {
        // 这里可以实现更复杂的搜索逻辑
        // 目前简单地重定向到标签页面
        if (query) {
            const searchUrl = `/tags/#${encodeURIComponent(query)}`;
            window.location.href = searchUrl;
        }
    }
    
    // 键盘快捷键：Ctrl/Cmd + K 聚焦搜索框
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('#navbar-search');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });
    
    // 点击其他地方关闭移动端菜单
    document.addEventListener('click', function(e) {
        if (navbarNav && navbarNav.classList.contains('show')) {
            if (!e.target.closest('.top-navbar')) {
                navbarNav.classList.remove('show');
                const mobileToggle = document.querySelector('.mobile-menu-toggle');
                if (mobileToggle) {
                    const lines = mobileToggle.querySelectorAll('.hamburger-line');
                    lines[0].style.transform = 'none';
                    lines[1].style.opacity = '1';
                    lines[2].style.transform = 'none';
                }
            }
        }
    });
});

// 导出供其他脚本使用
window.TopNavbar = {
    closeMenu: function() {
        const navbarNav = document.querySelector('.navbar-nav');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (navbarNav) {
            navbarNav.classList.remove('show');
        }
        
        if (mobileToggle) {
            const lines = mobileToggle.querySelectorAll('.hamburger-line');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    }
};
