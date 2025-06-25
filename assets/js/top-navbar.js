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
