import { products } from '../data/products.js';

export function initPDP() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (!productId) return;

    const product = products.find(p => p.id === productId);

    if (!product) {
        document.body.innerHTML = "<div class='container' style='padding: 100px; text-align: center;'><h1>Product Not Found</h1><a href='/products.html'>Return to Catalog</a></div>";
        return;
    }

    // Update Page Title
    document.title = `${product.name} | Shilly Pharma`;

    // Render Content
    const container = document.getElementById('product-detail-container');
    if (container) {
        // Safe access to properties
        const sizesList = product.sizes && product.sizes.length
            ? `<div style="margin-top: 24px;">
                <strong>Available Sizes/Formats:</strong>
                <ul style="margin-top: 8px; color: var(--text-2);">
                    ${product.sizes.map(s => `<li>${s}</li>`).join('')}
                </ul>
               </div>`
            : '';

        container.innerHTML = `
            <div class="grid grid-2" style="align-items: start; gap: 40px;">
                <!-- Product Media (Carousel) -->
                <div>
                    <div class="carousel-container">
                        <div class="carousel-track" id="carousel-track">
                             ${renderCarouselSlides(product)}
                        </div>
                        ${renderCarouselNav(product)}
                    </div>
                     ${renderThumbnails(product)}
                </div>

                <!-- Product Info -->
                <div>
                    <span class="badge badge--available" style="margin-bottom: 16px;">Available Now</span>
                    <h1 style="color: var(--brand-primary); margin-bottom: 16px;">${product.name}</h1>
                    <p class="text-large" style="font-size: 1.2rem; color: var(--text-2); margin-bottom: 32px;">
                        ${product.description}
                    </p>
                    
                    ${(product.highlights && product.highlights.length > 0) || (!product.highlights && true) ? `
                    <div style="background: var(--surface-inset); padding: 24px; border-radius: var(--radius-md);">
                        <h3 style="margin-bottom: 16px;">Product Highlights</h3>
                        <ul class="check-list" style="margin-bottom: 0;">
                            ${product.highlights && product.highlights.length > 0
                    ? product.highlights.map(h => `<li>${h}</li>`).join('')
                    : `<li>Medical-grade quality assurance</li>
                                 <li>Sourced from trusted manufacturers</li>
                                 <li>Available for diverse clinical needs</li>`
                }
                        </ul>
                    </div>
                    ` : ''}

                    ${sizesList}

                    <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--border-1);">
                        <h3>Request a Quote</h3>
                        <p style="margin-bottom: 24px;">Interested in <strong>${product.name}</strong>? Fill out the form below or contact us directly.</p>
                        
                        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                             <a href="/contact.html?product=${encodeURIComponent(product.name)}" class="btn btn-primary" style="flex: 1; text-align: center;">Request Quote / Order</a>
                             <a href="https://wa.me/2347063252720" class="btn btn-outline" style="flex: 1; text-align: center;">Chat on WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Lightbox Container -->
            <div id="lightbox" class="lightbox">
                <button class="lightbox-close">&times;</button>
                <img id="lightbox-img" src="" alt="Full Screen View">
            </div>
        `;

        // Initialize Interactive Features
        initCarousel();
        initLightbox();
    }
}

function getAllImages(product) {
    const images = [product.image];
    if (product.secondaryImages) {
        images.push(...product.secondaryImages);
    }
    return images;
}

function renderCarouselSlides(product) {
    const images = getAllImages(product);
    return images.map((img, index) => `
        <div class="carousel-slide">
            ${typeof img === 'string'
            ? `<img src="${img}" alt="${product.name} - View ${index + 1}" data-index="${index}">`
            : `<video src="${img.src}" controls style="width: 100%; height: 100%; object-fit: contain;" data-index="${index}"></video>`
        }
        </div>
    `).join('');
}

function renderCarouselNav(product) {
    const images = getAllImages(product);
    if (images.length <= 1) return '';
    return `
        <button class="carousel-nav-btn prev" id="prev-btn">&#10094;</button>
        <button class="carousel-nav-btn next" id="next-btn">&#10095;</button>
    `;
}

function renderThumbnails(product) {
    const images = getAllImages(product);
    if (images.length <= 1) return '';

    return `
        <div class="carousel-thumbnails">
            ${images.map((img, index) => {
        const src = typeof img === 'string' ? img : img.thumbnail;
        const isVideo = typeof img !== 'string' && img.type === 'video';
        return `
                <div class="carousel-thumb-wrapper ${index === 0 ? 'active' : ''}" data-index="${index}" style="position: relative; display: inline-block;">
                    <img src="${src}" class="carousel-thumb" alt="Thumbnail ${index + 1}" style="display: block;">
                    ${isVideo ? '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; background: rgba(0,0,0,0.5); border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 14px;">▶</div>' : ''}
                </div>
                `;
    }).join('')}
        </div>
    `;
}

function initCarousel() {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const thumbs = document.querySelectorAll('.carousel-thumb');

    if (!track) return;

    // Button Navigation
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const slideWidth = track.clientWidth;
            track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            const slideWidth = track.clientWidth;
            track.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });
    }

    // Thumbnail Navigation
    const thumbWrappers = document.querySelectorAll('.carousel-thumb-wrapper');
    thumbWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            const index = parseInt(wrapper.getAttribute('data-index'));
            const slideWidth = track.clientWidth;
            track.scrollTo({ left: slideWidth * index, behavior: 'smooth' });

            // Update active state
            thumbWrappers.forEach(t => t.classList.remove('active'));
            wrapper.classList.add('active');
        });
    });

    // Update thumbnails on scroll
    track.addEventListener('scroll', () => {
        const slideWidth = track.clientWidth;
        const index = Math.round(track.scrollLeft / slideWidth);

        const thumbWrappers = document.querySelectorAll('.carousel-thumb-wrapper');
        thumbWrappers.forEach(t => t.classList.remove('active'));
        if (thumbWrappers[index]) thumbWrappers[index].classList.add('active');
    });
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const triggers = document.querySelectorAll('.carousel-slide img');

    if (!lightbox) return;

    triggers.forEach(img => {
        img.addEventListener('click', () => {
            // Only lightbox images, not videos
            if (img.tagName === 'IMG') {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}
