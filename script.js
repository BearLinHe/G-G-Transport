// Language Toggle
let currentLang = 'zh';

const translations = {
    zh: {
        '首页': '首页',
        '服务项目': '服务项目',
        '关于我们': '关于我们',
        '订单追踪': '订单追踪',
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
        '订单追踪': 'Tracking',
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
    
    // Update placeholder for tracking input
    const trackingInput = document.getElementById('trackingNumber');
    if (trackingInput) {
        const placeholder = trackingInput.getAttribute(currentLang === 'zh' ? 'data-zh-placeholder' : 'data-en-placeholder');
        trackingInput.placeholder = placeholder;
    }
    
    // Re-display tracking if there's an active tracking result
    const displayTrackingNumber = document.getElementById('displayTrackingNumber');
    if (displayTrackingNumber && displayTrackingNumber.textContent) {
        const trackingNumber = displayTrackingNumber.textContent;
        displayTracking(trackingNumber);
    }
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

// Tracking System
const chinesePorts = ['深圳港', '宁波港', '上海港', '青岛港', '天津港', '广州港'];
const oaklandPorts = ['OICT (Oakland International Container Terminal)', 'ETS (Evergreen Terminal Services)', 'TRAPAC (TraPac Terminal)'];
const transitLocations = [
    { name: '太平洋中转站', en: 'Pacific Transit Hub' },
    { name: '洛杉矶港', en: 'Port of Los Angeles' },
    { name: '长滩港', en: 'Port of Long Beach' },
    { name: '旧金山湾', en: 'San Francisco Bay' },
    { name: '奥克兰海关', en: 'Oakland Customs' }
];

// Seeded random number generator for deterministic results
class SeededRandom {
    constructor(seed) {
        this.seed = seed;
    }
    
    // Simple linear congruential generator
    next() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }
    
    // Get random integer between min and max (inclusive)
    nextInt(min, max) {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }
}

function generateTrackingNumber() {
    // Generate 8-character alphanumeric code
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Convert alphanumeric string to numeric seed
function stringToSeed(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

function generateTrackingData(trackingNumber) {
    // Use tracking number as seed for deterministic results
    const seed = stringToSeed(trackingNumber.toUpperCase());
    const rng = new SeededRandom(seed);
    
    // Generate deterministic dates based on seed - 发货时间 7-9月，到港时间 9-11月
    const startMonth = rng.nextInt(7, 9); // 7-9月
    const startDay = rng.nextInt(1, 28);
    const startDate = new Date(2024, startMonth - 1, startDay, 17 + rng.nextInt(0, 5), rng.nextInt(0, 59), rng.nextInt(0, 59));
    
    const endMonth = rng.nextInt(9, 11); // 9-11月
    const endDay = rng.nextInt(1, 28);
    const endDate = new Date(2024, endMonth - 1, endDay, 9 + rng.nextInt(0, 2), rng.nextInt(0, 59), rng.nextInt(0, 59));
    
    // Calculate time intervals
    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    
    const originPort = chinesePorts[rng.nextInt(0, chinesePorts.length - 1)];
    const destinationPort = oaklandPorts[rng.nextInt(0, oaklandPorts.length - 1)];
    
    const trackingEvents = [];
    
    // 1. 已下单 (Order placed)
    const orderDate = new Date(startDate);
    orderDate.setDate(orderDate.getDate() - rng.nextInt(0, 1));
    orderDate.setHours(17 + rng.nextInt(0, 5), rng.nextInt(0, 59), rng.nextInt(0, 59));
    trackingEvents.push({
        status: 'completed',
        title: currentLang === 'zh' ? '已下单' : 'Order placed',
        time: formatDateFull(orderDate)
    });
    
    // 2. 集散中心已收货
    const receiveDate = new Date(startDate);
    receiveDate.setDate(receiveDate.getDate() - rng.nextInt(0, 0));
    receiveDate.setHours(19 + rng.nextInt(0, 3), rng.nextInt(0, 59), rng.nextInt(0, 59));
    const portName = originPort.replace('港', '');
    trackingEvents.push({
        status: 'completed',
        title: currentLang === 'zh' ? `${portName}集散中心已收货,*CN` : `${portName} Distribution Center has received goods,*CN`,
        time: formatDateFull(receiveDate)
    });
    
    // 3. 已装柜，预计开船
    const loadDate = new Date(startDate);
    loadDate.setDate(loadDate.getDate() - 2);
    loadDate.setHours(20 + rng.nextInt(0, 2), rng.nextInt(0, 59), rng.nextInt(0, 59));
    const sailDay = startDate.getDate();
    const sailMonth = startDate.getMonth() + 1;
    trackingEvents.push({
        status: 'completed',
        title: currentLang === 'zh' ? `您好,已装柜,预计${sailMonth}.${sailDay}开船` : `Hello, container loaded, estimated departure on ${sailMonth}.${sailDay}`,
        time: formatDateFull(loadDate)
    });
    
    // 4. 已开船，预计到港
    const sailDate = new Date(startDate);
    sailDate.setHours(0 + rng.nextInt(0, 1), rng.nextInt(0, 59), rng.nextInt(0, 59));
    const arriveDay = endDate.getDate() - 1;
    const arriveMonth = endDate.getMonth() + 1;
    trackingEvents.push({
        status: 'completed',
        title: currentLang === 'zh' ? `您好,已开船,预计当地${arriveMonth}.${arriveDay}到港` : `Hello, vessel has departed, estimated arrival at local port on ${arriveMonth}.${arriveDay}`,
        time: formatDateFull(sailDate)
    });
    
    // 5. 船司更新：预计到港
    const updateDate = new Date(endDate);
    updateDate.setDate(updateDate.getDate() - 1);
    updateDate.setHours(12 + rng.nextInt(0, 1), rng.nextInt(0, 59), rng.nextInt(0, 59));
    const estDay = endDate.getDate();
    const estMonth = endDate.getMonth() + 1;
    trackingEvents.push({
        status: 'completed',
        title: currentLang === 'zh' ? `您好,船司更新:预计当地${estMonth}.${estDay}到港` : `Hello, shipping company update: estimated arrival at local port on ${estMonth}.${estDay}`,
        time: formatDateFull(updateDate)
    });
    
    // 6. 已到港，清关放行
    const arriveDate = new Date(endDate);
    arriveDate.setHours(9 + rng.nextInt(0, 1), rng.nextInt(0, 59), rng.nextInt(0, 59));
    trackingEvents.push({
        status: 'completed',
        title: currentLang === 'zh' ? '您好,已到港,清关放行。柜子已卸船,在预约提柜中' : 'Hello, arrived at port, customs cleared. Container has been unloaded, awaiting scheduled pickup',
        time: formatDateFull(arriveDate)
    });
    
    // 7. 预约提柜
    const pickupDate = new Date(endDate);
    pickupDate.setDate(pickupDate.getDate() + 1);
    pickupDate.setHours(9 + rng.nextInt(0, 1), rng.nextInt(0, 59), rng.nextInt(0, 59));
    const pickupDay = pickupDate.getDate();
    const pickupMonth = pickupDate.getMonth() + 1;
    trackingEvents.push({
        status: 'active',
        title: currentLang === 'zh' ? `您好,预约当地${pickupMonth}.${pickupDay}提柜` : `Hello, scheduled local container pickup for ${pickupMonth}.${pickupDay}`,
        time: formatDateFull(pickupDate)
    });
    
    // Reverse order (newest first)
    return trackingEvents.reverse();
}

function formatDateFull(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function displayTracking(trackingNumber) {
    const trackingResult = document.getElementById('trackingResult');
    const displayTrackingNumber = document.getElementById('displayTrackingNumber');
    const trackingTimelineContent = document.getElementById('trackingTimelineContent');
    
    displayTrackingNumber.textContent = trackingNumber;
    
    const trackingData = generateTrackingData(trackingNumber);
    
    trackingTimelineContent.innerHTML = '';
    
    trackingData.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = `tracking-item ${event.status}`;
        
        item.innerHTML = `
            <div class="tracking-item-content">
                <div class="tracking-item-title">${event.title}</div>
                <div class="tracking-item-time">${event.time}</div>
            </div>
        `;
        
        trackingTimelineContent.appendChild(item);
    });
    
    trackingResult.style.display = 'block';
    
    // Scroll to tracking result
    trackingResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Initialize tracking functionality
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateTrackingBtn');
    const trackBtn = document.getElementById('trackBtn');
    const trackingInput = document.getElementById('trackingNumber');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            const randomNumber = generateTrackingNumber();
            trackingInput.value = randomNumber;
        });
    }
    
    function validateTrackingNumber(trackingNumber) {
        const trimmed = trackingNumber.trim().toUpperCase();
        if (!trimmed) {
            return { valid: false, message: currentLang === 'zh' ? '请输入订单号' : 'Please enter a tracking number' };
        }
        if (!/^[A-Z0-9]{8}$/.test(trimmed)) {
            return { valid: false, message: currentLang === 'zh' ? '订单号必须是8位字母或数字' : 'Tracking number must be 8 characters (letters or numbers)' };
        }
        return { valid: true, normalized: trimmed };
    }

    if (trackBtn) {
        trackBtn.addEventListener('click', () => {
            const trackingNumber = trackingInput.value.trim();
            const validation = validateTrackingNumber(trackingNumber);
            if (validation.valid) {
                // Use normalized (uppercase) version
                displayTracking(validation.normalized);
                // Update input to normalized version
                trackingInput.value = validation.normalized;
            } else {
                alert(validation.message);
                trackingInput.focus();
            }
        });
    }
    
    if (trackingInput) {
        // Convert to uppercase and only allow alphanumeric
        trackingInput.addEventListener('input', (e) => {
            let value = e.target.value.toUpperCase();
            value = value.replace(/[^A-Z0-9]/g, '');
            e.target.value = value;
        });

        trackingInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const trackingNumber = trackingInput.value.trim();
                const validation = validateTrackingNumber(trackingNumber);
                if (validation.valid) {
                    displayTracking(validation.normalized);
                    trackingInput.value = validation.normalized;
                } else {
                    alert(validation.message);
                    trackingInput.focus();
                }
            }
        });
        
        // Set initial placeholder
        const placeholder = trackingInput.getAttribute(currentLang === 'zh' ? 'data-zh-placeholder' : 'data-en-placeholder');
        trackingInput.placeholder = placeholder;
    }
});

