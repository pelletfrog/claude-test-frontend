import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>2026 前端開發工作坊</h1>

        <section className={styles.info}>
          <p>歡迎參加本次工作坊！我們將帶您從零開始了解現代前端開發技術，涵蓋 HTML、CSS、JavaScript 以及 React 框架的基礎應用。</p>
          <ul>
            <li>日期：2026 年 8 月 8 日（六）</li>
            <li>時間：上午 10:00 – 下午 5:00</li>
            <li>地點：台北市信義區某會議室</li>
            <li>名額：限 30 人，額滿為止</li>
          </ul>
        </section>

        <hr className={styles.divider} />

        {submitted ? (
          <div className={styles.success}>
            <p>報名成功！我們會盡快發送確認信至 <strong>{form.email}</strong>，感謝 {form.name} 的報名。</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>活動報名</h2>

            <div className={styles.field}>
              <label htmlFor="name">姓名</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="請輸入您的姓名"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">電子郵件</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="請輸入您的 Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.button}>送出報名</button>
          </form>
        )}
      </div>
    </main>
  )
}
