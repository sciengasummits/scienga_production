import { Link } from 'react-router-dom'

export default function PageHeader({ title, breadcrumbs }) {
    return (
        <div style={{
            backgroundColor: '#3F51B5',
            color: 'white',
            padding: 'clamp(2rem, 10vw, 4rem) 0',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1 style={{
                fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: '0 0 1rem 0',
                padding: '0 1rem'
            }}>
                {title}
            </h1>
            <div style={{
                fontSize: '0.9rem',
                opacity: 0.9
            }}>
                {breadcrumbs.map((item, index) => (
                    <span key={index}>
                        {item.link ? (
                            <Link to={item.link} style={{ color: 'white', textDecoration: 'none' }}>{item.label}</Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                        {index < breadcrumbs.length - 1 && <span style={{ margin: '0 0.5rem' }}> &gt; </span>}
                    </span>
                ))}
            </div>
        </div>
    )
}
