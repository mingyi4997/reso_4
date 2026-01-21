// ===================================
// DOM 元素
// ===================================
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const backToTop = document.getElementById('backToTop');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

// ===================================
// 导航栏滚动效果
// ===================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // 添加滚动样式
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // 显示/隐藏返回顶部按钮
    if (currentScroll > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

// ===================================
// 移动端菜单切换
// ===================================
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');

    // 切换汉堡图标动画
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ===================================
// 导航链接点击事件
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // 只处理锚点链接
        if (href.startsWith('#')) {
            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // 关闭移动端菜单
                mobileMenu.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';

                // 平滑滚动到目标位置
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// 返回顶部按钮
// ===================================
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// 滚动动画 - Intersection Observer
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察需要动画的元素
const animateElements = document.querySelectorAll('.feature-card, .showcase-item, .contact-card, .about-text');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// 鼠标跟随效果（可选）
// ===================================
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// 为 hero 背景添加轻微的鼠标跟随效果
const heroBackground = document.querySelector('.hero-background');
if (heroBackground) {
    setInterval(() => {
        const xPercent = (mouseX / window.innerWidth) * 100;
        const yPercent = (mouseY / window.innerHeight) * 100;

        heroBackground.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    }, 100);
}

// ===================================
// 特色卡片悬停效果增强
// ===================================
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(32, 210, 217, 0.08)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.background = 'var(--bg-card)';
    });
});

// ===================================
// 产品展示图片加载动画
// ===================================
const showcaseImages = document.querySelectorAll('.showcase-item img');
showcaseImages.forEach((img, index) => {
    img.addEventListener('load', function() {
        setTimeout(() => {
            this.parentElement.style.opacity = '1';
            this.parentElement.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // 如果图片已经加载完成（从缓存）
    if (img.complete) {
        img.dispatchEvent(new Event('load'));
    }
});

// ===================================
// 页面加载完成后的初始化
// ===================================
window.addEventListener('load', () => {
    // 为页面添加加载完成的类
    document.body.classList.add('loaded');

    // 初始化任何需要在加载后运行的代码
    console.log('知啁 Reso 官网加载完成！');
});

// ===================================
// 防止点击移动端菜单外部区域时关闭菜单
// ===================================
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// ===================================
// 响应式图片优化
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// 触摸设备优化
// ===================================
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');

    // 为触摸设备优化点击效果
    const clickableElements = document.querySelectorAll('a, button, .feature-card, .showcase-item');
    clickableElements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });

        el.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

// ===================================
// 性能优化：节流函数
// ===================================
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// 使用节流优化滚动事件
const throttledScroll = throttle(() => {
    // 可以在这里添加更多滚动相关的优化代码
}, 100);

window.addEventListener('scroll', throttledScroll);

// ===================================
// 错误处理和用户体验增强
// ===================================

// 图片加载失败处理
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        console.warn('图片加载失败:', this.src);
        // 可以设置一个占位图
        // this.src = 'images/placeholder.png';
    });
});

// 外部链接在新标签页打开
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.getAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===================================
// 调试信息（生产环境可删除）
// ===================================
console.log('%c知啁 Reso 官网', 'color: #20D2D9; font-size: 24px; font-weight: bold;');
console.log('%c有些话，不需要答案，只需要被认真地听完', 'color: #2BBEB3; font-size: 14px;');
