const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const CONFERENCE = 'powereng';

const api = async (path, options = {}) => {
    const res = await fetch(`${API_BASE}${path}`, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
    });
    if (!res.ok) throw new Error(`API error ${res.status}: ${res.statusText}`);
    return res.json();
};

// ── Content ───────────────────────────────────────────────────────
// Backend: GET /api/content/:key?conference=powereng  →  returns data object directly
export const fetchContent = (key) =>
    api(`/content/${key}?conference=${CONFERENCE}`);

// ── Speakers ──────────────────────────────────────────────────────
export const fetchSpeakers = () =>
    api(`/speakers?conference=${CONFERENCE}`);

// ── Sponsors / Media Partners ─────────────────────────────────────
export const fetchSponsors = () =>
    api(`/sponsors?conference=${CONFERENCE}`);

// ── Abstract Submission ───────────────────────────────────────────
export const submitAbstract = (data) =>
    api(`/abstracts`, {
        method: 'POST',
        body: JSON.stringify({ ...data, conference: CONFERENCE }),
    });

// ── Registration ──────────────────────────────────────────────────
export const submitRegistration = (data) =>
    api(`/registrations`, {
        method: 'POST',
        body: JSON.stringify({ ...data, conference: CONFERENCE }),
    });

// ── Discount / Coupon ─────────────────────────────────────────────
export const validateDiscount = (code) =>
    api(`/discounts/validate`, {
        method: 'POST',
        body: JSON.stringify({ coupon: code, conference: CONFERENCE }),
    });

// ── Payment ───────────────────────────────────────────────────────
export const fetchPaymentKey = () =>
    api(`/payment/key`);

export const createPaymentOrder = (data) =>
    api(`/payment/create-order`, {
        method: 'POST',
        body: JSON.stringify({ ...data, conference: CONFERENCE }),
    });

export const verifyPayment = (data) =>
    api(`/payment/verify`, {
        method: 'POST',
        body: JSON.stringify({ ...data, conference: CONFERENCE }),
    });

// ── Unsubscribe ───────────────────────────────────────────────────
export const unsubscribeEmail = (email) =>
    api(`/registrations/unsubscribe`, {
        method: 'POST',
        body: JSON.stringify({ email, conference: CONFERENCE }),
    });

// ── Stats ─────────────────────────────────────────────────────────
export const fetchStats = () =>
    api(`/stats?conference=${CONFERENCE}`);
