/**
 * Renders a standard product card.
 * @param {Object} product - The product object.
 * @returns {string} HTML string for the card.
 */
function createProductCard(product) {
    const isAvailable = true; // Default for now

    // Generate Sizes HTML
    let sizesHtml = '';
    if (product.sizes && product.sizes.length > 0) {
        sizesHtml = `
        <div style="margin-top: auto; font-size: 0.85rem; color: var(--text-2);">
            <strong>Sizes:</strong> <br>
            ${product.sizes.map(s => `<span>${s}</span>`).join('<br>')}
        </div>`;
    }

    // Determine CTA
    // P0 FIX: Strict URL construction
    const pdpUrl = `/product.html?id=${product.id}`;
    const quoteUrl = `/contact.html?product=${encodeURIComponent(product.name)}`;

    return `
    <article class="card product-card" data-category="${product.category}">
        <a href="${pdpUrl}" class="product-media">
            <img src="${product.image}" alt="${product.imageAlt}" loading="lazy">
            ${isAvailable ? `<span class="badge badge--available" style="position: absolute; top: 12px; right: 12px;">Available</span>` : ''}
        </a>
        <div class="card__content">
            <h3><a href="${pdpUrl}" style="text-decoration: none; color: inherit;">${product.name}</a></h3>
            <p>${product.description}</p>
            ${sizesHtml}
        </div>
        <div class="card__footer" style="display: flex; gap: 8px;">
            <a href="${quoteUrl}" class="btn btn-primary" style="flex: 1; text-align: center; font-size: 0.9rem;">Request Quote</a>
            <a href="${pdpUrl}" class="btn btn-outline" style="padding: 8px 12px;">View</a>
        </div>
    </article>
    `;
}

export function renderCatalog(products) {
    // 1. Render Phase 1 (Wound Care)
    const phase1Container = document.getElementById('products-phase1');
    if (phase1Container) {
        const p1 = products.filter(p => p.category === 'phase1');
        phase1Container.innerHTML = p1.map(createProductCard).join('');
    }

    // 2. Render Phase 2 (Wellness)
    const phase2Container = document.getElementById('products-phase2');
    if (phase2Container) {
        const p2 = products.filter(p => p.category === 'phase2');
        phase2Container.innerHTML = p2.map(createProductCard).join('');
    }

    // 3. Render Phase 3 (Ostomy)
    const phase3Container = document.getElementById('products-phase3');
    if (phase3Container) {
        const p3 = products.filter(p => p.category === 'phase3');
        phase3Container.innerHTML = p3.map(createProductCard).join('');
    }

    // 4. Render Phase 4 (Ostomy Accessories)
    const phase4Container = document.getElementById('products-phase4');
    if (phase4Container) {
        const p4 = products.filter(p => p.category === 'phase4');
        phase4Container.innerHTML = p4.map(createProductCard).join('');
    }

    // Integrity Check
    products.forEach(p => {
        if (p.isPlaceholder) {
            console.warn(`[Image Integrity] Product "${p.name}" uses a placeholder.`);
        }
        if (!p.imageAlt) {
            console.error(`[Image Integrity] Product "${p.name}" is missing alt text!`);
        }
    });
}
