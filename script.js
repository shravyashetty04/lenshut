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

        qvContent.innerHTML = `
            <div class="qv-grid">
                <div class="qv-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="qv-details">
                    <p class="product-category">${product.category}</p>
                    <h3>${product.name}</h3>
                    <div class="qv-price">₹${product.price}</div>
                    <p>Experience superior comfort and style with the ${product.name}. Premium materials and expert craftsmanship make these the perfect everyday pair.</p>
                    
                    <div style="margin-top: 2rem;">
                        <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                    <div style="margin-top: 1rem;">
                        <button class="btn btn-outline w-100" onclick="alert('Added to wishlist!')"><i class="ph ph-heart"></i> Add to Wishlist</button>
                    </div>
                </div>
            </div>
        `;
        
        qvOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.addToCart = (productId) => {
        // Simple mock cart interaction
        const countSpan = document.querySelector('.cart-count');
        let count = parseInt(countSpan.textContent);
        countSpan.textContent = count + 1;
        
        const emptyMsg = document.querySelector('.empty-cart-msg');
        if(emptyMsg) emptyMsg.style.display = 'none';
        
        closeQuickView();
        toggleCart();
    };


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

    function renderShop(productsToRender) {
        if (!productGrid) return;
        
        if (productsToRender.length === 0) {
            productGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem;">No products match your criteria.</div>';
            countDisplay.textContent = '0';
            return;
        }

        let html = '';
        productsToRender.forEach(p => {
            html += generateProductCardHTML(p);
        });
        productGrid.innerHTML = html;
        countDisplay.textContent = productsToRender.length;
    }

    function filterAndSortProducts() {
        let filtered = [...products];

        // Gather active filters
        const activeFilters = {
            category: [],
            shape: [],
            gender: []
        };

        filterCheckboxes.forEach(cb => {
            if (cb.checked) {
                const type = cb.dataset.filter;
                activeFilters[type].push(cb.value);
            }
        });

        // Apply filters
        if (activeFilters.category.length > 0) {
            filtered = filtered.filter(p => activeFilters.category.includes(p.category));
        }
        if (activeFilters.shape.length > 0) {
            filtered = filtered.filter(p => activeFilters.shape.includes(p.shape));
        }
        if (activeFilters.gender.length > 0) {
            // Note: Unisex is treated as both men and women in real-world, but for this mock we just exact match
            filtered = filtered.filter(p => activeFilters.gender.includes(p.gender));
        }

        // Apply sort
        const sortValue = sortSelect.value;
        if (sortValue === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'new') {
            filtered.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        }

        renderShop(filtered);
    }

    // Event Listeners for Filters
    if (filterCheckboxes.length > 0) {
        filterCheckboxes.forEach(cb => {
            cb.addEventListener('change', filterAndSortProducts);
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndSortProducts);
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            filterCheckboxes.forEach(cb => cb.checked = false);
            filterAndSortProducts();
        });
    }

    // Initial render
    if (productGrid && typeof products !== 'undefined') {
        renderShop(products);
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
                <div class="product-img-wrap">
                    <img src="${product.image}" alt="${product.name}" class="primary-img">
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-title" title="${product.desc}">${displayDesc}</h3>
                    <p class="product-size">Size: ${product.size}</p>
                    
                    <div class="product-footer">
                        <div class="product-price-section">
                            <span class="product-price">₹${product.price.toLocaleString()}</span>
                            <span class="product-tax">Incl of taxes</span>
                        </div>
                        <div class="product-actions">
                            <button class="action-circle" title="Wishlist"><i class="ph ph-heart"></i></button>
                            <button class="action-circle" title="Quick View" onclick="openQuickView(${product.id})"><i class="ph ph-squares-four"></i></button>
                        </div>
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
