// Language Toggle
let currentLang = 'zh';

const translations = {
    zh: {
        '首页': '首页',
        '服务项目': '服务项目',
        '关于我们': '关于我们',
        '联系我们': '联系我们',
        '专业物流运输服务': '专业物流运输服务',
        '全美范围的卡车派送、仓储服务、FBA直送一站式解决方案': '全美范围的卡车派送、仓储服务、FBA直送一站式解决方案',
        '立即咨询': '立即咨询',
        '了解服务': '了解服务',
        '向下滚动': '向下滚动',
        '我们的服务': '我们的服务',
        '提供全方位的物流运输解决方案': '提供全方位的物流运输解决方案',
        '卡车派送': '卡车派送',
        '全美范围的快速、安全、可靠的卡车运输服务': '全美范围的快速、安全、可靠的卡车运输服务',
        '仓储服务': '仓储服务',
        '现代化仓储设施，提供专业的库存管理和仓储解决方案': '现代化仓储设施，提供专业的库存管理和仓储解决方案',
        '一件代发': '一件代发',
        '高效的一件代发服务，助力您的电商业务快速发展': '高效的一件代发服务，助力您的电商业务快速发展',
        '直送私人仓库': '直送私人仓库',
        '直接配送至您的私人仓库，节省时间和成本': '直接配送至您的私人仓库，节省时间和成本',
        'FBA直送': 'FBA直送',
        '专业的亚马逊FBA仓库直送服务，快速高效': '专业的亚马逊FBA仓库直送服务，快速高效',
        '转运服务': '转运服务',
        '灵活的转运解决方案，满足您的多样化物流需求': '灵活的转运解决方案，满足您的多样化物流需求',
        '拆柜服务': '拆柜服务',
        '专业的集装箱拆柜和分拣服务': '专业的集装箱拆柜和分拣服务',
        '贴标换标': '贴标换标',
        '专业的商品贴标和换标服务，符合平台要求': '专业的商品贴标和换标服务，符合平台要求',
        '关于 G&G Transport': '关于 G&G Transport',
        'G&G Transport Inc. 是一家位于加利福尼亚州奥克兰的专业物流运输公司。我们致力于为全美客户提供高效、可靠的物流解决方案。': 'G&G Transport Inc. 是一家位于加利福尼亚州奥克兰的专业物流运输公司。我们致力于为全美客户提供高效、可靠的物流解决方案。',
        '凭借多年的行业经验和专业的团队，我们为客户提供从仓储、运输到配送的一站式服务，帮助客户降低物流成本，提高运营效率。': '凭借多年的行业经验和专业的团队，我们为客户提供从仓储、运输到配送的一站式服务，帮助客户降低物流成本，提高运营效率。',
        '满意客户': '满意客户',
        '专业团队': '专业团队',
        '全天候服务': '全天候服务',
        '公司形象': '公司形象',
        '为什么选择我们': '为什么选择我们',
        '快速高效': '快速高效',
        '优化的物流网络确保快速配送': '优化的物流网络确保快速配送',
        '安全可靠': '安全可靠',
        '完善的保险和追踪系统保障货物安全': '完善的保险和追踪系统保障货物安全',
        '价格透明': '价格透明',
        '合理的价格，无隐藏费用': '合理的价格，无隐藏费用',
        '专业服务': '专业服务',
        '经验丰富的团队提供专业咨询和服务': '经验丰富的团队提供专业咨询和服务',
        '我们随时为您提供专业的物流咨询和服务': '我们随时为您提供专业的物流咨询和服务',
        '地址': '地址',
        '电话': '电话',
        '邮箱': '邮箱',
        '营业时间': '营业时间',
        '周一至周五: 9:00 AM - 6:00 PM': '周一至周五: 9:00 AM - 6:00 PM',
        '周六: 10:00 AM - 4:00 PM': '周六: 10:00 AM - 4:00 PM',
        '姓名': '姓名',
        '电话（可选）': '电话（可选）',
        '留言': '留言',
        '发送消息': '发送消息',
        '专业的物流运输服务提供商': '专业的物流运输服务提供商',
        '快速链接': '快速链接',
        'Home': '首页',
        'Services': '服务项目',
        'About': '关于我们',
        'Contact': '联系我们',
        '保留所有权利': '保留所有权利'
    },
    en: {
        '首页': 'Home',
        '服务项目': 'Services',
        '关于我们': 'About',
        '联系我们': 'Contact',
        '专业物流运输服务': 'Professional Logistics & Transportation',
        '全美范围的卡车派送、仓储服务、FBA直送一站式解决方案': 'Nationwide Trucking, Warehousing, FBA Delivery & Complete Logistics Solutions',
        '立即咨询': 'Get Quote',
        '了解服务': 'Our Services',
        '向下滚动': 'Scroll Down',
        '我们的服务': 'Our Services',
        '提供全方位的物流运输解决方案': 'Comprehensive Logistics & Transportation Solutions',
        '卡车派送': 'Truck Delivery',
        '全美范围的快速、安全、可靠的卡车运输服务': 'Fast, safe, and reliable trucking services nationwide',
        '仓储服务': 'Warehousing',
        '现代化仓储设施，提供专业的库存管理和仓储解决方案': 'Modern warehousing facilities with professional inventory management',
        '一件代发': 'Fulfillment',
        '高效的一件代发服务，助力您的电商业务快速发展': 'Efficient fulfillment services to accelerate your e-commerce business',
        '直送私人仓库': 'Private Warehouse Delivery',
        '直接配送至您的私人仓库，节省时间和成本': 'Direct delivery to your private warehouse, saving time and costs',
        'FBA直送': 'FBA Delivery',
        '专业的亚马逊FBA仓库直送服务，快速高效': 'Professional Amazon FBA warehouse direct delivery service',
        '转运服务': 'Transit Service',
        '灵活的转运解决方案，满足您的多样化物流需求': 'Flexible transit solutions to meet your diverse logistics needs',
        '拆柜服务': 'Container Unloading',
        '专业的集装箱拆柜和分拣服务': 'Professional container unloading and sorting services',
        '贴标换标': 'Labeling Service',
        '专业的商品贴标和换标服务，符合平台要求': 'Professional product labeling and relabeling services',
        '关于 G&G Transport': 'About G&G Transport',
        'G&G Transport Inc. 是一家位于加利福尼亚州奥克兰的专业物流运输公司。我们致力于为全美客户提供高效、可靠的物流解决方案。': 'G&G Transport Inc. is a professional logistics and transportation company located in Oakland, California. We are committed to providing efficient and reliable logistics solutions for customers nationwide.',
        '凭借多年的行业经验和专业的团队，我们为客户提供从仓储、运输到配送的一站式服务，帮助客户降低物流成本，提高运营效率。': 'With years of industry experience and a professional team, we provide one-stop services from warehousing, transportation to distribution, helping customers reduce logistics costs and improve operational efficiency.',
        '满意客户': 'Satisfied Clients',
        '专业团队': 'Team Members',
        '全天候服务': '24/7 Service',
        '公司形象': 'Company Image',
        '为什么选择我们': 'Why Choose Us',
        '快速高效': 'Fast & Efficient',
        '优化的物流网络确保快速配送': 'Optimized logistics network ensures fast delivery',
        '安全可靠': 'Safe & Reliable',
        '完善的保险和追踪系统保障货物安全': 'Comprehensive insurance and tracking system ensures cargo safety',
        '价格透明': 'Transparent Pricing',
        '合理的价格，无隐藏费用': 'Reasonable pricing with no hidden fees',
        '专业服务': 'Professional Service',
        '经验丰富的团队提供专业咨询和服务': 'Experienced team provides professional consultation and service',
        '我们随时为您提供专业的物流咨询和服务': 'We\'re always here to provide professional logistics consultation and services',
        '地址': 'Address',
        '电话': 'Phone',
        '邮箱': 'Email',
        '营业时间': 'Business Hours',
        '周一至周五: 9:00 AM - 6:00 PM': 'Monday - Friday: 9:00 AM - 6:00 PM',
        '周六: 10:00 AM - 4:00 PM': 'Saturday: 10:00 AM - 4:00 PM',
        '姓名': 'Name',
        '电话（可选）': 'Phone (Optional)',
        '留言': 'Message',
        '发送消息': 'Send Message',
        '专业的物流运输服务提供商': 'Professional Logistics & Transportation Service Provider',
        '快速链接': 'Quick Links',
        'Home': 'Home',
        'Services': 'Services',
        'About': 'About',
        'Contact': 'Contact',
        '保留所有权利': 'All rights reserved'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    const langBtn = document.getElementById('langBtn');
    langBtn.textContent = currentLang === 'zh' ? 'EN' : '中文';

    // Update all elements with data-zh and data-en attributes
    document.querySelectorAll('[data-zh]').forEach(element => {
        const zhText = element.getAttribute('data-zh');
        const enText = element.getAttribute('data-en');
        element.textContent = currentLang === 'zh' ? zhText : enText;
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');

    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.getElementById('hamburger').classList.remove('active');
            }
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = currentLang === 'zh' ? '发送中...' : 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        alert(currentLang === 'zh'
            ? '感谢您的留言！我们会尽快与您联系。'
            : 'Thank you for your message! We will contact you soon.');

        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and feature items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .feature-item, .about-text, .about-image');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Initialize language button
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }

    // Initialize hamburger menu
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

