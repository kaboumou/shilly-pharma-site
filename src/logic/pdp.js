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
                <div style="background: white; padding: 40px; border-radius: var(--radius-lg); border: 1px solid var(--border-1);">
                    <img src="${product.image}" alt="${product.imageAlt}" style="width: 100%; height: auto; object-fit: contain;">
                </div>
                <div>
                    <span class="badge badge--available" style="margin-bottom: 16px;">Available Now</span>
                    <h1 style="color: var(--brand-primary); margin-bottom: 16px;">${product.name}</h1>
                    <p class="text-large" style="font-size: 1.2rem; color: var(--text-2); margin-bottom: 32px;">
                        ${product.description}
                    </p>
                    
                    <div style="background: var(--surface-inset); padding: 24px; border-radius: var(--radius-md);">
                        <h3 style="margin-bottom: 16px;">Product Highlights</h3>
                        <ul class="check-list" style="margin-bottom: 0;">
                            <li>Medical-grade quality assurance</li>
                            <li>Sourced from trusted manufacturers</li>
                            <li>Available for diverse clinical needs</li>
                        </ul>
                    </div>

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
        `;
    }
}
