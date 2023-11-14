export const navData = {
    navigation: [
        {
            pageTitle: 'Home',
            linkTo: '/',
            id: 0
        },
        {
            pageTitle: 'Work',
            linkTo: '/work',
            id: 1
        },
        {
            pageTitle: 'Resume',
            linkTo: '/resume',
            id: 2
        }
    ],
    socialIcons: [{
        url: 'https://github.com/erinkahn',
            siteName: 'github',
            id: 2
        },
        {
            url: 'https://open.spotify.com/user/121609086?si=e4fbfc938a8b4d12',
            siteName: 'spotify',
            id: 1
        },
        {
            url: 'https://www.linkedin.com/in/erinnkahn/',
            siteName: 'linkedin',
            id: 0
        }
    ]
}

export const sections = {
    homepage: [
        {
            num: 0,
            id: "hero",
            title: 'hero'
        },
        {
            num: 1,
            id: "services",
            title: 'services'
        },
        {
            num: 2,
            id: "featured",
            title: 'featured work'
        },
        {
            num: 3,
            id: "about",
            title: 'about'
        },
        {
            num: 4,
            id: "testimonials",
            title: 'testimonials'
        },
        {
            num: 5,
            id: "footer",
            title: 'footer'
        }
    ]
}

export const heroData = {
    home: {
        title: 'hello world',
        subtitle: 'I bring design to life',
        scrollBtn: true
    },
    work: {
        title: 'work',
        subtitle: 'coding + design',
        scrollBtn: true
    },
    resume: {
        title: 'resume',
        subtitle: 'experience + skills',
        scrollBtn: true
    },
    missing: {
        title: '404',
        subtitle: 'Oops...try again',
        scrollBtn: false
    }
}

export const typewriterData = {
    typewriter: [
        'front-end developer.',
        'freelance designer.',
        'creative technologist.'
    ]
}

export const servicesData = {
    sectionTitle: '',
    services: [
        {
            serviceTitle: 'Branding + Logos',
            description: 'create logos, branding identity suites, business cards, stickers, fliers, and more.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 92">
                        <g fill="none" className="svg-stroke" stroke="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" data-name="Group 12">
                            <path className="path0" d="M5 15s30-29 60-3"/>
                            <path className="path0" d="M67 28S33-13 1 32" data-name="Path 2"/>
                            <path className="path0" d="M67 34s6 12 2 28" data-name="Path 3"/>
                            <path className="path0" d="M39 91s-5-17-17-2" data-name="Path 4"/>
                            <path className="path0" d="M50 86s-12-7-7-19" data-name="Path 5"/>
                            <path className="path0" d="M5 80s26-21 31-33" data-name="Path 6"/>
                            <path className="path0" d="M1 69s22-18 25-26 18-11 19 2-31 39-31 39" data-name="Path 7"/>
                            <path className="path0" d="M61 80s-14-9-10-27-4-24-10-26-17-2-24 13l-7 10a33 33 0 0 1-8 7" data-name="Path 8"/>
                            <path className="path0" d="M66 73s-9-8-5-24-12-29-21-31-17-1-25 12-6 8-14 14" data-name="Path 9"/>
                        </g>
                    </svg>,
            alt: 'fingerprint'
        },
        {
            serviceTitle: 'Web/UX Design',
            description: 'design small to large websites, web pages, and even mobile applications.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87 87">
                    <g className="svg-stroke" fill="none" stroke="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" data-name="Group 8">
                    <g transform="translate(7 7)">
                        <rect className="path1" width="73" height="73" stroke="none" rx="3"/>
                        <rect className="path1" width="71" height="71" x="1" y="1" rx="2"/>
                    </g>
                        <path d="M80 5V1" data-name="Path 9"/>
                        <path d="M80 86v-4" data-name="Path 9 Copy 2"/>
                        <path d="M8 5V1" data-name="Path 9 Copy"/>
                        <path d="M8 86v-4" data-name="Path 9 Copy 3"/>
                        <path d="M82 80h4" data-name="Path 10"/>
                        <path d="M1 80h4" data-name="Path 10 Copy 2"/>
                        <path d="M82 8h4" data-name="Path 10 Copy"/>
                        <path d="M1 8h4" data-name="Path 10 Copy 3"/>
                    </g>
                </svg>,
            alt: 'artboard'
        },
        {
            serviceTitle: 'Web Development',
            description: 'build custom websites and web apps with front end technology.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.6 74.2">
                    <g className="svg-stroke">
                        <path className="path2" strokeWidth="2" fill="none" d="M80.7 73.3H3.5c-1.6 0-3-1.3-3-3v-67c0-1.6 1.3-3 3-3h77.2c1.6 0 3 1.3 3 3v67c0 1.7-1.3 3-3 3z"/>
                        <path className="path2" strokeWidth="2" fill="none" d="M75.1 68.4h-66c-1.4 0-2.5-1.1-2.5-2.5V8.7c0-1.4 1.1-2.5 2.5-2.5h66c1.4 0 2.5 1.1 2.5 2.5v57.2c0 1.4-1.1 2.5-2.5 2.5z"/>
                        <path className="path2" strokeWidth="2" fill="none" d="M15.6 17.9h-.5c-1.8 0-3.2-1.4-3.2-3.2v-.4c0-1.8 1.4-3.2 3.2-3.2h.5c1.8 0 3.2 1.4 3.2 3.2v.4c.1 1.8-1.4 3.2-3.2 3.2z"/>
                        <path className="path2" strokeWidth="2" fill="none" d="M70.5 43.2H13.3c-.7 0-1.3-.6-1.3-1.3V24.8c0-.7.6-1.3 1.3-1.3h57.2c.7 0 1.3.6 1.3 1.3v17.1c0 .7-.6 1.3-1.3 1.3z"/>
                        <path className="path2" strokeWidth="2" fill="none" d="M25.5 61.8H12.3c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5h13.2c.3 0 .5.2.5.5v11c0 .3-.2.5-.5.5zm22.8 0H35.1c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5h13.2c.3 0 .5.2.5.5v11c0 .3-.2.5-.5.5zm23.1 0H58.1c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5h13.2c.3 0 .5.2.5.5v11c.1.3-.2.5-.4.5z"/>
                        <path className="path2" strokeWidth="2" fill="none" d="M48.1 14.9h6M31.2 32.6h22.4M36.2 36h11.6M57 14.9h6m2.3 0h6" />
                    </g>
                </svg>,
            alt: 'webpage'
        }
    ]
}

