// 博客花里胡哨特效集合

// 动态背景粒子效果
class ParticleBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        this.canvas.id = 'particle-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.6';
        
        document.body.appendChild(this.canvas);
        
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        const particleCount = Math.min(100, Math.floor(window.innerWidth / 10));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 2 - 1,
                speedY: Math.random() * 2 - 1,
                opacity: Math.random() * 0.5 + 0.2,
                color: this.getRandomColor()
            });
        }
    }
    
    getRandomColor() {
        const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // 边界反弹
            if (particle.x <= 0 || particle.x >= this.canvas.width) particle.speedX *= -1;
            if (particle.y <= 0 || particle.y >= this.canvas.height) particle.speedY *= -1;
            
            // 绘制粒子
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// 阅读进度条
class ReadingProgress {
    constructor() {
        this.progressBar = null;
        this.init();
    }
    
    init() {
        // 只在文章页面显示
        if (!document.querySelector('.post') && !document.querySelector('.page')) return;
        
        this.createProgressBar();
        this.updateProgress();
        
        window.addEventListener('scroll', () => this.updateProgress());
    }
    
    createProgressBar() {
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'reading-progress';
        this.progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
        document.body.appendChild(this.progressBar);
    }
    
    updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        const fill = this.progressBar.querySelector('.reading-progress-fill');
        fill.style.width = Math.min(100, Math.max(0, scrollPercent)) + '%';
    }
}

// 回到顶部按钮
class BackToTop {
    constructor() {
        this.button = null;
        this.init();
    }
    
    init() {
        this.createButton();
        this.bindEvents();
    }
    
    createButton() {
        this.button = document.createElement('button');
        this.button.className = 'back-to-top';
        this.button.innerHTML = '↑';
        this.button.title = '回到顶部';
        document.body.appendChild(this.button);
    }
    
