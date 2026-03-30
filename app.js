const PRODUCTS_DATA = {
    "NATUBEAUTY": {
        benefits: [
            { label: "Ácido hialurônico", desc: "hidrata e mantém a firmeza da pele." },
            { label: "Silício orgânico", desc: "fortalece cabelos, unhas e pele." },
            { label: "Colágeno hidrolisado", desc: "melhora a elasticidade e sustentação da pele." },
            { label: "L-cisteína e L-metionina", desc: "estimulam o crescimento e a força dos fios e unhas." },
            { label: "MSM", desc: "auxilia na regeneração e firmeza da pele." },
            { label: "Vitaminas B", desc: "promovem energia e vitalidade." },
            { label: "Vitamina A", desc: "melhora a textura e o brilho." },
            { label: "Vitamina D", desc: "estimula a renovação celular." },
            { label: "Vitamina C", desc: "estimula a produção de colágeno." },
            { label: "Vitamina E", desc: "protege contra o envelhecimento precoce." },
            { label: "Zinco", desc: "fortalece unhas e cabelos, reduz oleosidade." },
            { label: "Selênio", desc: "combate o envelhecimento." },
            { label: "Ferro", desc: "estimula o crescimento capilar." }
        ],
        nutrition: [
            { label: "Ácido Hialurônico", qty: "100 mg" },
            { label: "Silício orgânico", qty: "100 mg" },
            { label: "Colágeno hidrolisado", qty: "300 mg" },
            { label: "L-cisteína", qty: "100 mg" },
            { label: "L-metionina", qty: "100 mg" },
            { label: "Metilsulfonilmetano", qty: "100 mg" },
            { label: "Vitamina C", qty: "100 mg" },
            { label: "Zinco quelato", qty: "11 mg" },
            { label: "Ferro quelato", qty: "14 mg" }
        ]
    },
    "NATUCOMPLEX": {
        benefits: [
            { label: "Vitaminas (A-E, K1, K2)", desc: "Importantes para diversas funções corporais como visão, imunidade, metabolismo energético, e saúde óssea." },
            { label: "Cobre", desc: "Importante para funções enzimáticas e saúde do sistema nervoso." },
            { label: "Ferro", desc: "Essencial para transporte de oxigênio no sangue." },
            { label: "Magnésio e Cálcio", desc: "Importante para funções musculares e saúde óssea." },
            { label: "Selênio", desc: "Importante para função antioxidante e saúde da tireoide." },
            { label: "Zinco", desc: "Essencial para imunidade e funções enzimáticas." }
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
        benefits: [
            { label: "Cálcio quelato", desc: "Importante para a saúde óssea e dental." },
            { label: "Magnésio dimalato", desc: "Ajuda na função muscular, saúde óssea e regulação do sistema nervoso." },
            { label: "Vitamina D3", desc: "Essencial para a absorção de cálcio e saúde óssea." },
            { label: "Vitamina K2", desc: "Ajuda no direcionamento do cálcio para os ossos e evita deposição em tecidos moles." },
            { label: "Colágeno tipo 2", desc: "Suporta a saúde das articulações." },
            { label: "Condroitina e Glucosamina", desc: "Ajuda a manter a saúde das articulações e na redução de sintomas." },
            { label: "Ácido hialurônico", desc: "Ajuda na lubrificação e saúde das articulações." },
            { label: "Cúrcuma", desc: "Tem propriedades anti-inflamatórias e antioxidantes." }
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
    /* =====================================================================
       CAROUSEL LOGIC
       ===================================================================== */
    const items = Array.from(document.querySelectorAll('.carousel-item'));
    const btnNext = document.getElementById('carousel-next');
    const btnPrev = document.getElementById('carousel-prev');
    const infoContainer = document.getElementById('hero-info-container');
    
    // Info Elements
    const dLabel = document.getElementById('display-label');
    const dTitle = document.getElementById('display-title');
    const dDesc = document.getElementById('display-desc');

    let currentIndex = 0;
    const totalItems = items.length;

    function updateCarousel() {
        items.forEach((item, i) => {
            // Remove all modifier classes
            item.classList.remove(
                'active', 'next-1', 'next-2', 'prev-1', 'prev-2', 
                'hidden-right', 'hidden-left'
            );

            // Calculate relative offset
            let diff = i - currentIndex;
            
            // Adjust for continuous looping
            if (diff > Math.floor(totalItems / 2)) {
                diff -= totalItems;
            } else if (diff < -Math.floor(totalItems / 2)) {
                diff += totalItems;
            }

            // Assign classes based on offset
            if (diff === 0) {
                item.classList.add('active');
            } else if (diff === 1) {
                item.classList.add('next-1');
            } else if (diff === 2) {
                item.classList.add('next-2');
            } else if (diff === -1) {
                item.classList.add('prev-1');
            } else if (diff === -2) {
                item.classList.add('prev-2');
            } else if (diff > 2) {
                item.classList.add('hidden-right');
            } else if (diff < -2) {
                item.classList.add('hidden-left');
            }
        });

        updateProductInfo();
    }

    function updateProductInfo() {
        const activeItem = items[currentIndex];
        if (!activeItem || !infoContainer) return;

        // Start fading out
        infoContainer.classList.add('fading');

        setTimeout(() => {
            // Swap content while invisible
            dLabel.textContent = activeItem.dataset.label;
            dTitle.textContent = activeItem.dataset.title;
            dDesc.textContent = activeItem.dataset.desc;
            
            // Fade back in
            infoContainer.classList.remove('fading');
        }, 400); // 400ms matches the transition duration in CSS
    }

    // Event Listeners for Arrows
    if (btnNext && btnPrev) {
        btnNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        btnPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });
    }

    // Allow clicking on a specific card to jump to it
    items.forEach(item => {
        item.addEventListener('click', function() {
            if(!this.classList.contains('active')) {
                const targetIndex = parseInt(this.dataset.index);
                currentIndex = targetIndex;
                updateCarousel();
            }
        });
    });

    // Initialize Carousel
    if(items.length > 0) {
        updateCarousel();
    }

    /* =====================================================================
       MODAL LOGIC
       ===================================================================== */
    const modal = document.getElementById('detail-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    // Delegate event listener for dynamic active buttons
    document.addEventListener('click', (e) => {
        // "Ver Detalhes" overlay button → open modal
        if (e.target.closest('.carousel-item.active .overlay-button')) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            const activeItem = items[currentIndex];
            const pkey = activeItem.dataset.title.toUpperCase();
            
            const modalImage = document.querySelector('.modal-image-col img');
            const modalTitle = document.querySelector('.modal-title');
            const modalDesc = document.querySelector('.modal-body-content .body-text');
            const modalDynamic = document.getElementById('modal-dynamic-content');
            
            modalImage.src = activeItem.querySelector('img').src;
            modalTitle.textContent = activeItem.dataset.title;
            if(modalDesc) {
                modalDesc.textContent = activeItem.dataset.desc;
            }

            // Generate HTML for Benefits and Nutrition Table
            if(modalDynamic && PRODUCTS_DATA[pkey]) {
                const pData = PRODUCTS_DATA[pkey];
                
                let benefitsHTML = '<div class="benefits-container"><h3 class="section-title">Benefícios dos Ingredientes</h3><div class="benefits-list">';
                pData.benefits.forEach(b => {
                    benefitsHTML += `<div class="benefit-item"><strong>${b.label}:</strong> ${b.desc}</div>`;
                });
                benefitsHTML += '</div></div>';

                let nutritionHTML = '<div class="nutrition-container"><h3 class="section-title">Tabela Nutricional</h3><table class="nutrition-table"><tbody>';
                pData.nutrition.forEach(n => {
                    nutritionHTML += `<tr><td>${n.label}</td><td class="qty-value">${n.qty}</td></tr>`;
                });
                nutritionHTML += '</tbody></table></div>';
                
                modalDynamic.innerHTML = benefitsHTML + nutritionHTML;
            } else if (modalDynamic) {
                modalDynamic.innerHTML = '';
            }
        }

        // "Ver Produto" button → go to product page
        if (e.target.closest('#display-action')) {
            const activeItem = items[currentIndex];
            const pkey = activeItem.dataset.title.toUpperCase();
            window.location.href = `produto.html?p=${pkey}`;
        }

        // "Saiba Mais" inside modal → go to product page
        if (e.target.closest('.primary-action-btn')) {
            const activeItem = items[currentIndex];
            const pkey = activeItem.dataset.title.toUpperCase();
            window.location.href = `produto.html?p=${pkey}`;
        }
    });

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }

    // Smooth Scroll
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
    const searchResults = document.getElementById('search-results');

    const SEARCH_PRODUCTS = [
        { key: "NATUBEAUTY", name: "NatuBeauty", sub: "Estética e Cuidado — Cabelos, Pele e Unhas", img: "Mockups/Natubeauty/APRESENTAÇÃO NATUBEAUTY 2.png" },
        { key: "NATUCOMPLEX", name: "NatuComplex", sub: "Nutrição Essencial — Multivitamínico Completo", img: "Mockups/Natucomplex/MOKCUP C. FUNDO 1.png" },
        { key: "NATUFLEX", name: "NatuFlex", sub: "Mobilidade e Articulações — Ossos e Músculos", img: "Mockups/Natuflex/MOKCUP APRESENTAÇÃO NATUFLEX 2.png" },
        { key: "NATUFOCO", name: "NatuFoco", sub: "Concentração Máxima — Memória e Clareza Mental", img: "Mockups/Natufoco/MOKCUP C. FUNDO 1.png" },
        { key: "NATUPESO", name: "NatuPeso", sub: "Controle e Leveza — Emagrecimento Saudável", img: "Mockups/Natupeso/MOKCUP C.FUNDO  (1).png" },
        { key: "NATUSLEEP", name: "NatuSleep", sub: "Descanso Profundo — Sono Restaurador", img: "Mockups/Natusleep/MOKCUP C. FUNDO 1.png" },
        { key: "MAGNATU", name: "MagNatu", sub: "Magnésio Puro — 4 Tipos de Magnésio", img: "Mockups/magNatu/APRESENTAÇÃO MAGNATU 1.png" }
    ];

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
        searchResults.innerHTML = '';
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
            searchResults.innerHTML = '<div class="search-empty">Nenhum produto encontrado</div>';
            return;
        }

        searchResults.innerHTML = filtered.map(p => `
            <a href="produto.html?p=${p.key}" class="search-result-item">
                <img src="${p.img}" alt="${p.name}" class="search-result-img">
                <div class="search-result-info">
                    <span class="search-result-name">${p.name}</span>
                    <span class="search-result-sub">${p.sub}</span>
                </div>
            </a>
        `).join('');
    }

    if (searchToggle) {
        searchToggle.addEventListener('click', openSearch);
    }
    if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
    }
    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) closeSearch();
        });
    }
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderResults(e.target.value);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay && !searchOverlay.classList.contains('hidden')) {
            closeSearch();
        }
    });

    /* =====================================================================
       PARALLAX SCROLL ANIMATION
       ===================================================================== */
    const parallaxCards = document.querySelectorAll('.parallax-card');
    if (parallaxCards.length > 0) {
        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => {
                const windowHeight = window.innerHeight;
                parallaxCards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    // Compare position relative to the middle of the screen
                    const centerOffset = (rect.top + rect.height / 2) - (windowHeight / 2);
                    
                    // Check if it's visible in the viewport
                    if (rect.top < windowHeight + 100 && rect.bottom > -100) {
                        const speed = parseFloat(card.getAttribute('data-speed')) || 0;
                        // Determine translation
                        const yPos = centerOffset * speed;
                        card.style.transform = `translateY(${yPos}px)`;
                    }
                });
            });
        }, { passive: true });
    }
});