export const featuredData = {
    sectionTitle: 'work',
    featured: [
        {
            client: 'Scott Brothers',
            slideNum: '01',
            tech: 'PHP, WordPress, Git, Sass, JavaScript',
            content: 'A newly designed Wordpress website built for The Scott Brothers, the famous HGTV fixer-upper brothers',
            role: 'Developer',
            devs: 'John Finch, Dave Carney',
            desktop: '/images/work/code/d&j/SB-desktop.webp',
            tablet: '/images/work/code/d&j/SB-tablet.webp',
            mobile: '/images/work/code/d&j/SB-mobile.webp',
            alt: 'The Scott Brother Twins',
            url: 'https://thescottbrothers.com/'
        },
        {
            client: 'Waffle House',
            slideNum: '02',
            tech: 'HTML, PHP, WordPress, Git, Sass, JavaScript, Vue',
            content: `A newly redesigned website for Waffle House, America's favorite breakfast spot`,
            role: 'Developer',
            devs: 'John Finch, Dave Carney',
            desktop: '/images/work/code/waffle/WH-desktop.webp',
            tablet: '/images/work/code/waffle/WH-tablet.webp',
            mobile: '/images/work/code/waffle/WH-mobile.webp',
            alt: 'Waffle House building',
            url: 'https://www.wafflehouse.com/'
        },
        {
            client: 'The Conlan Company',
            slideNum: '03',
            tech: 'PHP, WordPress, Git, Sass, JavaScript, Waypoints, GSAP',
            content: 'A newly designed website for Conlan Company, a large contracting company located in Goergia, Florida and Texas',
            role: 'Lead Developer',
            devs: 'John Finch',
            desktop: '/images/work/code/conlan/Conlan-desktop.webp',
            tablet: '/images/work/code/conlan/Conlan-tablet.webp',
            mobile: '/images/work/code/conlan/Conlan-mobile.webp',
            alt: 'The Conlan Company',
            url: 'https://conlancompany.com/'
        },{
            client: 'Expo Home Improvement',
            slideNum: '04',
            tech: 'PHP, Git, Sass, JavaScript, Vue, Custom CMS',
            content: 'A custom built website for Expo Home Improvement, a home improvement company located in Texas',
            role: 'Lead Developer',
            devs: 'Eric King',
            desktop: '/images/work/code/expo/Expo-Desktop.webp',
            tablet: '/images/work/code/expo/Expo-tablet.webp',
            mobile: '/images/work/code/expo/Expo-mobile.webp',
            alt: 'Expo Home Improvement',
            url: 'https://expohomeimprovement.com/'
        }
    ]
}

