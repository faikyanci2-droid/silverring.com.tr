import type { SiteContent } from './tr';

// English content — structurally validated against the Turkish source (tr.ts).

const en: SiteContent = {
  company: {
    name: 'SilverRing',
    legalName: 'SilverRing Metal Sanayi A.Ş.',
    tagline: 'Manufacturer of Drum & Pail Accessories',
    phone: '0262 646 70 77',
    phoneHref: '+902626467077',
    email: 'info@silverring.com.tr',
    hqTitle: 'Headquarters & Plant',
    hqAddress: ['Gebze Güzeller O.S.B', 'İnönü Mah. Aşık Veysel Sok. No:2/1', 'Kocaeli / Türkiye'],
    branchTitle: 'Branch',
    branchAddress: ['Barış Mah. 1802 Sok. No:11', 'Gebze / Kocaeli'],
    footerBlurb:
      'A leading supplier to the packaging industry in the manufacture of metal, plastic and fibre drum rings and accessories. Exporting to nearly 30 countries.',
  },

  common: {
    skipToContent: 'Skip to content',
    home: 'Home',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    allRightsReserved: 'All rights reserved.',
    location: 'Gebze, Kocaeli — Türkiye',
    langLabel: 'Language',
    readMore: 'Read more',
    explore: 'Explore',
    viewCatalog: 'View Catalogue',
    contactUs: 'Contact Us',
    getInTouch: 'Get in Touch',
    requestCatalog: 'Request Catalogue',
    backToHome: 'Back to home',
  },

  nav: {
    home: 'Home',
    corporate: 'Corporate',
    products: 'Products',
    catalog: 'Catalogue',
    services: 'Technical Services',
    quality: 'Quality',
    news: 'News',
    responsibility: 'Social Responsibility',
    careers: 'Careers',
    contact: 'Contact',
    sub: {
      corporate: [
        { label: 'About Us', hash: 'hakkimizda' },
        { label: 'Quality Policy', hash: 'kalite-politikasi' },
        { label: 'Environmental Policy', hash: 'cevre-politikasi' },
        { label: 'OH&S Policy', hash: 'isg-politikasi' },
        { label: 'Customer Satisfaction Policy', hash: 'musteri-politikasi' },
        { label: 'Social Responsibility Policy', hash: 'sosyal-politikasi' },
        { label: 'Sustainable Procurement Policy', hash: 'tedarik-politikasi' },
        { label: 'Modern Slavery Policy and Statement', hash: 'modern-kolelik-politikasi' },
      ],
      products: [
        {
          title: 'Rings',
          hash: 'cemberler',
          items: [
            { label: 'Sheet Metal Drum Ring', hash: 'cemberler' },
            { label: 'Tinplate Pail Ring', hash: 'cemberler' },
            { label: 'Special Purpose Rings', hash: 'cemberler' },
          ],
        },
        {
          title: 'Accessories',
          hash: 'aksesuarlar',
          items: [
            { label: 'Handles', hash: 'kulplar' },
            { label: 'Other Accessories', hash: 'aksesuarlar' },
          ],
        },
      ],
      services: [
        { label: 'Consultancy', hash: 'danismanlik' },
        { label: 'Product Design', hash: 'urun-tasarimi' },
        { label: 'Product Development', hash: 'urun-gelistirme' },
        { label: 'Testing', hash: 'test' },
      ],
      quality: [
        { label: 'Quality Control', hash: 'kalite-kontrol' },
        { label: 'Certificates', hash: 'sertifikalar' },
        { label: 'Memberships', hash: 'uyelikler' },
        { label: 'Trademark Registration', hash: 'marka-tescil' },
      ],
      responsibility: [
        { label: 'Support for Education', hash: 'egitim' },
        { label: 'Support for Street Animals', hash: 'hayvan' },
      ],
    },
  },

  footer: {
    colCorporate: 'Corporate',
    colProducts: 'Products & Services',
    colContact: 'Contact',
    linksCorporate: [
      { label: 'About Us', key: 'corporate', hash: 'hakkimizda' },
      { label: 'Quality Policy', key: 'corporate', hash: 'kalite-politikasi' },
      { label: 'Environmental Policy', key: 'corporate', hash: 'cevre-politikasi' },
      { label: 'Social Responsibility', key: 'responsibility', hash: '' },
      { label: 'Careers', key: 'careers', hash: '' },
    ],
    linksProducts: [
      { label: 'Rings', key: 'products', hash: 'cemberler' },
      { label: 'Accessories', key: 'products', hash: 'aksesuarlar' },
      { label: 'Catalogue', key: 'catalog', hash: '' },
      { label: 'Technical Services', key: 'services', hash: '' },
      { label: 'Certificates', key: 'quality', hash: 'sertifikalar' },
    ],
  },

  meta: {
    home: {
      title: 'Drum & Pail Ring, Handle and Accessory Manufacturer',
      description:
        'SilverRing Metal Sanayi A.Ş. — manufacturer of drum and pail accessories: metal, plastic and fibre rings, handles and accessories. Exporting to nearly 30 countries.',
    },
    corporate: {
      title: 'Corporate',
      description:
        'About SilverRing and our policies on quality, environment, occupational health & safety, customer satisfaction, social responsibility and sustainable procurement.',
    },
    products: {
      title: 'Products',
      description:
        'Metal, plastic and fibre drum rings, stainless steel rings, handles and drum accessories — the SilverRing product range.',
    },
    catalog: {
      title: 'Catalogue',
      description: 'SilverRing product catalogue — technical dimensions, materials and locking mechanism details for rings, handles and drum accessories.',
    },
    services: {
      title: 'Technical Services',
      description: 'Consultancy, product design, product development and testing services — customer-specific ring and accessory solutions.',
    },
    quality: {
      title: 'Quality',
      description:
        'SilverRing quality control processes, ISO 9001, ISO 14001, ISO 45001 and ISO 10002 certifications, memberships and trademark registration.',
    },
    news: {
      title: 'News',
      description: "Latest developments, product announcements and sector news from SilverRing's drum and pail accessory manufacturing.",
    },
    responsibility: {
      title: 'Social Responsibility',
      description: 'SilverRing social responsibility projects: support for education and street animals — our commitments beyond profitability.',
    },
    careers: {
      title: 'Careers',
      description: 'SilverRing human resources and career opportunities — join the growing team of the sector\'s leading supplier, apply today.',
    },
    contact: {
      title: 'Contact',
      description: 'SilverRing Metal Sanayi A.Ş. contact details — headquarters plant and branch addresses, phone, e-mail and an online quote form.',
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'SilverRing website privacy policy — what information is collected, how it is used, and how it is protected.',
    },
    kvkk: {
      title: 'Personal Data Protection Notice',
      description: 'Disclosure notice on personal data processing by SilverRing under Turkish Law No. 6698 on the Protection of Personal Data (KVKK).',
    },
    cookies: {
      title: 'Cookie Policy',
      description: 'Information about the use of cookies on the SilverRing website.',
    },
  },

  home: {
    hero: {
      eyebrow: 'Manufacturer of Drum & Pail Accessories',
      title: 'Your reliable production partner in rings, handles and accessories',
      lead: 'We manufacture metal, plastic and fibre drum rings and accessories, delivering tailored solutions to the chemical, food, pharmaceutical and petroleum industries. We are a Kocaeli-based industrial company exporting to nearly 30 countries.',
      ctaPrimary: 'Explore Our Products',
      ctaSecondary: 'Contact Us',
      stats: [
        { num: '30+', label: 'countries served' },
        { num: '300+', label: 'ring & accessory variants' },
        { num: 'ISO', label: '9001 · 14001 · 45001' },
      ],
    },
    sectors: {
      kicker: 'Industries We Serve',
      title: 'The preferred supplier for critical packaging needs',
      items: ['Chemicals', 'Food', 'Pharmaceuticals', 'Petroleum & Oils', 'Paints & Coatings', 'Agrochemicals'],
    },
    about: {
      kicker: 'Who We Are',
      title: 'Decades of experience in the packaging industry',
      p1: 'Our company operates in the manufacture of metal, plastic and fibre drum rings and accessories. Our customised product range — used across chemicals, food, pharmaceuticals, petroleum and many other fields — gives our customers a significant advantage through both high quality and competitive pricing.',
      p2: 'With long-standing experience in the packaging industry, an expert team and a strong financial structure, SilverRing is a domestic market leader. On its way to becoming a global brand, SilverRing has established itself as a global supplier to multinational companies.',
      cta: 'About Us',
    },
    productsTeaser: {
      kicker: 'Our Product Family',
      title: 'End-to-end accessory solutions for drums and pails',
      cards: [
        { title: 'Sheet Steel Drum Ring', text: 'Durable rings with locking mechanisms for metal drums and pails.', img: '/img/sac-varil-cemberi.webp', hash: 'cemberler' },
        { title: 'Fibre Drum Ring', text: 'Ring systems purpose-designed for fibre drum bodies.', img: '/img/fiber-varil-cemberi.webp', hash: 'cemberler' },
        { title: 'Handles', text: 'Metal and fibre drum handles that ease transport and handling.', img: '/img/metal-kulplar.webp', hash: 'kulplar' },
        { title: 'Accessories', text: 'Tamper-evident caps, clamps, plastic plugs and safety pins.', img: '/img/metal-garanti-kapaklari.webp', hash: 'aksesuarlar' },
      ],
    },
    quality: {
      kicker: 'Quality Management',
      title: 'A prevention-focused quality control approach',
      text: 'Our quality control activities follow a proactive, "prevention" mindset. Before mass production begins, sample production, testing and reporting processes are carried out with care.',
      items: [
        'ISO 9001 Quality Management System',
        'ISO 14001 Environmental Management System',
        'ISO 45001 Occupational Health & Safety Management System',
        'ISO 10002 Customer Satisfaction Management System',
      ],
      cta: 'Go to Quality Page',
    },
    trust: {
      label: 'Certified management systems',
      items: [
        { code: 'ISO 9001', name: 'Quality' },
        { code: 'ISO 14001', name: 'Environment' },
        { code: 'ISO 45001', name: 'OH&S' },
        { code: 'ISO 10002', name: 'Customer Satisfaction' },
        { code: 'CE', name: 'Cage Certificates' },
        { code: 'UN', name: 'Standard Compliant' },
      ],
    },
    why: {
      kicker: 'Why SilverRing',
      title: 'The difference of working with the sector’s leading supplier',
      cards: [
        { no: '01', icon: 'consult', title: 'Customer-Focused', text: 'With a customer-focused product and communication strategy, we define the best solution for your needs together.' },
        { no: '02', icon: 'tag', title: 'Competitive Cost', text: 'A strong financial structure and efficient production processes let us offer competitive pricing all year round.' },
        { no: '03', icon: 'truck', title: 'Fast Delivery & Support', text: 'High production capacity and disciplined stock management mean we respond to your requests quickly.' },
        { no: '04', icon: 'test', title: 'R&D & Continuous Improvement', text: 'A culture of continuous improvement keeps us developing our products and processes.' },
      ],
    },
    counters: {
      items: [
        { icon: 'globe', n: '30+', l: 'countries served' },
        { icon: 'layers', n: '300+', l: 'ring & accessory variants' },
        { icon: 'award', n: '20+', l: 'years of sector experience' },
        { icon: 'factory', n: '2', l: 'production sites · Gebze' },
      ],
    },
    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Things you may be wondering',
      lead: 'The questions we are asked most about our products and the way we work.',
      items: [
        {
          q: 'Which drum and pail types do you make rings for?',
          a: 'For metal, plastic and fibre drum bodies and tin pails, we manufacture over 300 ring and accessory variants in different diameters, thicknesses and locking mechanisms. We also develop bespoke sizes and designs for your needs.',
        },
        {
          q: 'Are your products UN-standard compliant?',
          a: 'Yes. Our product range is manufactured in compliance with UN standards. Our management systems are certified to ISO 9001, 14001, 45001 and 10002.',
        },
        {
          q: 'Do you provide samples and technical documentation?',
          a: 'Yes. For customer-specific requests we provide sample production, testing and technical documentation support, then move approved products into mass production.',
        },
        {
          q: 'Do you export?',
          a: 'We export to nearly 30 countries and are a global supplier to multinational companies. Our export operations are conducted under the relevant exporters’ association.',
        },
      ],
    },
    ctaBand: 'Review our product catalogue and let us determine the best solution for your needs together.',
  },

  corporate: {
    lead: 'Who we are, how we work and the commitments we make.',
    about: {
      kicker: 'Who We Are',
      title: 'SilverRing',
      paras: [
        'Our company operates in the manufacture of metal, plastic and fibre drum rings and accessories. Our customised product range — used across chemicals, food, pharmaceuticals, petroleum and many other fields — gives our customers a significant advantage through both high quality and competitive pricing.',
        'With long-standing experience in the packaging industry, an expert team and a strong financial structure, SilverRing is a domestic market leader.',
        'On its way to becoming a global brand, SilverRing has established itself as a global supplier to multinational companies. Currently exporting to nearly 30 countries, we are steadily increasing our export share and moving confidently towards becoming a worldwide leader in the sector.',
      ],
      img: '/img/hero-factory.webp',
      imgAlt: 'SilverRing team and production facility',
    },
    missionVision: {
      mission: {
        title: 'Our Mission',
        text: 'To deliver customer-specific, quality "Drum and Pail Accessories" products and services, domestically and abroad, in a corporate structure.',
      },
      vision: {
        title: 'Our Vision',
        text: 'To be a leading brand of choice in the drum and pail accessories manufacturing sector through service and quality distinction.',
      },
    },
    blocks: [
      {
        id: 'kalite-politikasi',
        kicker: 'Policy',
        title: 'Quality Policy',
        paras: [
          'Acting with a "Customer Focus" vision, our company commits to providing the highest level of quality service in line with the following principles:',
        ],
        list: [
          'To provide the highest level of quality service in all its activities, as required by its mission,',
          'To define the quality objectives of the relevant units through concrete and measurable parameters,',
          'To structure business processes in line with our vision,',
          'To minimise any variation that may arise between the quality levels of our business processes,',
          'To continuously review business processes and identify areas where the quality level can be raised,',
          'To conduct our work in accordance with quality standards, customer and other requirements, and to continuously improve the effectiveness of the quality management system,',
          'To raise the efficiency of our business processes to a level able to compete internationally,',
          'To encourage innovative and creative approaches within our company,',
          'To establish the documentation and archive system required by our quality management system,',
          'To be an enterprise that stands out for its quality in the sector in which it operates,',
        ],
        signOff: 'General Manager',
        img: '/img/iso9001.webp',
        imgAlt: 'ISO 9001 Quality Management System Certificate',
      },
      {
        id: 'cevre-politikasi',
        kicker: 'Policy',
        title: 'Environmental Policy',
        paras: [
          'We accept that any kind of harm done to the environment anywhere in the world is a problem for, and a threat to, us all. In this context, our company commits:',
        ],
        list: [
          'To prevent environmental pollution by continuously improving our environmental management system and its performance,',
          'To comply with the laws and regulations issued on the environment,',
          'To use raw materials / operating supplies that are subject to recycling,',
          'To minimise our waste by managing our processes effectively and efficiently,',
          'To provide training to make our employees and subcontractor personnel sensitive to environmental issues and raise their awareness,',
          'To manage the environmental impacts that may arise from all our activities with a sense of social responsibility,',
          'To help develop and disseminate the best environmental solutions, practices and environmentally friendly technologies beyond legal obligations,',
          'To support every initiative that will raise environmental awareness,',
          'To be an exemplary, environmentally responsible enterprise in our field of activity,',
        ],
        signOff: 'General Manager',
        img: '/img/iso14001.webp',
        imgAlt: 'ISO 14001 Environmental Management System',
      },
      {
        id: 'isg-politikasi',
        kicker: 'Policy',
        title: 'Occupational Health & Safety Policy',
        paras: [
          'People are our most valuable asset. In this context, ensuring a healthier and safer working environment for our employees and subcontractor companies is one of our priorities. By carrying our occupational health and safety system, established to achieve this priority, towards excellence through a continuous improvement approach, we aim for "Zero Occupational Accidents and Occupational Diseases."',
          'To achieve this policy, our company commits:',
        ],
        list: [
          'To take every measure in accordance with the applicable OH&S legislation and other related requirements, and to provide and ensure the use of the necessary tools, equipment and personal protective equipment, so that employees, subcontractor personnel and visitors work in a healthier and more reliable environment on the premises and its annexes,',
          'To identify and eliminate in advance, through effective risk assessment, situations and behaviours on the premises and its annexes that could cause occupational accidents and diseases, as well as potential accident risks,',
          'To identify risks that could cause occupational accidents and diseases on the premises, to ensure the health, safety and social welfare of employees at all levels, subcontractor personnel and visitors, and to reduce any future material and moral losses to themselves and their families,',
          'To train our employees and subcontractor personnel in occupational health and safety and help them attain a sound OH&S awareness,',
          'To ensure that subcontractor personnel and visitors on site also comply with the OH&S rules set by our company,',
          'To make our company an exemplary one in terms of OH&S practices, both in the sector in which it operates and among the chambers it is affiliated with,',
          'To ensure the continuity of the OH&S Management System that has been established and is being maintained,',
        ],
        signOff: 'General Manager',
        img: '/img/iso45001.webp',
        imgAlt: 'ISO 45001 Occupational Health & Safety Management System Certificate',
      },
      {
        id: 'musteri-politikasi',
        kicker: 'Policy',
        title: 'Customer Satisfaction Policy',
        paras: [
          'Acting with a "Customer Focus" vision, our company;',
          'Operates openly, transparently, quickly, reassuringly and with a principle of customer satisfaction when fulfilling our customers\' requests.',
          'In line with these principles, our company commits:',
        ],
        list: [
          'To record and follow up all complaints, suggestions, requests, information notes and compliments,',
          'To treat every notification from customers, staff and all other interested parties as a reward for our continuous improvement; to review it objectively, fairly, carefully and confidentially, and to provide a resolution,',
          'To carry out "Corrective/Preventive" actions to prevent the recurrence of dissatisfaction, and to continuously improve our business processes to meet our customers\' expectations,',
          'To ensure that all our work is solution-oriented,',
          'To provide service based on legal, financial, operational, corporate and other applicable requirements,',
          'To ensure that our customers are satisfied at the highest level with our products and services,',
        ],
        signOff: 'General Manager',
        img: '/img/iso10002.webp',
        imgAlt: 'ISO 10002 Customer Satisfaction Management System Certificate',
      },
      {
        id: 'sosyal-politikasi',
        kicker: 'Policy',
        title: 'Social Responsibility Policy',
        paras: [
          'Our company is managed with an understanding that places respect for people and the natural environment first.',
          'In this context, our company commits:',
        ],
        list: [
          'To work in harmony with our shareholders, employees, customers and other stakeholders,',
          'To ensure that our employees fully and correctly exercise their personal rights,',
          'To provide our employees with an honest, safe, healthy and peaceful working environment,',
          'To observe the balance between our employees’ working life and private life,',
          'Not to discriminate among our employees on grounds such as race, religion, language, gender or political opinion,',
          'To protect the health of our employees, our most valuable asset,',
          'To make efforts for the development of our society within the framework of the principle of corporate social responsibility,',
          'To support our employees in activities they take part in with a sense of social responsibility,',
          'To act sensitively towards the traditions and culture of our country and in compliance with all legal regulations,',
        ],
        outro: [
          'Responsibility for corporate social responsibility practices across our company lies with our General Manager first, and with all our Managers and Employees.',
          'This document is an explicit commitment that our company will fulfil every responsibility it owes towards a better world.',
        ],
        signOff: 'General Manager',
        img: '/img/sosyal-sorumluluk.webp',
        imgAlt: 'Social Responsibility',
      },
      {
        id: 'tedarik-politikasi',
        kicker: 'Policy',
        title: 'Sustainable Procurement Policy',
        paras: [
          'As SILVERRING METAL SAN. A.Ş., we place importance on building trust-based relationships with all our stakeholders, and we aim to spread our responsible and sustainable supply chain approach. To create sustainable value, we adopt an approach that observes environmental, social and ethical values and prioritises the development of society, while also striving to have all our suppliers and stakeholders adopt similar conduct. Within this scope, all our suppliers and business partners;',
        ],
        list: [
          'Are obliged to provide their employees with rights in accordance with legislation and working conditions.',
          'May not discriminate against their employees in any way (religion, language, race, colour, gender, sexual orientation, age, etc.). They may not tolerate such conduct being displayed by their employees either, and take the necessary measures.',
          'May not, under any circumstances, tolerate the violation of employees’ inviolability — through physical, sexual, psychological and/or emotional harassment — in the workplace and/or in any place they are present due to work, as this is contrary to law and ethical rules.',
          'May not apply any form of forced or compulsory labour; employment decisions must be based on free choice.',
          'May not employ child labour, and must comply with all applicable national and international standards, in particular the conventions of the International Labour Organization (ILO) and the United Nations ("UN"), including the minimum working age restrictions set by laws and legislation.',
          'Take all measures regarding occupational health and safety. They provide their employees with all necessary training, equipment and gear in this scope, and provide the resources needed to manage health and safety risks and prevent occupational accidents and diseases.',
          'Must conduct their activities in compliance with all applicable local laws and international environmental regulations. They assess the environmental impact of the work they do and the decisions they make; they take the necessary measures for the protection of natural resources, waste reduction, clean energy use, recycling and pollution control.',
          'May not give or accept bribes or engage in corruption. They take the necessary measures to combat bribery and corruption, and must comply with all applicable national and international anti-corruption laws.',
          'Avoid conflicts of interest and any activity that could be perceived by third parties as a conflict of interest. They inform all relevant parties in the event of a possible conflict of interest.',
        ],
        sections: [
          {
            paras: [
              'Other than items of commercial custom and a promotional nature, no gift sent by a supplier that creates the impression of impropriety, that could give rise to a relationship of dependency, or that could be perceived as such, is accepted.',
            ],
          },
          {
            list: [
              'Is obliged to report any ethical or unlawful matter that arises.',
              'Manages all materials, information, technology, funds, methods, workforce and other resources across the entire supply chain network in an effective and integrated manner.',
              'Designs its processes with lean, value-added and innovative methods, achieves its performance targets and continuously improves.',
              'Ensures stakeholders have access to a number of complaint channels, and that procedures have been developed to investigate complaints.',
              'Keeps records reflecting the truth accurately, honestly and in a timely manner for all its transactions. It does not falsify its records or conceal the transactions it carries out. It retains its records in line with legal requirements.',
              'Is obliged to protect all confidential information belonging to, and accessed through, SILVERRING METAL SAN. A.Ş., including trade secrets, know-how and financial data.',
              'Avoids the use of "conflict minerals" in its activities, and avoids any act that supports illegal conflicts, violates human rights or provides financial support to such acts.',
            ],
          },
          {
            paras: [
              'Our business mentality requires us to work with suppliers who are capable of consistently meeting our standards and specifications and who are aligned with our corporate values. We expect our suppliers not only to comply with the rules, but also to make reasonable efforts to exceed expectations and to encourage continuous improvement throughout their commercial activities. The rules apply to all our contracted suppliers, business partners and SILVERRING METAL SAN. A.Ş., who are expected to pass these requirements on to their own supply chains. We commit to cooperating with all our stakeholders in this regard.',
            ],
          },
          {
            heading: 'Supplier\'s Declaration',
            paras: ['As a supplier of SILVERRING METAL SAN. A.Ş., we;'],
            list: [
              'Declare that we have carefully read the SILVERRING Sustainable Procurement Policy communicated to us by SILVERRING,',
              'Declare that we are aware of all laws and regulations relating to our operations in the country in which we operate,',
              'Declare that we will inform SILVERRING of any violation of the rules set out by SILVERRING,',
              'Declare that we will comply with the requirements of the SILVERRING Sustainable Procurement Policy without any interpretation or exception, and will regard these requirements as opportunities for improvement,',
              'Irrevocably accept, declare and undertake that we will inform all our employees and subcontractors about the SILVERRING Sustainable Procurement Policy and thereby ensure their full compliance with these rules.',
            ],
          },
        ],
        outro: [
          'Furthermore, by this provision, we irrevocably accept and declare that we authorise SILVERRING, or any organisation authorised by SILVERRING, to carry out audits — without any requirement of prior notice — in order to verify our organisation\'s or our subcontracted suppliers\' compliance with the SILVERRING Sustainable Procurement Policy.',
          'SILVERRING METAL SAN. A.Ş. commits to continuing to improve its practices against modern slavery and to fulfil every responsibility incumbent upon it.',
        ],
        signOff: 'General Manager',
        img: '',
        imgAlt: '',
      },
      {
        id: 'modern-kolelik-politikasi',
        kicker: 'Policy',
        title: 'Modern Slavery Policy and Statement',
        paras: [
          'Modern slavery is a fundamental violation of human rights. Slavery encompasses the crimes of unpaid, forced and compulsory labour, child labour and human trafficking.',
          'In this context, our company;',
        ],
        list: [
          'Provides safe and fair working conditions for all its employees and acts in accordance with labour law, the conventions of the International Labour Organization (ILO) and the United Nations Global Compact regarding the non-employment of child labour and the fight against modern slavery.',
          'Does not enter into a business relationship with any partner, customer, supplier, subcontractor, agent or any other individual engaged in any capacity who is involved in modern slavery,',
          'This policy and statement applies to personnel at every level employed within SILVERRING METAL SAN. A.Ş., and the responsibilities are set out below:',
          'Not to be connected, within or outside the company, to any crime or matter relating to modern slavery,',
          'To work in a coordinated manner with every element of the company in the fight against modern slavery,',
          'To remain vigilant against modern slavery in our operations and at any stage of our supply chain,',
          'To report any findings relating to modern slavery as soon as possible,',
          'Our company expects every company in its supply chain, or any individual engaged in any capacity, to comply with the requirements set out in this policy and with legal requirements,',
          'Our company identifies, within a framework of transparency, the status of every company in its supply chain, or any individual engaged in any capacity, regarding modern slavery matters, and ensures the necessary measures are taken,',
          'In the event of a detected violation or concern relating to modern slavery matters, an email must be sent to info@silverring.com.tr. Our company immediately initiates the necessary proceedings,',
        ],
        sections: [
          {
            heading: 'Training and Awareness',
            list: [
              'SILVERRING METAL SAN. A.Ş. ensures that all its employees receive the necessary training to act in accordance with this policy and statement and to be able to recognise and avoid crimes falling within the scope of modern slavery,',
              'Our company expects every company in its supply chain to provide training to its own employees in this regard, adds this as a condition to its contracts, and informs every individual engaged in any capacity,',
            ],
          },
          {
            heading: 'In the Event of a Violation',
            paras: [
              'Should any SILVERRING METAL SAN. A.Ş. employee be involved in crimes relating to modern slavery and violate this policy, the necessary sanction procedures will be applied on a zero-tolerance basis.',
              'Where it is determined that a crime relating to modern slavery has been committed within the company\'s operations;',
            ],
            list: [
              'Those involved are expected to act transparently and provide the information requested by our company,',
              'The responsible suppliers and individuals are identified and sanction procedures are applied to them,',
              'Corrective action is applied as soon as possible in order to end the situation in question and protect the victim,',
            ],
          },
        ],
        outro: [
          'Responsibility for practices across our company lies with our General Manager first, and with all our Managers and Employees.',
          'SILVERRING METAL SAN. A.Ş. commits to continuing to improve its practices against modern slavery and to fulfil every responsibility incumbent upon it.',
        ],
        signOff: 'General Manager',
        img: '',
        imgAlt: '',
      },
    ],
  },

  products: {
    lead: 'Manufacture of more than 300 ring and drum-accessory variants in various diameters and thicknesses, compliant with UN standards. Metal, plastic and fibre drum rings, stainless steel rings, tin pail rings, tamper-evident drum caps and more.',
    groups: [
      {
        id: 'cemberler',
        kicker: 'Product Group',
        title: 'Rings',
        text: 'Ring solutions with different locking mechanisms for metal, plastic and fibre drum bodies.',
        items: [
          { name: 'Cylindrical Sheet Steel Drum Ring', tag: 'Sheet Steel Drum Ring', img: '/img/silindirik-sac-varil-cemberi.webp' },
          { name: 'Conical Sheet Steel Drum Ring', tag: 'Sheet Steel Drum Ring', img: '/img/konik-sac-varil-cemberi.webp' },
          { name: 'Sheet Metal Pail Ring', tag: 'Sheet Steel Drum Ring', img: '/img/sac-bidon-cemberi.webp' },
          { name: 'Plastic Drum Ring', tag: 'Rings', img: '/img/plastik-varil-cemberi.webp' },
          { name: 'Fibre Drum Ring', tag: 'Rings', img: '/img/fiber-varil-cemberi.webp' },
          { name: 'UN-Certified Pail Ring', tag: 'Tin Pail Ring', img: '/img/unli-kova-cemberi.webp' },
          { name: 'Non-UN Pail Ring', tag: 'Tin Pail Ring', img: '/img/unsiz-kova-cemberi.webp' },
          { name: 'Bolted Rings', tag: 'Special Purpose', img: '/img/civatali-cember.webp' },
          { name: 'Stainless Steel Ring', tag: 'Special Purpose', img: '/img/paslanmaz-cember.webp' },
          { name: 'Painted Rings', tag: 'Special Purpose', img: '/img/boyali-cemberler.webp' },
        ],
      },
      {
        id: 'kulplar',
        kicker: 'Product Group',
        title: 'Handles',
        text: 'Metal and fibre handle solutions that ease the transport and handling of drums and pails.',
        items: [
          { name: 'Metal Drum Handles', tag: 'Handles', img: '/img/metal-kulplar.webp' },
          { name: 'Fibre Drum Handles', tag: 'Handles', img: '/img/fiber-kulplar.webp' },
        ],
      },
      {
        id: 'aksesuarlar',
        kicker: 'Product Group',
        title: 'Accessories',
        text: 'Tamper-evident drum caps, clamps, plastic plugs and safety pins.',
        items: [
          { name: 'Metal Tamper-Evident Caps', tag: 'Accessory', img: '/img/metal-garanti-kapaklari.webp' },
          { name: 'Clamps', tag: 'Accessory', img: '/img/kelepceler.webp' },
          { name: 'Plastic Plugs', tag: 'Accessory', img: '/img/plastik-tapalar.webp' },
          { name: 'Safety Pins', tag: 'Accessory', img: '/img/emniyet-pimleri.webp' },
        ],
      },
    ],
    ctaBand: 'You can review our entire product range in our catalogue.',
  },

  catalog: {
    lead: 'Our current product catalogue, covering the technical dimensions, materials and locking-mechanism details of our rings, handles and drum accessories.',
    kicker: 'PDF Catalogue',
    title: 'Download Our Product Catalogue',
    body: 'Download the technical details of our entire product range as a PDF, or contact us directly for documentation and a price quotation.',
    downloads: [
      { label: 'English Catalogue', sub: 'PDF · 22 pages', href: '/katalog/silverring-product-catalogue-en.pdf' },
      { label: 'Türkçe Katalog', sub: 'PDF · 22 sayfa', href: '/katalog/silverring-urun-katalogu-tr.pdf' },
    ],
    downloadCta: 'Download',
    previewKicker: "What's Inside",
    previewTitle: 'Inside the Catalogue',
    previewText: 'The catalogue covers our full product family — from steel, plastic and fibre drum rings to metal handles, tamper-evident caps and safety pins.',
    cta: 'Request a Quote',
  },

  services: {
    lead: 'Tailored solutions and customised products for customer needs, produced with care under a guarantee of high quality and fast delivery.',
    blocks: [
      {
        id: 'danismanlik',
        kicker: 'Technical Service',
        title: 'Consultancy',
        paras: [
          'Based on the requests of current and potential customers, their needs are assessed in terms of technical requirements, usability and sector standards. After the assessment, existing products that meet the requirements are presented to the customer. Where our existing products do not meet the requirements, technical work is carried out on customer-specific alternative new products and presented to the customer.',
          'In line with the customer’s preferences, R&D work is completed, sample production and tests are carried out, and trial applications are performed. After the customer evaluates the applications, approved products are supplied to the customer.',
        ],
        img: '/img/consulting.webp',
        imgAlt: 'Consultancy',
      },
      {
        id: 'urun-tasarimi',
        kicker: 'Technical Service',
        title: 'Product Design',
        paras: [
          'Even when there is no request from current or potential customers, SilverRing carries out continuous sector assessments as part of its R&D activities. New product designs — or technical modifications to existing products — bring new products into our range that address different needs or make application in the sector easier.',
        ],
        img: '/img/product-design.webp',
        imgAlt: 'Product Design',
      },
      {
        id: 'urun-gelistirme',
        kicker: 'Technical Service',
        title: 'Product Development',
        paras: [
          'For products manufactured for existing customers and used in their own processes, R&D work is carried out to improve our products based on data from the customer’s usage experience, potential issues, and observations made during our production and delivery practices.',
          'In our R&D activities, carried out with a philosophy of continuous improvement, customer satisfaction, quality, cost and sustainability are the priorities.',
        ],
        img: '/img/product-development.webp',
        imgAlt: 'Product Development',
      },
      {
        id: 'test',
        kicker: 'Technical Service',
        title: 'Testing',
        paras: [
          'The necessary criteria have been defined for all raw materials, semi-finished goods and auxiliary materials used in our products, and alternative approved suppliers have been identified. To verify critical values defined by the SilverRing technical team or the customer, test reports are requested from our suppliers, or testing is performed / commissioned by SilverRing and recorded.',
          'All our products are tested against sector-accepted standards and customer expectations during initial design, improvements and mass production, and the results are kept on record.',
          'To help meet our customers’ specific criteria and ensure their tests conclude successfully, we provide the necessary R&D activities along with sample, logistics, technical documentation and personnel support.',
        ],
        img: '/img/test.webp',
        imgAlt: 'Testing',
      },
    ],
    process: {
      kicker: 'Our Process',
      title: 'From Need to Solution',
      steps: [
        { no: '01', title: 'Consultancy', text: 'Technical discussion with the customer to clarify the requirement.' },
        { no: '02', title: 'Product Design', text: 'R&D and design work to develop the proposed solution.' },
        { no: '03', title: 'Product Development', text: 'Sample production and continuous improvement work.' },
        { no: '04', title: 'Test & Verification', text: 'Testing and confirming conformity with the required standards.' },
      ],
    },
  },

  quality: {
    lead: 'Rings, locking mechanisms, tamper-evident caps, plastic plugs, pail handles… quality at every stage, guided by a "Customer Focus" vision.',
    control: {
      id: 'kalite-kontrol',
      kicker: 'Process',
      title: 'Quality Control',
      paras: [
        'It has established Quality Control processes to which it attaches great importance within its organisational structure. As an indispensable element of sustained customer satisfaction, quality control activities are handled with a proactive, "PREVENTION" mindset.',
        'For products manufactured specifically for customers, before mass production activities begin, mutual agreement, testing and reporting processes are carried out so that the product’s specifications are defined to cover all its expected functions, and the process moves on to the Sample Production stage.',
        'The samples produced are inspected against acceptance criteria under real-world applications. This aims to prevent the customer from experiencing problems while using our products. Where agreement is reached on the results obtained, customer approval is obtained.',
        'For products that move into mass production, inspections are carried out and recorded at every stage by applying Technical Inspection Criteria according to the instructions defined within our Quality Management Systems.',
        'Feedback received from our customers regarding dispatched products is classified and recorded. The necessary assessments are made and a Root-Cause investigation is carried out. Based on the data obtained from these examinations, the source of the problem is identified and solution proposals are produced. Detailed reports are provided to our customers at these stages. Corrective/Preventive Actions agreed upon mutually are implemented, and their effectiveness is checked and approved.',
        'Our quality control activities cover the entirety of our raw material and semi-finished goods incoming inspection, production stages, storage, packaging and dispatch processes.',
      ],
      img: '/img/kalite-2.webp',
      imgAlt: 'Quality Control',
    },
    certsBlock: {
      id: 'sertifikalar',
      kicker: 'Documents',
      title: 'Our Certificates',
      intro: 'Our quality management systems and product conformity are certified by independent bodies.',
      items: [
        { code: 'ISO 9001', name: 'Quality Management System', desc: 'The international quality management standard for consistent, continuously improving products and services.', img: '/img/iso9001.webp' },
        { code: 'ISO 10002', name: 'Customer Satisfaction MS', desc: 'A management system ensuring customer complaints and requests are handled transparently and fairly.', img: '/img/iso10002.webp' },
        { code: 'ISO 45001', name: 'Occupational Health & Safety MS', desc: 'The international standard certifying proactive management of employee health and safety risks.', img: '/img/iso45001.webp' },
        { code: 'CE', name: 'Collapsible Cage', desc: 'A product marking certifying conformity with European Union technical regulations.', img: '/img/ce-geri-donusum.webp' },
        { code: 'CE', name: 'Rigid Cage', desc: 'A product marking certifying conformity with European Union technical regulations.', img: '/img/ce-rijit.webp' },
        { code: 'CE', name: 'Foldable Cage', desc: 'A product marking certifying conformity with European Union technical regulations.', img: '/img/ce-katlanabilir.webp' },
        { code: 'ISO 14001', name: 'Environmental Management System', desc: 'A standard certifying that environmental impacts across production are managed systematically.', img: '/img/iso14001.webp' },
        { code: 'I-REC', name: 'Green Energy (Headquarters)', desc: 'An internationally recognised certificate confirming energy use is sourced from renewables.', img: '/img/irec-merkez.webp' },
        { code: 'I-REC', name: 'Green Energy (Branch)', desc: 'An internationally recognised certificate confirming energy use is sourced from renewables.', img: '/img/irec-sube.webp' },
      ],
    },
    membership: {
      id: 'uyelikler',
      kicker: 'Membership',
      title: 'Exporters’ Association Membership',
      body: 'SilverRing is a member of the relevant exporters’ association in order to conduct its export activities within a corporate and transparent structure.',
    },
    trademark: {
      id: 'marka-tescil',
      kicker: 'Intellectual Property',
      title: 'Trademark - Patent',
      body: 'The SilverRing trademark is registered with the Turkish Patent and Trademark Office.',
      img: '/img/marka-tescil.webp',
      imgAlt: 'Trademark registration certificate',
    },
  },

  news: {
    lead: 'Latest developments, announcements and sector news from SilverRing.',
    kicker: 'Coming Soon',
    title: 'Our News Feed Is Being Prepared',
    body: 'We will share our company news and announcements on this page soon. To stay informed of the latest developments, please contact us.',
    cta: 'Get in Touch',
    posts: [
      {
        slug: 'guclu-urun-yelpazesi-kalite-ve-guven',
        date: 'January 26',
        title: 'SilverRing: A Strong Product Range, Quality and Trust',
        img: '/img/haber-uretim-hatti.webp',
        paras: [
          'As SilverRing, we manufacture over 300 types of rings and drum accessories, in various diameters and thicknesses in compliance with UN standards, for our business partners in domestic and international markets. Our product range offers a wide selection that addresses every kind of need and meets the high demand in the sector.',
          'Our products include a wide range of accessories such as metal, plastic and fibre drum and pail rings, stainless sheet drum rings, tinplate pail rings, drum guarantee caps, pail handles, plastic plugs, paint protection plugs, and metal and plastic pins. These products offer high durability for industrial use, enabling our customers to store and transport them safely and efficiently.',
          'Our company is competent in offering customised solutions according to customer demands, and has the flexibility to meet any special production requirement. In our production processes, we always aim for the best results by prioritising quality, efficiency and customer satisfaction.',
          'Our years of sector experience, professional staff and strong financial structure contribute to our growth every year. We manufacture in a way that delivers price, performance and quality at the highest standards.',
          'Always prioritising customer satisfaction, we offer solutions tailored to your needs and provide the highest-quality products in the sector. Discover our products through our website and get in touch with us to reach the solution best suited to your needs. SilverRing, as the leader of the sector, is always by your side!',
        ],
      },
    ],
  },

  responsibility: {
    lead: 'Our company does not build its activities on profitability alone; it carefully carries out the social responsibility projects it owes to humanity.',
    blocks: [
      {
        id: 'egitim',
        kicker: 'Project',
        title: 'Our Support-for-Education Projects',
        list: [
          'Supporting education by providing computers for students without access to distance learning during the pandemic,',
          'Supporting school construction and renovation projects,',
          'Providing various forms of educational support to earthquake and other disaster areas,',
          'Contributing to society in areas such as providing scholarships to students in need.',
        ],
        outro: [],
        img: '/img/egitim-destek.webp',
        imgAlt: 'Support for Education',
      },
      {
        id: 'hayvan',
        kicker: 'Project',
        title: 'Support for Street Animals',
        list: [
          'We run awareness campaigns to encourage the adoption of street animals.',
          'We support shelter needs and help create safe spaces.',
          'We provide food support to help feed street animals that go hungry.',
          'We provide veterinary treatment support, taking steps to resolve health problems.',
        ],
        outro: [
          'Our aim is to help street animals live better lives and, by protecting them, to build a compassionate awareness in society.',
        ],
        img: '/img/sokak-hayvanlari-1.webp',
        imgAlt: 'Support for Street Animals',
      },
    ],
  },

  careers: {
    headTitle: 'Human Resources & Careers',
    lead: 'We look forward to your applications to join the SilverRing team and take a strong step in your career.',
    kicker: 'Join Us',
    title: 'We can’t wait to meet you!',
    body: 'To join the SilverRing team and take a strong step in your career, you can send your applications by e-mail.',
    cta: 'Send Application',
    whyKicker: 'Why SilverRing',
    whyTitle: 'A career with the sector’s leading supplier',
    cards: [
      { title: 'Global Scale', text: 'An organisation exporting to nearly 30 countries, offering experience of working with international customers.' },
      { title: 'Quality Culture', text: 'A disciplined working environment with management systems certified to ISO 9001, 14001, 45001 and 10002.' },
      { title: 'Growth-Focused', text: 'A structure that offers development opportunities to its employees through a culture of R&D and continuous improvement.' },
    ],
  },

  contact: {
    lead: 'For sample requests, technical documentation or price quotations, you can reach our production and sales team directly.',
    directTitle: 'Direct Contact',
    emailLabel: 'E-mail',
    phoneLabel: 'Phone',
    infoKicker: 'Our Contact Details',
    infoTitle: 'Get in touch',
    infoLead: 'To reach our headquarters plant or branch directly, use the phone number and e-mail address below, or view our location on the map.',
    openInMaps: 'Open in Maps',
    formKicker: 'Contact Form',
    formTitle: 'Get in Touch',
    formHeading: 'Tell us what you need',
    formLead: 'Submit your request for a product sample, technical documentation or price quotation using the form below; our team will review it and get back to you as soon as possible.',
    form: {
      name: 'Full Name',
      company: 'Company',
      email: 'E-mail',
      phone: 'Phone (optional)',
      subject: 'Subject',
      subjectPlaceholder: 'Choose a subject',
      subjectOptions: ['Product Info & Samples', 'Price Quotation', 'Technical Support', 'Distributorship / Partnership', 'Other'],
      message: 'Your Message',
      consent: 'I agree to my personal data being processed to respond to my inquiry.',
      submit: 'Send Message',
      success: 'Thank you for your message. We will get back to you as soon as possible.',
      note: 'A server-side integration (e-mail service) should be connected for form submission when going live.',
    },
    mapTitle: 'SilverRing Location',
  },

  legal: {
    privacy: {
      kicker: 'Legal',
      title: 'Privacy Policy',
      paras: [
        'SilverRing Metal Sanayi A.Ş. ("SilverRing" or "we") values the privacy of visitors to www.silverring.com.tr ("the Site"). This Privacy Policy explains what information is collected through the Site, how it is used and how it is protected.',
      ],
      sections: [
        {
          heading: 'Information We Collect',
          paras: [
            'We do not automatically collect any personal information when you visit the Site. When you contact us through our contact form, the full name, company, e-mail address, phone number and any information included in your message are sent to us.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          paras: [
            'The information you share is used solely to evaluate your request, get in touch with you, and provide the product/service information, sample or price quotation you requested. Your information is not shared with third parties for marketing purposes, nor is it sold.',
          ],
        },
        {
          heading: 'Data Security',
          paras: ['Reasonable technical and administrative measures are taken to protect the information sent to us.'],
        },
        {
          heading: 'Third-Party Links',
          paras: [
            'Third-party services embedded on the Site, such as the Google Maps widget, are subject to their own privacy policies; we are not responsible for the privacy practices of these services.',
          ],
        },
        {
          heading: 'Your Rights and Contact',
          paras: [
            'For questions about your personal data, you can contact us at info@silverring.com.tr. For more detail, please see our Personal Data Protection Notice (KVKK).',
          ],
        },
      ],
      outro: ['This policy may be updated in the event of changes to the Site or to applicable law.'],
      signOff: 'SilverRing Metal Sanayi A.Ş.',
    },
    kvkk: {
      kicker: 'Legal',
      title: 'Personal Data Protection Notice',
      paras: [
        'Under Turkish Law No. 6698 on the Protection of Personal Data ("KVKK"), SilverRing Metal Sanayi A.Ş. processes your personal data as the data controller, within the scope described below.',
      ],
      sections: [
        {
          heading: 'Data Controller',
          paras: [
            'SilverRing Metal Sanayi A.Ş. operates at Gebze Güzeller O.S.B, İnönü Mah. Aşık Veysel Sok. No:2/1, Kocaeli, Türkiye.',
          ],
        },
        {
          heading: 'Personal Data Processed and Collection Method',
          paras: [
            'The full name, company name, e-mail address, phone number and message content you submit through the contact form are collected electronically when you fill in the contact form on the Site.',
          ],
        },
        {
          heading: 'Purposes of Processing',
          list: [
            'Evaluating and responding to your requests, questions and suggestions,',
            'Fulfilling requests for product information, samples or price quotations,',
            'Carrying out customer relationship processes.',
          ],
        },
        {
          heading: 'Legal Basis',
          paras: [
            'Your personal data is processed on the legal grounds set out in Article 5 of the KVKK, namely that processing is "directly related to the establishment or performance of a contract" and the "legitimate interest of the data controller".',
          ],
        },
        {
          heading: 'Transfer of Personal Data',
          paras: [
            'Except where required by law, your personal data is not shared with third parties or transferred for marketing purposes without your explicit consent.',
          ],
        },
        {
          heading: 'Your Rights as a Data Subject',
          paras: [
            'Under Article 11 of the KVKK, you have the right to: learn whether your personal data is being processed; request information about it if it has been processed; learn the purpose of processing and whether it is used in accordance with that purpose; know the third parties to whom it is transferred domestically or abroad; request correction if it is incomplete or inaccurate; request its deletion or destruction within the conditions set out in the KVKK; and request that these actions be notified to the third parties to whom your data has been transferred.',
          ],
        },
      ],
      outro: ['To exercise these rights, you may apply in writing to info@silverring.com.tr or to our headquarters plant address.'],
      signOff: 'SilverRing Metal Sanayi A.Ş.',
    },
    cookies: {
      kicker: 'Legal',
      title: 'Cookie Policy',
      paras: [
        'This Site does not use any tracking, analytics or marketing cookies beyond those that are technically necessary, in order to improve visitor experience.',
      ],
      sections: [
        {
          heading: 'Third-Party Services',
          paras: [
            'Third-party services embedded on the Site, such as the Google Maps widget, may use cookies under their own cookie policies. These cookies are not under our control and are subject to the relevant service\'s own privacy and cookie policy.',
          ],
        },
        {
          heading: 'Future Changes',
          paras: [
            'Should analytics (e.g. visitor statistics) or marketing cookies be added to the Site in the future, this policy will be updated and, where required, visitor consent will be obtained.',
          ],
        },
      ],
      outro: ['If you have questions about your cookie preferences, you can reach us at info@silverring.com.tr.'],
      signOff: 'SilverRing Metal Sanayi A.Ş.',
    },
  },
};

export default en;
