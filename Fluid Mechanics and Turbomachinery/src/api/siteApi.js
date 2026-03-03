// API service for Fluid Mechanics & Turbomachinery 2026 website
// Fetches live data from the shared dashboard backend (port 5000)

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const CONFERENCE = 'fluid';

async function get(endpoint) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`);
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    } catch (e) {
        console.warn(`[SiteAPI-Fluid] Failed to fetch ${endpoint}:`, e.message);
        return null;
    }
}

// Get a single content block by key (e.g. 'hero', 'about', etc.)
export const fetchContent = (key) => get(`/content/${key}?conference=${CONFERENCE}`);

// Get all content blocks at once
export const fetchAllContent = () => get(`/content?conference=${CONFERENCE}`);

// Speakers — uses public endpoint (visible only, sorted by order)
// Always pass conference=fluid so the backend filters correctly
export const fetchSpeakers = (category) =>
    get(`/speakers?conference=${CONFERENCE}${category ? `&category=${encodeURIComponent(category)}` : ''}`);

// Sponsors/Media partners — uses public endpoint (visible only)
export const fetchSponsors = (type) =>
    get(`/sponsors?conference=${CONFERENCE}${type ? `&type=${encodeURIComponent(type)}` : ''}`);

// Submit an abstract — always tags conference: 'fluid'
export async function submitAbstract(payload) {
    const res = await fetch(`${BASE_URL}/abstracts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, conference: CONFERENCE }),
    });
    if (!res.ok) throw new Error('Server error');
    return res.json();
}

// Upload an abstract file — returns { url, originalName }
export async function uploadAbstractFile(file) {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch(`${BASE_URL}/upload-file`, { method: 'POST', body: fd });
    if (!res.ok) throw new Error('Upload failed');
    return res.json();
}

// Submit registration — always tags conference: 'fluid'
export async function submitRegistration(payload) {
    const res = await fetch(`${BASE_URL}/registrations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, conference: CONFERENCE }),
    });
    if (!res.ok) throw new Error('Server error');
    return res.json();
}

// Validate a discount coupon code against the backend
// Returns: { valid: true, percentage, category, coupon } | { valid: false, message }
export async function validateDiscountCode(coupon) {
    try {
        const res = await fetch(`${BASE_URL}/discounts/validate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ coupon, conference: CONFERENCE }),
        });
        if (!res.ok) throw new Error('Server error');
        return res.json();
    } catch (e) {
        console.warn('[SiteAPI-Fluid] Discount validate failed:', e.message);
        return { valid: false, message: 'Could not reach server. Please try again.' };
    }
}

// ── Razorpay Payment Integration ─────────────────────────────────────────────

export async function getRazorpayKey() {
    try {
        const res = await fetch(`${BASE_URL}/payment/key`);
        if (!res.ok) throw new Error('Failed to fetch key');
        return res.json();
    } catch (e) {
        console.warn('[SiteAPI-Fluid] getRazorpayKey failed:', e.message);
        return null;
    }
}

export async function createPaymentOrder({ amount, currency = 'USD', registrationId, description }) {
    const res = await fetch(`${BASE_URL}/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency, registrationId, conference: CONFERENCE, description }),
    });
    if (!res.ok) throw new Error('Failed to create order');
    return res.json();
}

export async function verifyPayment({ razorpay_order_id, razorpay_payment_id, razorpay_signature, registrationId }) {
    const res = await fetch(`${BASE_URL}/payment/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ razorpay_order_id, razorpay_payment_id, razorpay_signature, registrationId }),
    });
    if (!res.ok) throw new Error('Verification failed');
    return res.json();
}