export const workData = {
    sectionTitle: 'work',
    tabs: [
        // {
        //     tabTitle: 'All',
        //     id: 0,
        //     showTab: 'show_all'
        // },
        {
            tabTitle: 'Code',
            id: 0,
            showTab: 'show_websites'
        },
        {
            tabTitle: 'Design',
            id: 1,
            showTab: 'show_designs'
        },
        {
            tabTitle: 'Art',
            id: 2,
            showTab: 'show_art'
        }
    ],
    projects: [
        {
            title: "Aerangis",
            img: '/images/work/code/aerangis/Aerangis.webp',
            url: 'https://aerangis.com/',
            role: 'Developer',
            designers: 'Jade Nipper',
            icons: [
                {
                    img: '/images/work/icons/shopify.svg',
                    alt: 'shopify icon'
                },
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/sketch.svg',
                    alt: 'sketch icon'
                }, 
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: `Aerangis is a handmade fragrance line based out of New York City. Filled in beautiful clay pots, Aerangis’ candles come in an array of signature + custom scents based on clients’ favorite herbs and flowers. While working at Vehicle Media, I took a customized design based on the client's Shopify theme and adjusted the styles and markup to match the revised design.`,
            id: 0,
            showAll: false,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "Scott Brothers",
            img: '/images/work/code/d&j/SB-mobile.webp',
            url: 'https://thescottbrothers.com/',
            role: 'Developer',
            designers: 'Leah Watson, Jade Nipper',
            devs: 'John Finch, Dave Carney',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/jquery.svg',
                    alt: 'jquery icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/acf.svg',
                    alt: 'advanced custom fields icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                
                {
                    img: '/images/work/icons/sketch.svg',
                    alt: 'sketch icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: 'Drew and Jonathan, the celebrity HGTV contractor brothers, wanted a site that housed all of their creative ventures in one place. While working at Vehicle Media, myself and two developers built a custom WordPress website that featured everything from their shows and books to their blog and furniture line all on one interactive interface.',
            id: 1,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Pet Portrait",
            img: '/images/work/art/dog.jpg',
            role: 'Artist',
            thumbnails: [
                {
                    img: '/images/work/art/dog.jpg',
                    alt: 'painting of a dog holding a tennis ball'
                }
            ],      
            description: `acrylic on canvas`,
            id: 2,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "The Barber Bar",
            img: '/images/work/design/barberBar/logo.png',
            role: 'Designer',
            thumbnails: [
                {
                    img: '/images/work/design/barberBar/logo.png',
                    alt: 'barber bar logo'
                },
                {
                    img: '/images/work/design/barberBar/store-exterior.jpg',
                    alt: 'storefront exterior'
                },
                {
                    img: '/images/work/design/barberBar/logo-concepts.jpg',
                    alt: 'storefront exterior'
                },
                {
                    img: '/images/work/design/barberBar/team-ts.jpg',
                    alt: 'barber team wearing matching black tshirts'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/indesign.svg',
                    alt: 'indesign icon'
                },
            ],
            description: 'As a freelance designer, I created a brand identity suite and new logo for a locally owned barber salon in Birmingham, Alabama called The Barber Bar.',
            id: 3,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Klimt",
            img: '/images/work/art/klimt.jpg',
            role: 'Artist',
            thumbnails: [
                {
                    img: '/images/work/art/klimt.jpg',
                    alt: 'artwork'
                },
                
            ],
            description: 'Colored Pencil, inspired by one of my favorite artists, Gustav Klimt',
            id: 4,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "Vehicle Media",
            img: '/images/work/code/vm/Vehicle-Media.webp',
            url: 'https://www.vehiclemedia.com/',
            role: 'Developer',
            designers: 'Yinan Xu, Jade Nipper',
            devs: 'Dave Carney, John Finch',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/acf.svg',
                    alt: 'advanced custom fields icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                }
            ],
            description: 'Vehicle Media is a digital marketing agency in Atlanta, Georgia that focuses on graphic + web design, social media, web development, photography and communication strategies. While working at Vehicle Media, I built a new site for the company that showcased new designs, updated projects, blogposts, and more.',
            id: 5,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Sheffield Lentine",
            img: '/images/work/code/sheffieldL/Sheffield-Lentine.webp',
            url: 'https://www.sheffieldlentine.com/',
            role: 'Developer',
            designers: 'Jade Nipper',
            devs: 'John Finch',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/jquery.svg',
                    alt: 'jquery icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/acf.svg',
                    alt: 'advanced custom fields icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/xd.svg',
                    alt: 'xd icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: 'Based out of Birmingham, Alabama, Sheffield and Lentine is a law firm that specializes in all areas of criminal defense, including personal injuries, domestic relations and family law. S&L was in need of a full rebrand. I built a custom WordPress theme from scratch while working at Vehicle Media. The website was nominated and finished in the top 5 for the Webby Awards as “one of the best of web” in the “law” category.',
            id: 6,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Fireside Natural Gas",
            img: '/images/work/code/fireside/Fireside-Natural-Gas.webp',
            url: 'https://firesidenaturalgas.com/',
            role: 'Developer',
            designers: 'David Bilbo',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: `FireSide Natural Gas is one of Georgia's top providers of natural gas service for commercial and industrial users. While working at DynamiX Web Design, I turned a PhotoShop design with many layers into a fully responsive, dynamic, and customizable website.`,
            id: 7,
            showAll: false,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "Powell Law Firm",
            img: '/images/work/code/powell/Powell-Law.webp',
            url: 'https://www.powell.law/',
            role: 'Developer',
            designers: 'David Bilbo',
            devs: 'Andrew Borem',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: 'Powell Law Firm is an injury law firm located in Kentucky. While working at DynamiX Web Design, I transformed a PhotoShop design file into a fully custom and dynamic CMS website with PHP.',
            id: 8,
            showAll: false,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "VSB",
            img: '/images/work/design/vsb/vsb-bus-card.jpg',
            role: 'Designer',
            thumbnails: [
                {
                    img: '/images/work/design/vsb/vsb-bus-card.jpg',
                    alt: 'business cards'
                },
                {
                    img: '/images/work/design/vsb/logo-concepts.jpg',
                    alt: 'desk with two papers of logos'
                },
                {
                    img: '/images/work/design/vsb/brand-identity.jpg',
                    alt: 'holding an ipad at a desk'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/indesign.svg',
                    alt: 'indesign icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
            ],
            description: 'As a freelance designer, I designed the logo and brand identity suite for Volunteer State Builders, a General Contractor/Home Builder located in Middle Tennessee.',
            id: 9,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Waffle House",
            img: '/images/work/code/waffle/WH-desktop.webp',
            url: 'https://www.wafflehouse.com/',
            role: 'Developer',
            designers: 'Leah Watson',
            devs: 'John Finch, Dave Carney',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/acf.svg',
                    alt: 'advanced custom fields icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/vue.svg',
                    alt: 'vue icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                }
            ],
            description: `You either know what Waffle House is or you don't. America's favorite breakfast spot was in need of a major site rehaul. While working with two other develoepers at Vehicle Media on this project, I built and styled several components, pages, and sections of the website. Specific examples being the blogposts, homepage components and sliders, animations, parts of the nav menu, etc.`,
            id: 10,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Handlettering",
            img: '/images/work/art/calligraphy.jpg',
            role: 'Calligrapher',
            thumbnails: [
                {
                    img: '/images/work/art/calligraphy.jpg',
                    alt: 'frame of a quote sitting on a desk'
                },
                {
                    img: '/images/work/art/quote.jpg',
                    alt: 'quote'
                }
            ],
            description: 'digital ipad',
            id: 11,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "Conlan Company",
            img: '/images/work/code/conlan/Conlan-mobile.webp',
            url: 'https://conlancompany.com/',
            role: 'Developer',
            designers: 'VM Designer',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/jquery.svg',
                    alt: 'jquery icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/xd.svg',
                    alt: 'xd icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: `Conlan Company is a large contracting company located in Goergia, Florida and Texas. Conlan invisioned a new website with Parallax features and small movements. While working at Vehicle Media, I built a new custom WordPress theme that included subtle animations and parallax scrolling.`,
            id: 12,
            showAll: false,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "Novo",
            img: '/images/work/design/novo/ipad-colors.jpg',
            role: 'Freelance Designer',
            thumbnails: [
                {
                    img: '/images/work/design/novo/ipad-colors.jpg',
                    alt: 'ipad screen on desk'
                },
                {
                    img: '/images/work/design/novo/desktop.jpg',
                    alt: 'mac desktop computer on a desk'
                },
                {
                    img: '/images/work/design/novo/xd.jpg',
                    alt: 'xd program'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/xd.svg',
                    alt: 'xd icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
            ],
            description: 'As a freelance designer, I redesigned the user interface and provided logo/branding adjustments for a legal software application built by Vehicle Media.',
            id: 13,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Robinson Weeks Partners",
            img: '/images/work/code/rw/Robinson-Weeks.webp',
            url: 'https://robinsonweeks.com/',
            role: 'Developer',
            designers: 'VM Designer',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/jquery.svg',
                    alt: 'jquery icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/xd.svg',
                    alt: 'xd icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: 'Based out of Atlanta, Robinson Weeks is an industrial real estate development and investment firm. Being a niche market, their overall goal was to take their outdated site and make it modern while still keeping a high-end specialty aesthetic. I built a custom WordPress theme from scratch with ACF and ACP for customization and dynamic content.',
            id: 14,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Clover Hill",
            img: '/images/work/design/ch/earrings.jpg',
            role: 'Designer + Developer',
            thumbnails: [
                {
                    img: '/images/work/design/ch/earrings.jpg',
                    alt: 'earrings'
                },
                {
                    img: '/images/work/design/ch/clothing-tags.jpg',
                    alt: 'clothing tags'
                },
                {
                    img: '/images/work/design/ch/storefront.jpg',
                    alt: 'store opening'
                },
                {
                    img: '/images/work/design/ch/bus-cards.jpg',
                    alt: 'business cards'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
                {
                    img: '/images/work/icons/indesign.svg',
                    alt: 'indesign icon'
                },
                {
                    img: '/images/work/icons/shopify.svg',
                    alt: 'shopify icon'
                }
            ],
            description: 'As a freelance designer/developer, I created the logo and worked on the shopify site for a clothing boutique in Pell City, Alabama called Clover Hill. I also designed business cards, clothing tags, and stickers.',
            id: 15,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Nude Portrait",
            img: '/images/work/art/back-portrait2.jpg',
            role: 'Artist',
            thumbnails: [
                {
                    img: '/images/work/art/back-portrait2.jpg',
                    alt: 'living room painting'
                },
                {
                    img: '/images/work/art/back-portrait.jpg',
                    alt: 'painting on an easel'
                }
            ],
            description: 'acrylic on canvas',
            id: 16,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "GKC",
            img: '/images/work/design/gk/grace-klein-community.jpg',
            role: 'Graphic Designer',
            thumbnails: [
                {
                    img: '/images/work/design/gk/grace-klein-community.jpg',
                    alt: 'non-profit truck'
                },
                {
                    img: '/images/work/design/gk/ipad.jpg',
                    alt: 'holding an ipad'
                },
                {
                    img: '/images/work/design/gk/logo-concepts.jpg',
                    alt: 'logo concepts on a desk'
                },
                {
                    img: '/images/work/design/gk/ipad2.jpg',
                    alt: 'ipad on a desk'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/indesign.svg',
                    alt: 'indesign icon'
                },
            ],
            description: 'As an intern, I created the new logo for GKC, a non-profit organization in Alabama',
            id: 17,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Expo Home Improvements",
            img: '/images/work/code/expo/Expo-mobile.webp',
            url: 'https://expohomeimprovement.com/',
            role: 'Developer',
            designers: 'David Bilbo',
            devs: 'Eric King',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/vue.svg',
                    alt: 'vue icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: `Expo Home Improvement is a home improvement company located in Texas. Their purpose is providing homeowners throughout the Dallas-Fort Worth area with high-quality, efficient, and affordable home remodeling. While working at DynamiX Web Design, I turned a PhotoShop web design into a fully responsive, dynamic, and customizable CMS website.`,
            id: 18,
            showAll: false,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "Floral Diptych",
            img: '/images/work/art/floral-diptych.jpg',
            role: 'Artist',
            thumbnails: [
                {
                    img: '/images/work/art/floral-diptych.jpg',
                    alt: 'colorful flowers painted on two boards'
                }
            ],
            description: "acrylic on wood",
            id: 19,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "Kelly Kahn Art",
            img: '/images/work/design/kkart/logo-light.jpg',
            role: 'Graphic Designer',
            thumbnails: [
                {
                    img: '/images/work/design/kkart/bus-cards.jpg',
                    alt: 'business card design'
                },
                {
                    img: '/images/work/design/kkart/kkart-logo.jpg',
                    alt: 'logo design'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/indesign.svg',
                    alt: 'indesign icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: 'As a freelance designer, I created a logo for fine artist, Kelly Kahn, who specializes in custom portrait and landscape paintings.',
            id: 20,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Cahaba Brewing Company",
            img: '/images/work/code/cahaba/Cahaba-Brewing-Co.webp',
            url: 'https://cahababrewing.com/',
            role: 'Freelance Dev / Designer',
            designers: 'Devote Studio',
            devs: 'Devote Studio',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/acf.svg',
                    alt: 'advanced custom fields icon'
                },
                {
                    img: '/images/work/icons/gravityforms.svg',
                    alt: 'gravity forms icon'
                },
                {
                    img: '/images/work/icons/yoast.svg',
                    alt: 'yoast seo icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                }
            ],
            description: 'Cahaba Brewing Company is microbrewery and distillery located in Birmingham, Alabama and distributing quality craft beer throughout Alabama. Hired as a freelance designer/developer, my goal was to offer creative design and technical solutions to improve the overall code quality, page responsiveness, SEO, and design consistency across the site. I added custom fields to allow the client to update the site on their own, removed repetitive code, designed and created new pages such as 404, added conditionals for the backend, and cleaned up their existing stylesheet significantly.',
            id: 21,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Split",
            img: '/images/work/school/Split.webp',
            url: 'https://erin-kahn.com/sites/split/',
            role: 'Developer',
            designers: 'Carol Ehreth',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/sketch.svg',
                    alt: 'sketch icon'
                }
            ],
            description: 'While studying interactive development at The Creative Circus, a designer and I were given an assignment to come up with a design and landing page that was within the category of media. The site we came up with showcases the 2016 thriller film, Split. We decided to play off of the multiple personalities of the protagonist while showcasing parallax animations and both a dark (Beast) and light (Kevin) theme.',
            id: 22,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Aretha Franklin",
            img: '/images/work/school/Aretha.webp',
            url: 'https://erin-kahn.com/sites/aretha/',
            role: 'Developer + Designer',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/sketch.svg',
                    alt: 'sketch icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: `As an interactive development student at The Creative Circus, I took an animations class. The assignment was to build a mini-website that showcased our favorite musical artist. Celebrating the life of the legendary 'Queen of Soul', I chose to build a site that takes the user through the journey of Aretha Franklin's life.`,
            id: 23,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Moodie",
            img: '/images/work/school/Moodie.webp',
            role: 'Designer',
            thumbnails: [
                {
                    img: '/images/work/school/moodie-app.webp',
                    alt: 'iphone screen'
                },
                {
                    img: '/images/work/school/illustrations.webp',
                    alt: 'iphone app'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
                {
                    img: '/images/work/icons/sketch.svg',
                    alt: 'sketch icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                }
            ],
            description: `As a student, I designed an app for users with mental health obstacles. Its purpose is to track a user's mood over time, which transmits stored data to a provider to see progress and if a medication is helpful. Other features include a daily gratitude list, feelings journal, stress tools, and more.`,
            id: 24,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Self Portrait",
            img: '/images/work/art/pencil-drawing.png',
            role: 'Artist',
            thumbnails: [
                {
                    img: '/images/work/art/pencil-drawing.png',
                    alt: 'black and white drawing of girl playing piano'
                }
            ],
            description: 'pencil',
            id: 25,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "Nerds Candy",
            img: '/images/work/school/Nerds.webp',
            url: 'https://erin-kahn.com/sites/nerds/',
            role: 'Developer + Co-Illustrator',
            designers: 'Kate Gallihugh, Leeah Emerson (AD), Will Aebi (Copy)',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
            ],
            description: `While at The Creative Circus, an advertising portolio and web development school in Atlanta, I teamed up with a designer, art director, and copywriter. Our assignment was to create a landing page that showcased a brand for kids. We created a Nerds landing page that focuses on unique characters and self expressive games that allow children to embrace their weirdness and unique traits.`,
            id: 26,
            showAll: false,
            type: "website",
            show: 'show_websites'
        }
    ]
}

