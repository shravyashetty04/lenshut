document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       Header & Navigation
       ========================================================================== */
    const header = document.getElementById('header');
    
    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');

    if(mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if(closeMenu) {
        closeMenu.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    /* ==========================================================================
       Cart Drawer
       ========================================================================== */
    const cartBtn = document.querySelector('.cart-btn');
    const cartDrawerOverlay = document.querySelector('.cart-drawer-overlay');
    const cartDrawer = document.querySelector('.cart-drawer');
    const closeCartBtn = document.querySelector('.close-cart');

    function toggleCart() {
        cartDrawerOverlay.classList.toggle('active');
        cartDrawer.classList.toggle('active');
        document.body.style.overflow = cartDrawer.classList.contains('active') ? 'hidden' : '';
    }

    if(cartBtn) cartBtn.addEventListener('click', toggleCart);
    if(closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
    if(cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', toggleCart);

    /* ==========================================================================
       Quick View Modal
       ========================================================================== */
    const qvOverlay = document.querySelector('.quick-view-overlay');
    const closeQvBtn = document.querySelector('.close-modal');
    const qvContent = document.getElementById('quick-view-content');

    function closeQuickView() {
        qvOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if(closeQvBtn) closeQvBtn.addEventListener('click', closeQuickView);
    if(qvOverlay) {
        qvOverlay.addEventListener('click', (e) => {
            if (e.target === qvOverlay) closeQuickView();
        });
    }

    window.openQuickView = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const allImgs = product.images && product.images.length > 0 ? product.images : [product.image];
        let activeIdx = 0;

        function buildGalleryHTML(idx) {
            const thumbsHtml = allImgs.map((src, i) =>
                `<img src="${src}" class="qv-thumb ${i === idx ? 'active' : ''}" onclick="window.switchQvImg(${i})" alt="View ${i+1}">`
            ).join('');
            return `
                <div class="qv-grid">
                    <div class="qv-img-col">
                        <div class="qv-main-img-wrap">
                            <img src="${allImgs[idx]}" alt="${product.name}" id="qv-main-img" class="qv-main-img">
                        </div>
                        <div class="qv-thumbs">${thumbsHtml}</div>
                    </div>
                    <div class="qv-details">
                        <p class="product-category">${product.category} &mdash; ${product.shape}</p>
                        <h3>${product.name}</h3>
                        <p class="qv-code">Code: ${product.code}</p>
                        <p style="color:var(--text-muted); margin-top:0.75rem; line-height:1.7;">${product.desc}</p>
                        <div class="qv-meta">
                            <span><strong>Size:</strong> ${product.size}</span>
                            <span><strong>Gender:</strong> ${product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}</span>
                            ${product.badge ? `<span class="card-badge badge-${product.badge}" style="position:static;margin:0;">${formatBadgeName(product.badge)}</span>` : ''}
                        </div>
                        <div style="margin-top: 1.5rem;">
                            <button class="btn btn-primary w-100" onclick="showVisitStoreModal()"><i class="ph ph-map-pin"></i> Near Store Location</button>
                        </div>
                        <div style="margin-top: 0.75rem;">
                            <button class="btn btn-outline w-100" onclick="alert('Added to wishlist!')"><i class="ph ph-heart"></i> Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            `;
        }

        window.switchQvImg = (idx) => {
            activeIdx = idx;
            const mainImg = document.getElementById('qv-main-img');
            if (mainImg) mainImg.src = allImgs[idx];
            document.querySelectorAll('.qv-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
        };

        qvContent.innerHTML = buildGalleryHTML(activeIdx);
        qvOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.addToCart = (productId) => {
        // Close quick view if open
        closeQuickView();
        // Show visit store modal
        showVisitStoreModal();
    };

    /* ==========================================================================
       Near Store Locations (Excluding Tumkur)
       ========================================================================== */
    const nearStoreLocations = [
        {
            id: 'banashankari',
            name: 'LensHut Banashankari',
            city: 'Bengaluru',
            area: 'Banashankari 2nd Stage, Bengaluru',
            address: '2stage, 2 Block, 276/278 14 th main road, 80 Feet Rd, Banashankari, Bengaluru, Karnataka 560050',
            phone: '9916901201',
            displayPhone: '+91 9916901201',
            whatsapp: '919916901201',
            hours: 'Mon – Sun: 10:30 AM – 9:30 PM',
            mapUrl: 'https://maps.google.com/?q=LensHut+Banashankari+Bengaluru'
        },
        {
            id: 'jp-nagar',
            name: 'LensHut JP Nagar',
            city: 'Bengaluru',
            area: 'JP Nagar 5th Phase, Bengaluru',
            address: 'SHOP NO 300, OUTER RING ROAD, 15th Cross Rd, 5th Phase, JPNAGAR, Bengaluru, Karnataka 560078',
            phone: '9513106789',
            displayPhone: '+91 9513106789',
            whatsapp: '919513106789',
            hours: 'Mon – Sun: 10:30 AM – 9:30 PM',
            mapUrl: 'https://maps.google.com/?q=LensHut+JP+Nagar+Bengaluru'
        },
        {
            id: 'malleshwaram',
            name: 'LensHut Malleshwaram',
            city: 'Bengaluru',
            area: 'Margosa Rd, Malleshwaram, Bengaluru',
            address: 'Om Mahaganapathi Complex, 17, Margosa Rd, Malleshwaram, Bengaluru, Karnataka 560003',
            phone: '8041225517',
            displayPhone: '080-41225517',
            whatsapp: '918041225517',
            hours: 'Mon – Sun: 10:30 AM – 9:30 PM',
            mapUrl: 'https://maps.google.com/?q=LensHut+Malleshwaram+Bengaluru'
        },
        {
            id: 'hsr',
            name: 'LensHut HSR Layout',
            city: 'Bengaluru',
            area: 'HSR Layout 1st Sector, Bengaluru',
            address: 'Ground floor, 27th Main Rd, Phase 3, Agara Village, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102',
            phone: '8042134243',
            displayPhone: '080-42134243',
            whatsapp: '918042134243',
            hours: 'Mon – Sun: 10:30 AM – 9:30 PM',
            mapUrl: 'https://maps.google.com/?q=LensHut+HSR+Layout+Bengaluru'
        },
        {
            id: 'kuvempu-nagara',
            name: 'LensHut Kuvempu Nagara',
            city: 'Mysuru',
            area: 'Kuvempu Nagara, Mysuru',
            address: 'Ground Floor, MIG 2, New Kantharaj Urs Rd, near Sri S Nijalingappa Circle, Kuvempu Nagara, Mysuru, Karnataka 570023',
            phone: '8214260042',
            displayPhone: '0821-4260042',
            whatsapp: '918214260042',
            hours: 'Mon – Sun: 10:30 AM – 9:30 PM',
            mapUrl: 'https://maps.google.com/?q=LensHut+Kuvempu+Nagara+Mysuru'
        },
        {
            id: 'urs-road',
            name: 'LensHut URS Road',
            city: 'Mysuru',
            area: 'D Devaraj Urs Rd, Mysuru',
            address: 'Shop No 9 D, D Devaraj Urs Rd, next to City Bus Stop, Subbarayanakere, Shivarampet, Mysuru, Karnataka 570001',
            phone: '8214252040',
            displayPhone: '0821-4252040',
            whatsapp: '918214252040',
            hours: 'Mon – Sun: 10:30 AM – 9:30 PM',
            mapUrl: 'https://maps.google.com/?q=LensHut+URS+Road+Mysuru'
        },
        {
            id: 'hassan',
            name: 'LensHut Hassan',
            city: 'Hassan',
            area: 'Krishnaraja Pura, Hassan',
            address: 'Ground Floor, No 198/A, Shankar Mutt Rd, Krishnaraja Pura, Hassan, Karnataka 573201',
            phone: '8172450094',
            displayPhone: '08172-450094',
            whatsapp: '918172450094',
            hours: 'Mon – Sun: 10:30 AM – 9:30 PM',
            mapUrl: 'https://maps.google.com/?q=LensHut+Hassan'
        }
    ];

    let currentSelectedStoreId = 'banashankari';
    let currentCityFilter = 'all';

    function buildNearStoreModalHTML() {
        const activeStore = nearStoreLocations.find(s => s.id === currentSelectedStoreId) || nearStoreLocations[0];
        const filteredStores = currentCityFilter === 'all'
            ? nearStoreLocations
            : nearStoreLocations.filter(s => s.city.toLowerCase() === currentCityFilter.toLowerCase());

        const cities = [
            { id: 'all', label: 'All Stores', count: nearStoreLocations.length },
            { id: 'bengaluru', label: 'Bengaluru', count: nearStoreLocations.filter(s => s.city.toLowerCase() === 'bengaluru').length },
            { id: 'mysuru', label: 'Mysuru', count: nearStoreLocations.filter(s => s.city.toLowerCase() === 'mysuru').length },
            { id: 'hassan', label: 'Hassan', count: nearStoreLocations.filter(s => s.city.toLowerCase() === 'hassan').length }
        ];

        const cityPillsHtml = cities.map(c => `
            <button class="nsl-city-btn ${currentCityFilter === c.id ? 'active' : ''}" onclick="window.filterNearStoreCity('${c.id}')">
                ${c.label} (${c.count})
            </button>
        `).join('');

        const storeListHtml = filteredStores.map(store => `
            <div class="nsl-store-item ${store.id === activeStore.id ? 'active' : ''}" onclick="window.selectNearStore('${store.id}')">
                <div class="nsl-store-item-header">
                    <h4>${store.name}</h4>
                    <span class="nsl-city-badge">${store.city}</span>
                </div>
                <p class="nsl-store-item-sub"><i class="ph ph-map-pin"></i> ${store.area}</p>
                <div class="nsl-store-item-quick-actions">
                    <span><i class="ph ph-phone"></i> ${store.displayPhone}</span>
                </div>
            </div>
        `).join('');

        const waText = encodeURIComponent(`Hi LensHut, I'm interested in prescription frames and would like to visit your ${activeStore.name} branch.`);

        return `
            <div class="visit-store-modal nsl-modal">
                <button class="close-visit-store" aria-label="Close">&times;</button>
                <div class="nsl-header">
                    <div class="nsl-icon"><i class="ph ph-storefront"></i></div>
                    <div class="nsl-header-text">
                        <h3>Near Store Locations</h3>
                        <p>Select any store location below to view details, phone number, chat on WhatsApp, or call directly.</p>
                    </div>
                </div>

                <div class="nsl-city-bar">
                    ${cityPillsHtml}
                </div>

                <div class="nsl-body-grid">
                    <div class="nsl-list-col">
                        <label class="nsl-col-title"><i class="ph ph-list-dashes"></i> Choose Store Location:</label>
                        <div class="nsl-store-list">
                            ${storeListHtml}
                        </div>
                    </div>

                    <div class="nsl-detail-col">
                        <div class="nsl-detail-card">
                            <div class="nsl-detail-badge"><i class="ph ph-check-circle"></i> Selected Store</div>
                            <h3 class="nsl-detail-title">${activeStore.name}</h3>

                            <div class="nsl-details-box">
                                <div class="nsl-detail-row">
                                    <i class="ph ph-map-pin"></i>
                                    <div>
                                        <strong>Address:</strong>
                                        <p>${activeStore.address}</p>
                                    </div>
                                </div>
                                <div class="nsl-detail-row">
                                    <i class="ph ph-clock"></i>
                                    <div>
                                        <strong>Store Timings:</strong>
                                        <p>${activeStore.hours}</p>
                                    </div>
                                </div>
                                <div class="nsl-detail-row">
                                    <i class="ph ph-phone"></i>
                                    <div>
                                        <strong>Phone Number:</strong>
                                        <p><a href="tel:${activeStore.phone}" class="nsl-phone-text">${activeStore.displayPhone}</a></p>
                                    </div>
                                </div>
                            </div>

                            <div class="nsl-actions-grid">
                                <a href="https://wa.me/${activeStore.whatsapp}?text=${waText}" target="_blank" rel="noopener" class="btn-nsl btn-nsl-whatsapp">
                                    <i class="ph-fill ph-whatsapp-logo"></i> WhatsApp
                                </a>
                                <a href="tel:${activeStore.phone}" class="btn-nsl btn-nsl-call">
                                    <i class="ph-fill ph-phone-call"></i> Call Now
                                </a>
                                <a href="${activeStore.mapUrl}" target="_blank" rel="noopener" class="btn-nsl btn-nsl-map">
                                    <i class="ph-fill ph-navigation-arrow"></i> Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    window.selectNearStore = (storeId) => {
        currentSelectedStoreId = storeId;
        refreshNearStoreModal();
    };

    window.filterNearStoreCity = (cityId) => {
        currentCityFilter = cityId;
        const matching = cityId === 'all'
            ? nearStoreLocations
            : nearStoreLocations.filter(s => s.city.toLowerCase() === cityId.toLowerCase());
        if (matching.length > 0 && !matching.some(s => s.id === currentSelectedStoreId)) {
            currentSelectedStoreId = matching[0].id;
        }
        refreshNearStoreModal();
    };

    function refreshNearStoreModal() {
        let modal = document.getElementById('visit-store-modal');
        if (modal) {
            modal.innerHTML = buildNearStoreModalHTML();
            attachModalEvents(modal);
        }
    }

    function attachModalEvents(modal) {
        const closeBtn = modal.querySelector('.close-visit-store');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        };
    }

    function showVisitStoreModal() {
        const qvOverlay = document.querySelector('.quick-view-overlay');
        if (qvOverlay) {
            qvOverlay.classList.remove('active');
        }
        let modal = document.getElementById('visit-store-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'visit-store-modal';
            modal.className = 'visit-store-overlay';
            document.body.appendChild(modal);
        }
        modal.innerHTML = buildNearStoreModalHTML();
        attachModalEvents(modal);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Make showVisitStoreModal accessible globally (for product card buttons)
    window.showVisitStoreModal = showVisitStoreModal;
    window.openNearStoreModal = showVisitStoreModal;



    /* ==========================================================================
       Product Rendering & Filtering
       ========================================================================== */
    
    // Render Hottest Collections Carousel
    const hottestCarousel = document.getElementById('hottest-carousel');
    if (hottestCarousel && typeof products !== 'undefined') {
        const featuredProducts = products.filter(p => p.isFeatured);
        
        let html = '';
        featuredProducts.forEach(p => {
            html += generateProductCardHTML(p);
        });
        hottestCarousel.innerHTML = html;
        
        // Setup Carousel buttons
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        if(prevBtn) {
            prevBtn.addEventListener('click', () => {
                hottestCarousel.scrollBy({ left: -300, behavior: 'smooth' });
            });
        }
        if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                hottestCarousel.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    }

    // Render Main Shop Grid
    const productGrid = document.getElementById('product-grid');
    const countDisplay = document.getElementById('count-display');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const sortSelect = document.getElementById('sort-select');
    const clearFiltersBtn = document.querySelector('.clear-filters');

    // Pagination state
    const ITEMS_PER_PAGE = 12;
    let currentPage = 1;
    let currentFilteredProducts = [];

    function renderShop(productsToRender, page) {
        if (!productGrid) return;
        page = page || 1;
        currentPage = page;
        currentFilteredProducts = productsToRender;

        if (productsToRender.length === 0) {
            productGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem;">No products match your criteria.</div>';
            if (countDisplay) countDisplay.textContent = '0';
            renderPagination(0, 1);
            return;
        }

        const totalPages = Math.ceil(productsToRender.length / ITEMS_PER_PAGE);
        const start = (page - 1) * ITEMS_PER_PAGE;
        const pageProducts = productsToRender.slice(start, start + ITEMS_PER_PAGE);

        let html = '';
        pageProducts.forEach(p => { html += generateProductCardHTML(p); });
        productGrid.innerHTML = html;
        if (countDisplay) countDisplay.textContent = productsToRender.length;

        renderPagination(totalPages, page);

        // Scroll to top of grid smoothly
        if (page > 1) {
            productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function renderPagination(totalPages, page) {
        let paginationEl = document.getElementById('pagination-controls');
        if (!paginationEl) {
            paginationEl = document.createElement('div');
            paginationEl.id = 'pagination-controls';
            paginationEl.className = 'pagination-controls';
            if (productGrid && productGrid.parentNode) {
                productGrid.parentNode.insertBefore(paginationEl, productGrid.nextSibling);
            }
        }

        if (totalPages <= 1) { paginationEl.innerHTML = ''; return; }

        let html = `<button class="pg-btn" id="pg-prev" ${page <= 1 ? 'disabled' : ''} onclick="changePage(${page - 1})"><i class="ph ph-caret-left"></i></button>`;

        const delta = 2;
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= page - delta && i <= page + delta)) {
                html += `<button class="pg-btn pg-num ${i === page ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
            } else if (i === page - delta - 1 || i === page + delta + 1) {
                html += `<span class="pg-ellipsis">…</span>`;
            }
        }

        html += `<button class="pg-btn" id="pg-next" ${page >= totalPages ? 'disabled' : ''} onclick="changePage(${page + 1})"><i class="ph ph-caret-right"></i></button>`;
        paginationEl.innerHTML = html;
    }

    window.changePage = (page) => {
        renderShop(currentFilteredProducts, page);
    };

    function filterAndSortProducts() {
        let filtered = [...products];

        // Gather active filters
        const activeFilters = { category: [], shape: [], gender: [] };

        filterCheckboxes.forEach(cb => {
            if (cb.checked) {
                const type = cb.dataset.filter;
                activeFilters[type].push(cb.value);
            }
        });

        // Active quick-filter tab
        const activeTab = document.querySelector('.filter-tab.active');
        if (activeTab) {
            const tabFilter = activeTab.dataset.filter;
            const tabType = activeTab.dataset.type;
            if (tabFilter && tabFilter !== 'all' && tabType) {
                activeFilters[tabType].push(tabFilter);
            }
        }

        if (activeFilters.category.length > 0) {
            filtered = filtered.filter(p => activeFilters.category.includes(p.category));
        }
        if (activeFilters.shape.length > 0) {
            filtered = filtered.filter(p => activeFilters.shape.includes(p.shape));
        }
        if (activeFilters.gender.length > 0) {
            filtered = filtered.filter(p => activeFilters.gender.includes(p.gender));
        }

        if (sortSelect) {
            const sortValue = sortSelect.value;
            if (sortValue === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));
            else if (sortValue === 'name-desc') filtered.sort((a, b) => b.name.localeCompare(a.name));
            else if (sortValue === 'new') filtered.sort((a, b) => (a.badge === 'new-arrival' ? -1 : 1));
        }

        renderShop(filtered, 1); // Always reset to page 1 on filter/sort change
    }

    // Quick filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterAndSortProducts();
        });
    });

    // Event Listeners for Filters
    if (filterCheckboxes.length > 0) {
        filterCheckboxes.forEach(cb => { cb.addEventListener('change', filterAndSortProducts); });
    }
    if (sortSelect) { sortSelect.addEventListener('change', filterAndSortProducts); }
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            filterCheckboxes.forEach(cb => cb.checked = false);
            // Reset tabs too
            filterTabs.forEach(t => t.classList.remove('active'));
            const allTab = document.querySelector('.filter-tab[data-filter="all"]');
            if (allTab) allTab.classList.add('active');
            filterAndSortProducts();
        });
    }

    // Initial render
    if (productGrid && typeof products !== 'undefined') {
        renderShop(products, 1);
    }

    function formatBadgeName(badge) {
        if (!badge) return '';
        return badge.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    function generateProductCardHTML(product) {
        const badgeHTML = product.badge ? `<div class="card-badge badge-${product.badge}">${formatBadgeName(product.badge)}</div>` : '';
        
        // Truncate description to roughly 65 chars to fit 2 lines gracefully
        let displayDesc = product.desc;
        if(displayDesc.length > 65) {
            displayDesc = displayDesc.substring(0, 65) + '...';
        }

        return `
            <div class="product-card">
                ${badgeHTML}
                <div class="product-img-wrap" onclick="openQuickView(${product.id})" style="cursor:pointer;">
                    <img src="${product.image}" alt="${product.name}" class="primary-img">
                    <div class="card-hover-overlay"><i class="ph ph-eye"></i> Quick View</div>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-title" title="${product.desc}">${displayDesc}</h3>
                    <p class="product-size">Size: ${product.size} &nbsp;|&nbsp; ${product.shape.charAt(0).toUpperCase() + product.shape.slice(1)}</p>
                    
                    <div class="product-footer">
                        <button class="btn-near-store" onclick="showVisitStoreModal()" title="Near Store Location">
                            <i class="ph ph-map-pin"></i> Near Store Location
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /* ==========================================================================
       Lightbox Gallery
       ========================================================================== */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    window.openLightbox = (src) => {
        if(lightbox && lightboxImg) {
            lightboxImg.src = src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeLightbox = () => {
        if(lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if(lightbox) {
        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    /* ==========================================================================
       Testimonial Carousel (Top Banner Layout)
       ========================================================================== */
    const testimonialContainer = document.getElementById('testimonial-carousel');
    const dotsContainer = document.getElementById('testimonial-dots');
    
    if (testimonialContainer && dotsContainer && typeof testimonials !== 'undefined') {
        let currentSlide = 0;
        let html = '';
        let dotsHtml = '';
        
        testimonials.forEach((test, index) => {
            const isActive = index === 0 ? 'active' : '';
            
            // Build stars
            let stars = '';
            for(let i=0; i<5; i++) {
                stars += `<i class="ph-fill ph-star"></i>`;
            }
            
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(test.name)}&background=random&color=fff&size=100`;

            html += `
                <div class="testimonial-slide ${isActive}" data-index="${index}">
                    <div class="testi-rating">${stars}</div>
                    <p class="testi-text">“ ${test.text} ”</p>
                    <div class="testi-author-flex">
                        <img src="${avatarUrl}" alt="${test.name}" class="testi-avatar">
                        <span class="testi-name">${test.name}</span>
                    </div>
                </div>
            `;
            
            dotsHtml += `<div class="dot ${isActive}" data-index="${index}"></div>`;
        });
        
        testimonialContainer.innerHTML = html;
        dotsContainer.innerHTML = dotsHtml;
        
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');
        
        window.goToSlide = function(index) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        };
        
        window.goToNextSlide = function() {
            let next = currentSlide + 1;
            if (next >= testimonials.length) next = 0;
            goToSlide(next);
        };
        
        window.goToPrevSlide = function() {
            let prev = currentSlide - 1;
            if (prev < 0) prev = testimonials.length - 1;
            goToSlide(prev);
        };
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.dataset.index);
                goToSlide(idx);
            });
        });
        
        // Auto rotate
        setInterval(() => {
            goToNextSlide();
        }, 5000);
    }

    // City Select Dropdown for Stores
    const citySelect = document.getElementById('citySelect');
    if (citySelect) {
        citySelect.addEventListener('change', (e) => {
            const selectedCity = e.target.value;
            
            // Hide all grids
            document.querySelectorAll('.city-grid').forEach(grid => {
                grid.style.display = 'none';
            });
            
            // Show selected grid
            const targetGrid = document.getElementById('grid-' + selectedCity);
            if (targetGrid) {
                targetGrid.style.display = 'grid';
            }
        });
    }
});
