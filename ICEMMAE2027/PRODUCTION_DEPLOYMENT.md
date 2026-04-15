# ICEMMAE2027 - Production Deployment Guide

## ✅ Conference Added to Production

The ICEMMAE2027 conference has been successfully added to the production conferences directory:

**Location:** `C:\Users\SAI\b\scienga_production\ICEMMAE2027`

## Production Directory Structure

```
scienga_production/
├── ICEMMAE2027/                    ← NEW CONFERENCE
├── LIUTEXSUMMIT2026/
├── CYBERQUANTUMSUMMIT2026/
├── FOODAGRISUMMIT2026/
├── POWERENGSUMMIT2026/
├── POLYMATSUMMIT2026/
├── RENEWABLECLISUMMIT2026/
├── ADVANCENANOSUMMIT2026/
├── AIROBOTMLSUMMIT2026/
├── ASTROSPACESUMMIT2026/
├── CIVILENVSUMMIT2026/
├── CLEANENGTECHSUMMIT2026/
├── CONDENSEDPHYSSUMMIT2026/
├── CROPSCIENGSUMMIT2026/
├── HEALTHMEDSUMMIT2026_GLOHEALTHSUMMIT2026/
├── OPTICPHOTONSUMMIT2026/
├── Fluid Mechanics and Turbomachinery/
└── SCIENGA-SUMMITS-MAIN/          ← Main landing page
```

## Pre-Deployment Checklist

### 1. Environment Configuration

Update `.env` file with production values:

```env
# MongoDB - Production Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/icemmae2027

# Email - Production SMTP
ICEMMAE2027_EMAIL=icemmae2027@sciengasummits.com
ICEMMAE2027_SMTP_USER=icemmae2027@sciengasummits.com
ICEMMAE2027_SMTP_PASS=actual_production_password

# Razorpay - LIVE Credentials
RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY
RAZORPAY_KEY_SECRET=your_live_secret_key
RAZORPAY_CURRENCY=EUR

# URLs - Production Domain
FRONTEND_URL=https://icemmae2027.sciengasummits.com/
BASE_URL=https://icemmae2027.sciengasummits.com/

# JWT Secret - Generate secure key
JWT_SECRET=generate_secure_random_string_here
```

### 2. Install Dependencies

```bash
cd C:\Users\SAI\b\scienga_production\ICEMMAE2027
npm install
```

### 3. Build for Production

```bash
npm run build
```

### 4. Test Production Build Locally

```bash
npm start
```

Visit: http://localhost:3000

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd C:\Users\SAI\b\scienga_production\ICEMMAE2027
   vercel
   ```

4. **Configure Environment Variables:**
   - Go to Vercel Dashboard
   - Select your project
   - Settings → Environment Variables
   - Add all variables from `.env`

5. **Set Custom Domain:**
   - Settings → Domains
   - Add: `icemmae2027.sciengasummits.com`
   - Configure DNS records as instructed

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   cd C:\Users\SAI\b\scienga_production\ICEMMAE2027
   netlify deploy --prod
   ```

4. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables in Netlify dashboard

### Option 3: Custom Server (VPS/Dedicated)

1. **Install Node.js on server** (v18 or higher)

2. **Upload files via FTP/SFTP or Git**

3. **Install dependencies:**
   ```bash
   npm install --production
   ```

4. **Build:**
   ```bash
   npm run build
   ```

