/* =========================================================================
   PRODUTO.JS — Dynamic Product Detail Page
   Reads ?p=PRODUCT_KEY from URL and populates the entire page.
   ========================================================================= */

const ALL_PRODUCTS = {
    "NATUBEAUTY": {
        title: "NATUBEAUTY",
        subtitle: "Estética e Cuidado",
        collection: "Collection 01 / Beauty",
        image: "Mockups/Natubeauty/APRESENTAÇÃO NATUBEAUTY 2.png",
        desc: "Natubeauty é um suplemento completo desenvolvido para fortalecer cabelos, pele e unhas de dentro para fora. Sua fórmula reúne 24 ativos essenciais que atuam na redução da queda capilar, prevenção do envelhecimento da pele e fortalecimento das unhas.",
        stats: [
            { value: "24", label: "Ativos Essenciais" },
            { value: "60", label: "Cápsulas" },
            { value: "500mg", label: "Por Cápsula" },
            { value: "30", label: "Dias de Uso" }
        ],
        benefits: [
            { label: "Ácido hialurônico", desc: "Hidrata e mantém a firmeza da pele." },
            { label: "Silício orgânico", desc: "Fortalece cabelos, unhas e pele." },
            { label: "Colágeno hidrolisado", desc: "Melhora a elasticidade e sustentação da pele." },
            { label: "L-cisteína e L-metionina", desc: "Estimulam o crescimento e a força dos fios e unhas." },
            { label: "MSM", desc: "Auxilia na regeneração e firmeza da pele." },
            { label: "Vitaminas do complexo B", desc: "Promovem energia e vitalidade." },
            { label: "Vitamina A", desc: "Melhora a textura e o brilho da pele." },
            { label: "Vitamina D", desc: "Estimula a renovação celular." },
            { label: "Vitamina C", desc: "Estimula a produção de colágeno." },
            { label: "Vitamina E", desc: "Protege contra o envelhecimento precoce." },
            { label: "Zinco", desc: "Fortalece unhas e cabelos, reduz oleosidade." },
            { label: "Selênio", desc: "Combate o envelhecimento." },
            { label: "Ferro", desc: "Estimula o crescimento capilar." }
        ],
        nutrition: [
            { label: "Ácido Hialurônico", qty: "100 mg" },
            { label: "Silício orgânico", qty: "100 mg" },
            { label: "Colágeno hidrolisado", qty: "300 mg" },
            { label: "L-cisteína", qty: "100 mg" },
            { label: "L-metionina", qty: "100 mg" },
            { label: "Metilsulfonilmetano (MSM)", qty: "100 mg" },
            { label: "Vitamina C", qty: "100 mg" },
            { label: "Zinco quelato", qty: "11 mg" },
            { label: "Ferro quelato", qty: "14 mg" }
        ]
    },
    "NATUCOMPLEX": {
        title: "NATUCOMPLEX",
        subtitle: "Nutrição Essencial",
        collection: "Collection 02 / Health",
        image: "Mockups/Natucomplex/MOKCUP C. FUNDO 1.png",
        desc: "NatuComplex é um multivitamínico e multimineral completo, com 28 ativos essenciais que promovem equilíbrio, energia e bem-estar. Contém Vitamina D, B12, Cálcio e Magnésio.",
        stats: [
            { value: "28", label: "Ativos Essenciais" },
            { value: "60", label: "Cápsulas" },
            { value: "500mg", label: "Por Cápsula" },
            { value: "30", label: "Dias de Uso" }
        ],
        benefits: [
            { label: "Vitaminas A, C, D, E, K1, K2", desc: "Funções corporais como visão, imunidade, metabolismo e saúde óssea." },
            { label: "Complexo B completo", desc: "Energia, metabolismo e saúde do sistema nervoso." },
            { label: "Cobre", desc: "Funções enzimáticas e saúde do sistema nervoso." },
            { label: "Ferro", desc: "Transporte de oxigênio no sangue." },
            { label: "Magnésio e Cálcio", desc: "Funções musculares e saúde óssea." },
            { label: "Selênio", desc: "Função antioxidante e saúde da tireoide." },
            { label: "Zinco", desc: "Essencial para imunidade e funções enzimáticas." },
            { label: "Astaxantina", desc: "Potente antioxidante natural." }
        ],
        nutrition: [
            { label: "Vitamina A", qty: "800 mcg" },
            { label: "Vitamina C", qty: "100 mg" },
            { label: "Vitamina D", qty: "50 mcg" },
            { label: "Vitamina B12", qty: "9,94 mcg" },
            { label: "Magnésio Dimalato", qty: "400 mg" },
            { label: "Cálcio Quelato", qty: "300 mg" },
            { label: "Ferro", qty: "14 mg" },
            { label: "Zinco", qty: "22 mg" },
            { label: "Astaxantina", qty: "5 mg" }
        ]
    },
    "NATUFLEX": {
        title: "NATUFLEX",
        subtitle: "Mobilidade e Articulações",
        collection: "Collection 03 / Wellness",
        image: "Mockups/Natuflex/MOKCUP APRESENTAÇÃO NATUFLEX 2.png",
        desc: "Natuflex é um suplemento em cápsulas com 11 ativos selecionados para a saúde dos ossos, músculos e articulações. Proporciona mobilidade, força e conforto articular no dia a dia.",
        stats: [
            { value: "11", label: "Ativos Selecionados" },
            { value: "60", label: "Cápsulas" },
            { value: "500mg", label: "Por Cápsula" },
            { value: "30", label: "Dias de Uso" }
        ],
        benefits: [
            { label: "Cálcio quelato", desc: "Saúde óssea e dental." },
            { label: "Magnésio dimalato", desc: "Função muscular, saúde óssea e regulação do sistema nervoso." },
            { label: "Vitamina D3", desc: "Absorção de cálcio e saúde óssea." },
            { label: "Vitamina K2", desc: "Direciona o cálcio para os ossos." },
            { label: "Colágeno tipo 2", desc: "Suporta a saúde das articulações." },
            { label: "Condroitina", desc: "Mantém a saúde e flexibilidade das articulações." },
            { label: "Glucosamina", desc: "Reduz sintomas articulares." },
            { label: "Ácido hialurônico", desc: "Lubrificação e saúde articular." },
            { label: "Cúrcuma", desc: "Propriedades anti-inflamatórias e antioxidantes." }
        ],
        nutrition: [
            { label: "Cálcio quelato", qty: "200 mg" },
            { label: "Magnésio dimalato", qty: "220 mg" },
            { label: "Colágeno tipo 2", qty: "40 mg" },
            { label: "Condroitina", qty: "100 mg" },
            { label: "Glucosamina", qty: "100 mg" },
            { label: "Ácido hialurônico", qty: "100 mg" },
            { label: "Cúrcuma", qty: "100 mg" },
            { label: "Vitamina D3", qty: "2000 UI" }
        ]
    },
    "NATUFOCO": {
        title: "NATUFOCO",
        subtitle: "Concentração Máxima",
        collection: "Collection 04 / Focus",
        image: "Mockups/Natufoco/MOKCUP C. FUNDO 1.png",
        desc: "Natofoco é um suplemento para memória, foco e clareza mental no dia a dia. Conta com 200mg de Coenzima Q10 por dose, associado a Magnésio Treonato, Vitaminas D, B12 e Triptofano para energia limpa.",
        stats: [
            { value: "200mg", label: "Coenzima Q10" },
            { value: "60", label: "Cápsulas" },
            { value: "500mg", label: "Por Cápsula" },
            { value: "30", label: "Dias de Uso" }
        ],
        benefits: [
            { label: "Coenzima Q10", desc: "Gera energia celular e favorece a saúde do coração." },
            { label: "Magnésio Treonato", desc: "Melhora o foco, memória e aprendizado." },
            { label: "L-Triptofano", desc: "Estimula serotonina, promovendo bom humor e sono." },
            { label: "L-Tirosina", desc: "Aumenta a concentração e a clareza mental." },
            { label: "Fosfatidilserina", desc: "Auxilia na memória e na função cognitiva." },
            { label: "Colina", desc: "Promove suporte cerebral e o metabolismo." }
        ],
        nutrition: [
            { label: "Coenzima Q10", qty: "200 mg" },
            { label: "Magnésio Treonato", qty: "300 mg" },
            { label: "L-Triptofano", qty: "100 mg" },
            { label: "L-Tirosina", qty: "100 mg" },
            { label: "Fosfatidilserina", qty: "50 mg" },
            { label: "Colina", qty: "50 mg" },
            { label: "Vitamina B12", qty: "9,94 mcg" }
        ]
    },
    "NATUPESO": {
        title: "NATUPESO",
        subtitle: "Controle e Leveza",
        collection: "Collection 05 / Active",
        image: "Mockups/Natupeso/MOKCUP C.FUNDO  (1).png",
        desc: "Natupeso é um suplemento natural para emagrecimento saudável, formulado com doze ativos que atuam juntos para aumentar a saciedade, melhorar o metabolismo e reduzir a compulsão por doces.",
        stats: [
            { value: "12", label: "Ativos Naturais" },
            { value: "60", label: "Cápsulas" },
            { value: "500mg", label: "Por Cápsula" },
            { value: "30", label: "Dias de Uso" }
        ],
        benefits: [
            { label: "Psyllium", desc: "Fibra que prolonga a saciedade e reduz a fome ao longo do dia." },
            { label: "Fibra de Beterraba", desc: "Auxilia no bom funcionamento intestinal e digestivo." },
            { label: "Semente de Chia", desc: "Forma gel no estômago, promovendo saciedade prolongada." },
            { label: "Picolinato de Cromo", desc: "Ajuda a reduzir a compulsão por doces e equilibrar a glicose." },
            { label: "Espirulina", desc: "Fonte natural de nutrientes que auxilia na energia e vitalidade." },
            { label: "Ácido Clorogênico", desc: "Auxilia na queima de gordura e no controle glicêmico." },
            { label: "L-Carnitina", desc: "Participa da oxidação de gorduras como fonte de energia." }
        ],
        nutrition: [
            { label: "Psyllium", qty: "500 mg" },
            { label: "Fibra de beterraba", qty: "250 mg" },
            { label: "Semente de chia", qty: "230 mg" },
            { label: "Espirulina", qty: "250 mg" },
            { label: "Ácido clorogênico", qty: "100 mg" },
            { label: "L-carnitina", qty: "100 mg" },
            { label: "Picolinato de cromo", qty: "250 mcg" }
        ]
    },
    "NATUSLEEP": {
        title: "NATUSLEEP",
        subtitle: "Descanso Profundo",
        collection: "Collection 06 / Recovery",
        image: "Mockups/Natusleep/MOKCUP C. FUNDO 1.png",
        desc: "NatuSleep promove noites de sono restauradoras. Sua fórmula combina L-triptofano, magnésio treonato, L-teanina, inositol e melatonina para atuar no controle da ansiedade e regulação natural do sono.",
        stats: [
            { value: "5", label: "Ativos Relaxantes" },
            { value: "60", label: "Cápsulas" },
            { value: "500mg", label: "Por Cápsula" },
            { value: "30", label: "Dias de Uso" }
        ],
        benefits: [
            { label: "Magnésio treonato", desc: "Melhora a qualidade do sono e reduz o estresse mental." },
            { label: "L-triptofano", desc: "Precursor da serotonina e melatonina — ajuda no relaxamento e humor." },
            { label: "Inositol", desc: "Auxilia no equilíbrio emocional e combate a ansiedade." },
            { label: "L-teanina", desc: "Promove calma sem causar sonolência e reduz a tensão." },
            { label: "Melatonina", desc: "Regula o ciclo do sono e facilita o adormecer natural." }
        ],
        nutrition: [
            { label: "Magnésio treonato", qty: "300 mg" },
            { label: "L-triptofano", qty: "300 mg" },
            { label: "Inositol", qty: "200 mg" },
            { label: "L-teanina", qty: "150 mg" },
            { label: "Melatonina", qty: "210 mcg" }
        ]
    },
    "MAGNATU": {
        title: "MAGNATU",
        subtitle: "Magnésio Puro",
        collection: "Collection 07 / Core",
        image: "Mockups/magNatu/APRESENTAÇÃO MAGNATU 1.png",
        desc: "Magnatu combina 4 tipos de magnésio e vitaminas essenciais. Sua fórmula avançada apoia a saúde muscular, cerebral e óssea, além de contribuir para a disposição, clareza mental e bem-estar geral.",
        stats: [
            { value: "4", label: "Tipos de Magnésio" },
            { value: "60", label: "Cápsulas" },
            { value: "500mg", label: "Por Cápsula" },
            { value: "30", label: "Dias de Uso" }
        ],
        benefits: [
            { label: "Magnésio Treonato", desc: "Favorece o foco e a memória." },
            { label: "Magnésio Dimalato", desc: "Aumenta energia e reduz fadiga." },
            { label: "Magnésio Citrato", desc: "Regula o intestino e o metabolismo." },
            { label: "Magnésio Bisglicinato", desc: "Fortalece músculos e ossos." },
            { label: "Inositol", desc: "Equilibra o humor e melhora o foco." }
        ],
        nutrition: [
            { label: "Magnésio treonato", qty: "250 mg" },
            { label: "Magnésio dimalato", qty: "200 mg" },
            { label: "Magnésio citrato", qty: "200 mg" },
            { label: "Magnésio bisglicinato", qty: "200 mg" },
            { label: "Inositol", qty: "120 mg" },
            { label: "Vitamina D3", qty: "2000 UI" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productKey = (params.get('p') || '').toUpperCase();
    const product = ALL_PRODUCTS[productKey];

    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    // Page title
    document.title = `NATURALLE | ${product.title}`;

    // Hero
    document.getElementById('product-main-img').src = product.image;
    document.getElementById('product-main-img').alt = product.title;
    document.getElementById('product-collection-label').textContent = product.collection;
    document.getElementById('product-page-title').textContent = product.title;
    document.getElementById('product-page-subtitle').textContent = product.subtitle;
    document.getElementById('product-page-desc').textContent = product.desc;

    // Stats
    const statsGrid = document.getElementById('stats-grid');
    product.stats.forEach(s => {
        statsGrid.innerHTML += `
            <div class="stat-card">
                <span class="stat-value">${s.value}</span>
                <span class="stat-label">${s.label}</span>
            </div>`;
    });

    // Benefits
    const benefitsGrid = document.getElementById('benefits-grid');
    product.benefits.forEach(b => {
        benefitsGrid.innerHTML += `
            <div class="benefit-card">
                <div class="benefit-card-icon">
                    <span class="material-symbols-outlined">eco</span>
                </div>
                <h4 class="benefit-card-title">${b.label}</h4>
                <p class="benefit-card-desc">${b.desc}</p>
            </div>`;
    });

    // Nutrition
    document.getElementById('nutrition-badge').textContent = product.title;
    const tbody = document.getElementById('nutrition-tbody');
    product.nutrition.forEach(n => {
        tbody.innerHTML += `
            <tr>
                <td>${n.label}</td>
                <td>${n.qty}</td>
            </tr>`;
    });

    // Other products
    const otherGrid = document.getElementById('other-products-grid');
    Object.entries(ALL_PRODUCTS).forEach(([key, p]) => {
        if (key === productKey) return;
        otherGrid.innerHTML += `
            <a href="produto.html?p=${key}" class="other-product-card">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <div class="other-product-card-info">
                    <span class="other-product-card-name">${p.title}</span>
                </div>
            </a>`;
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* =====================================================================
       SEARCH OVERLAY
       ===================================================================== */
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    const searchResultsEl = document.getElementById('search-results');

    const SEARCH_PRODUCTS = Object.entries(ALL_PRODUCTS).map(([key, p]) => ({
        key, name: p.title, sub: p.subtitle, img: p.image
    }));

    function openSearch() {
        searchOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput.focus(), 100);
        renderResults('');
    }

    function closeSearch() {
        searchOverlay.classList.add('hidden');
        document.body.style.overflow = '';
        searchInput.value = '';
        searchResultsEl.innerHTML = '';
    }

    function renderResults(query) {
        const q = query.toLowerCase().trim();
        const filtered = q === ''
            ? SEARCH_PRODUCTS
            : SEARCH_PRODUCTS.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.sub.toLowerCase().includes(q) ||
                p.key.toLowerCase().includes(q)
            );

        if (filtered.length === 0) {
            searchResultsEl.innerHTML = '<div class="search-empty">Nenhum produto encontrado</div>';
            return;
        }

        searchResultsEl.innerHTML = filtered.map(p => `
            <a href="produto.html?p=${p.key}" class="search-result-item">
                <img src="${p.img}" alt="${p.name}" class="search-result-img">
                <div class="search-result-info">
                    <span class="search-result-name">${p.name}</span>
                    <span class="search-result-sub">${p.sub}</span>
                </div>
            </a>
        `).join('');
    }

    if (searchToggle) searchToggle.addEventListener('click', openSearch);
    if (searchClose) searchClose.addEventListener('click', closeSearch);
    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) closeSearch();
        });
    }
    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderResults(e.target.value));
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay && !searchOverlay.classList.contains('hidden')) {
            closeSearch();
        }
    });
});