export const testimonialData = {
    sectionTitle: 'kind words',
    testimonials: [
        {
            text: "Erin is self-motivated, diligent, and earns praise from peers and leads alike. She shows consistent above-expectations performance as indicated by feedback across her projects. She puts the needs of the company before her own preference.",
            person: "Software Engineering Manager at Avanade",
            id: '0'
        },
        {
            text: "Erin helped me rebrand my online clothing boutique. She met with me and figured out what I was trying to achieve (even when I wasn't quite sure myself). She turned my vision into a reality, and I couldn't be more pleased with the outcome!",
            person: "Client, Owner of Clover Hill Boutique",
            id: '1'
        },
        {
            text: " I appreciate you so much for so many reasons but particularly going the grind of what was the most stressful time ever. This all looks so good. My lord. I’m so grateful to have met you.",
            person: "President of Vehicle Media",
            id: '2'
        },
        {
            text: "You can't depend on hardly ANYbody these days to finish things. I love my logo so much. Thank you!",
            person: "Client, Author of The 50th Dimension",
            id: '3'
        },
        {
            text: "It's always a pleasure working with you. It's amazing to see your constant growth since our first project. I haven't seen too many developers come in and hit the ground running like you have. Your efficiency and communicaiton is going to take you a long way.",
            person: "Peer Developer at Avanade",
            id: '4'
        },
    ]
}