    bindEvents() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        });
        
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 打字机效果
class TypeWriter {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        
        if (this.element) {
            this.type();
        }
    }
    
    type() {
        const current = this.textIndex % this.texts.length;
        const fullText = this.texts[current];
        
        if (this.isDeleting) {
            this.element.textContent = fullText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = fullText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let typeSpeed = this.speed;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!this.isDeleting && this.charIndex === fullText.length) {
            typeSpeed = 2000; // 停顿时间
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex++;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// 随机鼓励语句
class EncouragementQuotes {
    constructor() {
        this.quotes = [
            "今天也要加油哦！ 💪",
            "每一次学习都是进步 📚",
            "代码改变世界 🌍",
            "Debug 人生，永不放弃 🐛",
            "咖啡 + 代码 = 快乐 ☕",
            "Stay hungry, stay foolish 🚀",
            "Code with ❤️",
            "Make it work, make it right, make it fast ⚡",
            "今日事今日毕 ✅",
            "学而时习之，不亦说乎 📖"
        ];
        this.init();
    }
    
    init() {
        this.showRandomQuote();
        // 每30秒更换一次
        setInterval(() => this.showRandomQuote(), 30000);
    }
    
    showRandomQuote() {
        const quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.createToast(quote);
    }
    
    createToast(message) {
        const toast = document.createElement('div');
        toast.className = 'encouragement-toast';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // 动画显示
        setTimeout(() => toast.classList.add('show'), 100);
        
        // 3秒后消失
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }
}

// 动态统计数据
class DynamicStats {
    constructor() {
        this.stats = {
            articles: 0,
            words: 0,
            visitors: 0,
            coffee: 0
        };
        this.init();
    }
    
    init() {
        this.calculateStats();
        this.displayStats();
    }
    
    calculateStats() {
        // 计算文章数量
        const posts = document.querySelectorAll('.post-entry, .archive-item');
        this.stats.articles = posts.length;
        
        // 估算总字数（基于文章数量）
        this.stats.words = this.stats.articles * 800;
        
        // 模拟访客数（基于文章数和随机数）
        this.stats.visitors = Math.floor(this.stats.articles * 100 + Math.random() * 500);
        
        // 模拟咖啡消耗量
        this.stats.coffee = Math.floor(this.stats.articles * 2.5);
    }
    
    displayStats() {
        const statsContainer = document.querySelector('.stats-container');
        if (!statsContainer) return;
        
        this.animateNumber(statsContainer.querySelector('.stat-articles'), this.stats.articles);
        this.animateNumber(statsContainer.querySelector('.stat-words'), this.stats.words);
        this.animateNumber(statsContainer.querySelector('.stat-visitors'), this.stats.visitors);
        this.animateNumber(statsContainer.querySelector('.stat-coffee'), this.stats.coffee);
    }
    
    animateNumber(element, target) {
        if (!element) return;
        
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 50);
    }
}

// 目录跟随滚动和高亮功能
class TableOfContents {
    constructor() {
        this.tocNav = document.querySelector('.toc-nav');
        this.tocLinks = document.querySelectorAll('.toc a');
        this.headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        this.activeClass = 'active';
        
        if (this.tocNav && this.tocLinks.length > 0 && this.headings.length > 0) {
            this.init();
        }
    }
    
    init() {
        // 为目录链接添加点击平滑滚动
        this.tocLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // 监听滚动事件
        window.addEventListener('scroll', () => this.updateActiveLink());
        
        // 初始化高亮
        this.updateActiveLink();
    }
    
    updateActiveLink() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offset = 100; // 偏移量
        
        let activeHeading = null;
        
        // 找到当前可视区域的标题
        for (let i = this.headings.length - 1; i >= 0; i--) {
            const heading = this.headings[i];
            const headingTop = heading.offsetTop;
            
            if (scrollTop >= headingTop - offset) {
                activeHeading = heading;
                break;
            }
        }
        
        // 移除所有高亮
        this.tocLinks.forEach(link => link.classList.remove(this.activeClass));
        
        // 添加当前标题的高亮
        if (activeHeading) {
            const activeLink = document.querySelector(`.toc a[href="#${activeHeading.id}"]`);
            if (activeLink) {
                activeLink.classList.add(this.activeClass);
                
                // 确保活动链接在可视区域内
                this.scrollToActiveLink(activeLink);
            }
        }
    }
    
    scrollToActiveLink(activeLink) {
        const tocNav = this.tocNav;
        const linkTop = activeLink.offsetTop;
        const linkHeight = activeLink.offsetHeight;
        const navHeight = tocNav.clientHeight;
        const scrollTop = tocNav.scrollTop;
        
        // 如果链接在可视区域外，滚动到合适位置
        if (linkTop < scrollTop) {
            tocNav.scrollTop = linkTop - 20;
        } else if (linkTop + linkHeight > scrollTop + navHeight) {
            tocNav.scrollTop = linkTop + linkHeight - navHeight + 20;
        }
    }
}

// 初始化所有特效
document.addEventListener('DOMContentLoaded', function() {
    // 判断是否在主页
    const isHomePage = document.querySelector('.welcome-section');
    
    // 粒子背景（仅主页）
    if (isHomePage) {
        new ParticleBackground();
    }
    
    // 阅读进度条
    new ReadingProgress();
    
    // 回到顶部按钮
    new BackToTop();
    
    // 打字机效果（仅主页）
    if (isHomePage) {
        const typewriterElement = document.querySelector('.typewriter-text');
        if (typewriterElement) {
            new TypeWriter(typewriterElement, [
                '欢迎来到我的博客',
                '这里有技术分享',
                '这里有学习笔记',
                '这里有生活感悟',
                '让我们一起成长'
            ]);
        }
        
        // 鼓励语句
        new EncouragementQuotes();
        
        // 动态统计
        new DynamicStats();
    }
    
    // 目录高亮
    new TableOfContents();
});

// 页面卸载时清理资源
window.addEventListener('beforeunload', function() {
    const canvas = document.getElementById('particle-canvas');
    if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
    }
});
