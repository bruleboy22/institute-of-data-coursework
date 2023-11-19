import Link from 'next/link'
import styles from '../page.module.css'

export default function Dashboard() {
    return (
        <main className={styles.main}>
            <div className="About">
                <h1>Dashboard</h1>
                <p>This is the Dashboard.</p>
            </div>
        </main>
    )
}
