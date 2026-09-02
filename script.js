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
                        <div class="qv-price">₹${product.price.toLocaleString()} <span class="product-tax">Incl of taxes</span></div>
                        <p style="color:var(--text-muted); margin-top:0.75rem; line-height:1.7;">${product.desc}</p>
                        <div class="qv-meta">
                            <span><strong>Size:</strong> ${product.size}</span>
                            <span><strong>Gender:</strong> ${product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}</span>
                            ${product.badge ? `<span class="card-badge badge-${product.badge}" style="position:static;margin:0;">${formatBadgeName(product.badge)}</span>` : ''}
                        </div>
                        <div style="margin-top: 1.5rem;">
                            <button class="btn btn-primary w-100" onclick="addToCart(${product.id})"><i class="ph ph-storefront"></i> Visit Store to Purchase</button>
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

    function showVisitStoreModal() {
        let modal = document.getElementById('visit-store-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'visit-store-modal';
            modal.className = 'visit-store-overlay';
            modal.innerHTML = `
                <div class="visit-store-modal">
                    <button class="close-visit-store" aria-label="Close">&times;</button>
                    <div class="vsm-icon"><i class="ph ph-storefront"></i></div>
                    <h3>Visit Our Store to Purchase</h3>
                    <p>We'd love to help you find the perfect frame in person! Our optical experts are ready to assist you with fitting, prescription, and style advice.</p>
                    <div class="vsm-details">
                        <div class="vsm-detail-row">
                            <i class="ph ph-map-pin"></i>
                            <span>SHOP NO 300, OUTER RING ROAD, 15th Cross Rd, JP NAGAR, Bengaluru</span>
                        </div>
                        <div class="vsm-detail-row">
                            <i class="ph ph-phone"></i>
                            <a href="tel:+918884111108">+91 8884111108</a>
                        </div>
                        <div class="vsm-detail-row">
                            <i class="ph ph-clock"></i>
                            <span>Mon – Sun: 10:30 AM – 9:30 PM</span>
                        </div>
                    </div>
                    <div class="vsm-actions">
                        <a href="https://maps.google.com/?q=LensHut+JP+Nagar+Bengaluru" target="_blank" class="btn btn-primary"><i class="ph ph-navigation-arrow"></i> Get Directions</a>
                        <a href="tel:+918884111108" class="btn btn-outline"><i class="ph ph-phone"></i> Call Now</a>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            modal.querySelector('.close-visit-store').addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Make showVisitStoreModal accessible globally (for product card buttons)
    window.showVisitStoreModal = showVisitStoreModal;



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
            if (sortValue === 'price-low') filtered.sort((a, b) => a.price - b.price);
            else if (sortValue === 'price-high') filtered.sort((a, b) => b.price - a.price);
            else if (sortValue === 'new') filtered.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
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
                        <div class="product-price-section">
                            <span class="product-price">₹${product.price.toLocaleString()}</span>
                            <span class="product-tax">Incl of taxes</span>
                        </div>
                        <button class="btn-visit-store" onclick="showVisitStoreModal()" title="Visit Store to Purchase">
                            <i class="ph ph-storefront"></i> Buy In-Store
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
