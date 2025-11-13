import { useEffect, useRef } from 'react'
import { Menu, Map, Calendar, Landmark, BookOpen, Users, ChevronDown } from 'lucide-react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('opacity-0', 'translate-y-8')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-8')
            el.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

function Section({ id, icon: Icon, title, children }) {
  const ref = useReveal()
  return (
    <section id={id} className="py-16 md:py-24">
      <div
        ref={ref}
        className="container mx-auto px-6 md:px-10 max-w-5xl transition-all duration-700 ease-out opacity-0 translate-y-8"
      >
        <div className="flex items-center gap-3 mb-6">
          {Icon && (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
              <Icon size={20} />
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 tracking-tight">
            {title}
          </h2>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-100 shadow-sm p-6 md:p-8">
          {children}
        </div>
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-emerald-100">
      <div className="container mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-800 ring-2 ring-emerald-300/40" />
          <span className="font-extrabold tracking-tight text-emerald-900">
            Islam Tunisia
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-emerald-900/90">
          <a href="#masuk" className="hover:text-emerald-700 transition-colors">Masuknya</a>
          <a href="#jalur" className="hover:text-emerald-700 transition-colors">Tahun & Jalur</a>
          <a href="#proses" className="hover:text-emerald-700 transition-colors">Perkembangan</a>
          <a href="#peninggalan" className="hover:text-emerald-700 transition-colors">Peninggalan</a>
          <a href="#tokoh" className="hover:text-emerald-700 transition-colors">Tokoh</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-emerald-200 text-emerald-900">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="container mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Perkembangan Islam di Tunisia
        </h1>
        <p className="mt-4 md:mt-6 text-white/90 max-w-3xl mx-auto">
          Gambaran ringkas tentang bagaimana Islam masuk, menyebar, dan berkembang di tanah Tunisia, beserta peninggalan dan tokoh-tokoh pentingnya.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="#masuk" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-emerald-900 font-semibold px-5 py-3 shadow-lg hover:from-yellow-300 hover:to-yellow-400 transition-colors">
            Jelajahi
            <ChevronDown className="transition-transform group-hover:translate-y-0.5" size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-16 md:mt-24 border-t border-emerald-100 bg-emerald-50/50">
      <div className="container mx-auto max-w-6xl px-6 md:px-10 py-10 text-emerald-900/90">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold">Nama Kelompok:</p>
            <p className="opacity-90">Silakan isi nama anggota kelompok di sini.</p>
          </div>
          <div>
            <p className="font-semibold">Sumber Referensi:</p>
            <ul className="list-disc list-inside opacity-90">
              <li>Encyclopaedia of Islam, Brill</li>
              <li>Wikimedia Commons & Wikipedia (peta dan ringkasan sejarah)</li>
              <li>UNESCO World Heritage Centre: Medina of Tunis</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm opacity-70">© {new Date().getFullYear()} — Situs edukatif bertema sejarah Islam di Tunisia</p>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    // Smooth scroll for anchor links (fallback if browser setting off)
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id && id !== '#') {
        const el = document.querySelector(id)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-emerald-950">
      <Header />
      <Hero />

      {/* Section 1: Cara masuknya Islam ke Tunisia */}
      <Section id="masuk" icon={Map} title="Cara Masuknya Islam ke Tunisia">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="prose prose-emerald max-w-none">
            <p>
              Islam mulai masuk ke wilayah yang kini dikenal sebagai Tunisia pada abad ke-7 M, 
              terutama melalui ekspedisi pasukan Muslim dari Dinasti Umayyah. Pusat penting 
              penyebaran awal adalah kota <strong>Kairouan</strong> yang didirikan sekitar tahun 670 M 
              oleh <em>Uqbah ibn Nafi</em>. Kota ini menjadi markas militer sekaligus pusat dakwah dan ilmu.
            </p>
            <p>
              Dari basis tersebut, ajaran Islam menyebar melalui interaksi dagang, dakwah ulama, 
              dan integrasi administratif dengan komunitas lokal Berber dan penduduk kota-kota pesisir.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tunisia_%28orthographic_projection%29.svg/640px-Tunisia_%28orthographic_projection%29.svg.png"
              alt="Peta Tunisia"
              className="w-full rounded-xl border border-emerald-100 shadow-md"
              loading="lazy"
            />
            <p className="text-sm text-emerald-900/80 mt-2">Ilustrasi peta lokasi Tunisia di Afrika Utara.</p>
          </div>
        </div>
      </Section>

      {/* Section 2: Tahun dan jalur penyebaran */}
      <Section id="jalur" icon={Calendar} title="Tahun dan Jalur Penyebaran">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
            <p className="text-sm font-semibold text-yellow-800">c. 647–670 M</p>
            <p className="mt-1 text-emerald-950">Gelombang awal ekspedisi Muslim ke Ifriqiya; pendirian Kairouan.</p>
          </div>
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
            <p className="text-sm font-semibold text-yellow-800">abad 8–9 M</p>
            <p className="mt-1 text-emerald-950">Konsolidasi politik dan keagamaan; terbentuknya pusat ilmu dan fiqh Maliki.</p>
          </div>
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
            <p className="text-sm font-semibold text-yellow-800">jalur</p>
            <p className="mt-1 text-emerald-950">Melalui rute darat dari Mesir ke Kairouan, jaringan dagang pesisir, dan komunitas Berber pedalaman.</p>
          </div>
        </div>
      </Section>

      {/* Section 3: Proses perkembangan */}
      <Section id="proses" icon={BookOpen} title="Proses Perkembangan Islam di Tunisia">
        <ul className="grid md:grid-cols-2 gap-4 list-none">
          <li className="p-5 rounded-xl border border-emerald-100 bg-white">
            <p className="font-semibold">Institusi Keilmuan</p>
            <p className="text-emerald-900/90">Munculnya madrasah, masjid-agung, dan tradisi fiqh Maliki di Kairouan dan Tunis.</p>
          </li>
          <li className="p-5 rounded-xl border border-emerald-100 bg-white">
            <p className="font-semibold">Perdagangan & Kota Pesisir</p>
            <p className="text-emerald-900/90">Interaksi dengan pedagang Mediterania memperkuat jaringan sosial dan dakwah.</p>
          </li>
          <li className="p-5 rounded-xl border border-emerald-100 bg-white">
            <p className="font-semibold">Dinasti & Administrasi</p>
            <p className="text-emerald-900/90">Peran penguasa lokal dalam mengelola perpajakan, hukum, dan kebudayaan Islam.</p>
          </li>
          <li className="p-5 rounded-xl border border-emerald-100 bg-white">
            <p className="font-semibold">Kebudayaan & Seni</p>
            <p className="text-emerald-900/90">Arsitektur masjid, kaligrafi, dan karya ilmiah memperkaya identitas lokal.</p>
          </li>
        </ul>
      </Section>

      {/* Section 4: Peninggalan */}
      <Section id="peninggalan" icon={Landmark} title="Peninggalan-Peninggalan Islam yang Masih Ada">
        <div className="grid md:grid-cols-3 gap-6">
          <figure className="bg-white rounded-xl border border-emerald-100 overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Great_Mosque_of_Kairouan_Courtyard.jpg/640px-Great_Mosque_of_Kairouan_Courtyard.jpg"
              alt="Masjid Agung Kairouan"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <figcaption className="p-4">
              <p className="font-semibold">Masjid Agung Kairouan</p>
              <p className="text-sm text-emerald-900/80">Salah satu masjid tertua dan pusat ilmu di Afrika Utara.</p>
            </figcaption>
          </figure>
          <figure className="bg-white rounded-xl border border-emerald-100 overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Medina_of_Tunis.jpg/640px-Medina_of_Tunis.jpg"
              alt="Medina of Tunis"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <figcaption className="p-4">
              <p className="font-semibold">Medina of Tunis</p>
              <p className="text-sm text-emerald-900/80">Kawasan kota tua dengan jejak arsitektur dan budaya Islam.</p>
            </figcaption>
          </figure>
          <figure className="bg-white rounded-xl border border-emerald-100 overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zitouna_Mosque_Tunis.jpg/640px-Zitouna_Mosque_Tunis.jpg"
              alt="Masjid Zaytuna"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <figcaption className="p-4">
              <p className="font-semibold">Masjid Zaytuna</p>
              <p className="text-sm text-emerald-900/80">Pusat pendidikan klasik yang berpengaruh berabad-abad.</p>
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* Section 5: Tokoh-tokoh penting */}
      <Section id="tokoh" icon={Users} title="Tokoh-Tokoh Penting">
        <div className="grid md:grid-cols-3 gap-6">
          {[{ name: 'Uqbah ibn Nafi', desc: 'Pendiri Kairouan (c. 670 M).', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=60' },
            { name: 'Ibn Khaldun', desc: 'Sejarawan dan sosiolog kelahiran Tunis.', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=300&q=60' },
            { name: 'Imam Sahnun', desc: 'Ulama Maliki berpengaruh di Ifriqiya.', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=300&q=60' }].map((t, i) => (
            <div key={i} className="bg-white rounded-xl border border-emerald-100 overflow-hidden">
              <div className="h-40 w-full bg-emerald-50 relative">
                {t.img ? (
                  <img src={t.img} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-emerald-700">
                    <Users />
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-emerald-900/80">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  )
}
