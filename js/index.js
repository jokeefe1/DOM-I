const siteContent = {
    nav: {
        'nav-item-1': 'Services',
        'nav-item-2': 'Product',
        'nav-item-3': 'Vision',
        'nav-item-4': 'Features',
        'nav-item-5': 'About',
        'nav-item-6': 'Contact',
        'img-src': 'img/logo.png'
    },
    cta: {
        h1: 'DOM Is Awesome',
        button: 'Get Started',
        'img-src': 'img/header-img.png'
    },
    'main-content': {
        'features-h4': 'Features',
        'features-content':
            'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content':
            'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page-accent.jpg',
        'services-h4': 'Services',
        'services-content':
            'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content':
            'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content':
            'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
    },
    contact: {
        'contact-h4': 'Contact',
        address: '123 Way 456 Street Somewhere, USA',
        phone: '1 (888) 888-8888',
        email: 'sales@greatidea.io'
    },
    footer: {
        copyright: 'Copyright Great Idea! 2018'
    }
};

//Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent.nav['img-src']);

//Nav Items
let navItems = Array.from(document.querySelectorAll('header nav a'));
navItems[0].innerText = siteContent.nav['nav-item-1'];
navItems[1].innerText = siteContent.nav['nav-item-2'];
navItems[2].innerText = siteContent.nav['nav-item-3'];
navItems[3].innerText = siteContent.nav['nav-item-4'];
navItems[4].innerText = siteContent.nav['nav-item-5'];
navItems[5].innerText = siteContent.nav['nav-item-6'];

//Cta Items
let ctaH1 = (document.querySelector('.cta-text h1').textContent =
    siteContent.cta.h1);
let ctaBtn = (document.querySelector('.cta-text button').textContent =
    siteContent.cta.button);
let ctaImg = (document.getElementById('cta-img').src =
    siteContent.cta['img-src']);

//Main Content
let topContentHeaders = document.querySelectorAll(
    '.top-content .text-content h4'
);
topContentHeaders[0].innerText = siteContent['main-content']['features-h4'];
topContentHeaders[1].innerText = siteContent['main-content']['about-h4'];

let topContentText = document.querySelectorAll('.top-content .text-content p');
topContentText[0].innerText = siteContent['main-content']['features-content'];
topContentText[1].innerText = siteContent['main-content']['features-content'];

let middleImg = document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"]

//Bottom Content
let bottomContentH4 = document.querySelectorAll('.bottom-content .text-content h4')
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"]
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"]
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"]

let bottomContentP = document.querySelectorAll('.bottom-content .text-content p')
bottomContentP[0].textContent = siteContent['main-content']["services-content"]
bottomContentP[1].textContent = siteContent['main-content']["product-content"]
bottomContentP[2].textContent = siteContent['main-content']["vision-content"]

//Contact
let contactH4 = document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"]

let contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = siteContent.contact.address
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;


//footer
let copyright = document.querySelector('footer p').textContent = siteContent.footer.copyright