export const timelineData = {
    sectionTitle: 'timeline',
    years: [
        {
            year: '2016',
            company: 'graduated from University of Alabama',
            position: 'Graphic Design + Advertising Degree',
            url: 'https://www.ua.edu/',
        },
        {
            year: '2016-2017',
            company: 'Walls Media, CCG Ideas, Flex Digital',
            position: 'Graphic Design Intern, Freelance Designer',
            url: '',
        },
        {
            year: '2017',
            company: 'started Portfolio School in Atlanta',
            position: 'Interactive Design + Web Development Student',
            url: '',
        },
        {
            year: '2018',
            company: 'graduated from The Creative Circus',
            position: 'Interactive Web Development Certification',
            url: 'http://creativecircus.edu/',
        },
        {
            year: '2018-20',
            company: 'Vehicle Media',
            position: 'WordPress + PHP Developer, Freelance Designer',
            url: 'https://www.vehiclemedia.com/',
        },
        {
            year: '2020-21',
            company: 'DynamiX Web Design',
            position: 'Front-End Developer, Freelance Designer',
            url: 'https://dynamix.site/',
        },
        {
            year: '2021-',
            company: 'Avanade',
            position: 'React Developer, Freelance Designer/Developer',
            url: 'https://www.avanade.com/en',        
        }
    ]
}

export const aboutData = {
    sectionTitle: "about",
    content: 'I am a creative front-end developer with a background in design. I switched over to coding full-time in 2017. I do freelance design on the side for fun. Besides staring at screens for a living, I enjoy spending the other part of my life far away from technology.',
    content2: 'Being out in nature, hiking, camping, and staying active are things that fill my cup. I enjoy living a minimalist life, listening to old music, reading about psychology, and writing.',
    img: {
        src: './images/about/erin.webp',
        fallback: './images/about/erin.png',
        lowRes: './images/about/erin_low_res.png',
        alt: 'portrait shot of erin kahn'
    }
}