5. **Run with PM2:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "icemmae2027" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx reverse proxy:**
   ```nginx
   server {
       listen 80;
       server_name icemmae2027.sciengasummits.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Install SSL certificate:**
   ```bash
   sudo certbot --nginx -d icemmae2027.sciengasummits.com
   ```

## DNS Configuration

### Add DNS Records:

**For Vercel:**
```
Type: CNAME
Name: icemmae2027
Value: cname.vercel-dns.com
```

**For Custom Server:**
```
Type: A
Name: icemmae2027
Value: YOUR_SERVER_IP
```

**For Email (if using custom domain):**
```
Type: MX
Priority: 10
Value: mail.sciengasummits.com
```

## Post-Deployment Verification

### 1. Test All Pages
- [ ] Home page loads
- [ ] Registration form works
- [ ] Payment processing works
- [ ] Abstract submission works
- [ ] Contact form works
- [ ] Newsletter subscription works
- [ ] All navigation links work

### 2. Test Payment System
- [ ] Razorpay modal opens
- [ ] Test payment with real card (small amount)
- [ ] Payment verification works
- [ ] Registration status updates
- [ ] Confirmation email sent

### 3. Test Email System
- [ ] Registration confirmation emails
- [ ] Abstract submission emails
- [ ] Contact form emails
- [ ] Newsletter subscription emails

### 4. Performance Check
- [ ] Page load speed < 3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Cross-browser compatible

### 5. SEO Check
- [ ] Meta tags present
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] Open Graph tags

## Monitoring & Maintenance

### 1. Set Up Monitoring

**Uptime Monitoring:**
- Use UptimeRobot or Pingdom
- Monitor: https://icemmae2027.sciengasummits.com
- Alert email: icemmae2027@sciengasummits.com

**Error Tracking:**
- Set up Sentry or similar
- Track JavaScript errors
- Monitor API failures

**Analytics:**
- Google Analytics
- Track registrations
- Monitor traffic sources

### 2. Regular Backups

**Database:**
- Daily MongoDB backups
- Store in secure location
- Test restore process

**Files:**
- Weekly full backup
- Version control with Git
- Store uploaded files separately

### 3. Security

**SSL Certificate:**
- Auto-renewal enabled
- Monitor expiration

**Dependencies:**
- Regular security updates
- `npm audit` monthly
- Update critical packages

**Access Control:**
- Strong passwords
- 2FA enabled
- Limited admin access

## Troubleshooting

### Issue: Build Fails

**Check:**
- Node.js version (v18+)
- All dependencies installed
- No syntax errors
- Environment variables set

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Payment Not Working

**Check:**
- Razorpay live keys configured
- HTTPS enabled
- No CORS errors
- Webhook configured

**Solution:**
- Verify keys in Razorpay dashboard
- Check browser console
- Review server logs

### Issue: Emails Not Sending

**Check:**
- SMTP credentials correct
- Port 587 not blocked
- Gmail app password (not regular password)
- Email quota not exceeded

**Solution:**
- Test with test-email.js script
- Check SMTP logs
- Verify firewall settings

### Issue: Database Connection Failed

**Check:**
- MongoDB URI correct
- IP whitelist configured
- Database user has permissions
- Network connectivity

**Solution:**
- Test connection string
- Check MongoDB Atlas dashboard
- Verify credentials

## Rollback Plan

If deployment fails:

1. **Keep previous version running**
2. **Identify issue from logs**
3. **Fix in development**
4. **Test thoroughly**
5. **Redeploy**

**Emergency Rollback:**
```bash
# Vercel
vercel rollback

# PM2
pm2 restart icemmae2027
```

## Support Contacts

**Technical Issues:**
- Email: icemmae2027@sciengasummits.com
- Check server logs
- Review error tracking

**Hosting Support:**
- Vercel: support@vercel.com
- Netlify: support@netlify.com

**Payment Issues:**
- Razorpay: +91-80-6890-6890
- Email: support@razorpay.com

## Production URLs

**Main Website:**
- https://icemmae2027.sciengasummits.com

**Admin Dashboard:**
- https://icemmae2027.sciengasummits.com/admin

**API Endpoints:**
- https://icemmae2027.sciengasummits.com/api/*

## Next Steps

1. ✅ Conference copied to production folder
2. ⏳ Update `.env` with production credentials
3. ⏳ Install dependencies (`npm install`)
4. ⏳ Build for production (`npm run build`)
5. ⏳ Deploy to hosting platform
6. ⏳ Configure DNS
7. ⏳ Test all functionality
8. ⏳ Set up monitoring
9. ⏳ Go live!

---

**Status:** Ready for Production Deployment
**Location:** `C:\Users\SAI\b\scienga_production\ICEMMAE2027`
**Last Updated:** January 2027
