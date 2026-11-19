import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Phone, Mail, MapPin, ShieldCheck, Plus, Minus } from 'lucide-react';
import './styles.css';

const services = [
  { n: '01', title: 'Penyediaan tenaga kerja', text: 'Penyediaan jasa tenaga kerja sesuai kebutuhan mitra, hingga level supervisor.' },
  { n: '02', title: 'Mekanikal & fabrikasi', text: 'Pekerjaan fabrikasi, replace, install, dan modifikasi spareparts.' },
  { n: '03', title: 'Pengadaan barang', text: 'Dukungan pengadaan material dan kebutuhan operasional industri.' },
];
const goods = ['Drum Belt Conveyor', 'Bearing', 'Pipe', 'Plate', 'Fire & Safety', 'Safety equipment', 'Tools (Peralatan)', 'Spareparts'];
const missions = [
  'Membangun bisnis dan aset produktif secara terintegrasi guna memberikan manfaat dan pelayanan yang luas kepada masyarakat, bangsa, dan negara.',
  'Memperhatikan keselamatan kerja dan kelestarian lingkungan.',
  'Membina kemampuan sumber daya manusia, berinovasi, dan membangun jaringan yang kuat.',
  'Meningkatkan mutu pelayanan di bidang mekanikal dan penyediaan jasa tenaga kerja.',
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);
  return <header className="header"><a className="brand" href="#top" onClick={close}><img className="logo-image" src="/afwan-logo.png" alt="Logo Afwan Jaya Mandiri"/><span className="brand-name">AFWAN JAYA<br/>MANDIRI</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Buka navigasi">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav open' : 'nav'}><a href="#tentang" onClick={close}>Tentang</a><a href="#layanan" onClick={close}>Layanan</a><a href="#legalitas" onClick={close}>Legalitas</a><a href="#kontak" onClick={close}>Kontak</a><a className="nav-cta" href="mailto:afwan.jayamandiri@gmail.com">Hubungi kami <ArrowUpRight size={15}/></a></nav>
  </header>
}

function SectionLabel({ n, children, light=false }) { return <div className={`section-label ${light?'light':''}`}><span>{n}</span><i></i><span>{children}</span></div> }

function App() {
  return <><Header/><main id="top">
    <section className="hero">
      <div className="hero-top"><span>PROFIL PERUSAHAAN</span><span>ACEH BESAR · EST. 2008</span></div>
      <div className="hero-copy"><p className="eyebrow">Mitra untuk kebutuhan industri</p><h1>Kerja nyata.<br/><em>Terpercaya.</em></h1><p className="hero-sub">Kontraktor <b>—</b> Leveransir <b>—</b> Supply Labour</p>
        <div className="hero-actions"><a className="button button-light" href="#tentang">Jelajahi profil <ArrowDown size={16}/></a><a className="text-link light-link" href="#kontak">Hubungi kami <ArrowUpRight size={16}/></a></div>
      </div>
      <div className="hero-bottom"><span>PT. AFWAN JAYA MANDIRI</span><span className="hero-note">Menghubungkan kebutuhan<br/>dengan solusi yang tepat.</span><span className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14}/></span></div>
    </section>

    <section className="intro section-pad" id="tentang"><SectionLabel n="01">TENTANG KAMI</SectionLabel><div className="intro-grid"><div><h2>Mitra yang tumbuh<br/>bersama <span>industri.</span></h2><p className="lead">PT. Afwan Jaya Mandiri bergerak di bidang penyediaan jasa ketenagakerjaan, leveransir, fabrikasi, dan supplier.</p></div><div className="intro-body"><p>Didirikan pada 2008, kami melayani perusahaan menengah dan besar, baik swasta maupun pemerintahan. Kami berupaya menyediakan solusi bisnis yang inovatif dengan mengutamakan mutu dan kepercayaan untuk hubungan kerja yang harmonis dan berkelanjutan.</p><p>Fokus kami mencakup penyediaan tenaga kerja, leveransir, fabrikasi, serta supplier hingga level supervisor, mengikuti kebutuhan mitra.</p><a className="text-link" href="#visi">Kenali prinsip kami <ArrowRight size={16}/></a></div></div>
      <div className="intro-strip"><div><span className="mono">01 / BERDIRI</span><strong>2008</strong><small>Akta pendirian 16 Desember 2008</small></div><div><span className="mono">02 / JANGKAUAN</span><strong>Swasta &<br/>Pemerintahan</strong><small>Mitra perusahaan menengah dan besar</small></div><div className="strip-note"><span className="mono">DIDUKUNG OLEH</span><p>PT Solusi Bangun Andalas</p><small>Perusahaan milik PT Semen Indonesia di bawah kendali PT Solusi Bangun Indonesia (Tbk).</small></div></div>
    </section>

    <section className="principles" id="visi"><div className="principles-head"><SectionLabel n="02" light>ARAH & NILAI</SectionLabel><h2>Jelas dalam tujuan.<br/><em>Kuat dalam tanggung jawab.</em></h2></div><div className="principles-grid"><div className="vision"><span className="mono">VISI KAMI</span><p>Menjadi Perusahaan Yang Berkembang dan Bermanfaat untuk Memenuhi Kebutuhan Mitra kami</p><div className="value-tag"><span>NILAI KAMI</span><strong>Cepat, Tanggap<br/>dan Penuh Tanggung Jawab</strong></div></div><div className="mission"><span className="mono">MISI KAMI</span>{missions.map((m,i)=><div className="mission-row" key={m}><span>0{i+1}</span><p>{m}</p></div>)}</div></div></section>

    <section className="services section-pad" id="layanan"><SectionLabel n="03">BIDANG PELAYANAN</SectionLabel><div className="services-heading"><h2>Dukungan operasional,<br/><span>dari tenaga hingga material.</span></h2><p>Kami melayani kebutuhan mitra melalui jasa kontrak dan pengadaan barang untuk kegiatan industri.</p></div><div className="service-list">{services.map(s=><article className="service-item" key={s.n}><span className="service-no">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><ArrowUpRight className="service-arrow" size={20}/></article>)}</div>
      <div className="goods-block"><div className="goods-title"><span className="mono">PENGADAAN BARANG</span><h3>Material &<br/>perlengkapan</h3></div><div className="goods-grid">{goods.map((g,i)=><div className="goods-item" key={g}><span>0{i+1}</span>{g}<ArrowUpRight size={14}/></div>)}</div></div>
    </section>

    <section className="legal section-pad" id="legalitas"><SectionLabel n="04" light>LEGALITAS & IDENTITAS</SectionLabel><div className="legal-heading"><h2>Siap bekerja<br/>dengan <em>tertib.</em></h2><p>Administrasi perusahaan, perpajakan, dan informasi kantor.</p></div><div className="legal-grid"><article className="legal-panel"><span className="mono">01 / DOKUMEN PERUSAHAAN</span><h3>Legalitas perusahaan</h3><ul><li>Akte Notaris</li><li>Surat Ijin Usaha Perdagangan</li><li>Tanda Daftar Perusahaan</li></ul></article><article className="legal-panel"><span className="mono">02 / PERPAJAKAN</span><h3>Data perpajakan</h3><dl><div><dt>NPWP</dt><dd>70.256.967.4-101.000</dd></div><div><dt>Surat Keterangan Terdaftar</dt><dd>PEM-17284/WPJ.25/KP.0103/2009</dd></div><div><dt>Pengukuhan PKP</dt><dd>PEM-11244/WPJ.25/KP.0103/2012</dd></div></dl></article><article className="legal-panel bank"><span className="mono">03 / PERBANKAN</span><h3>Bank Syariah Indonesia</h3><p>Kantor Banda Aceh<br/>Jalan Teungku Daud Beureueh No. 15, Banda Aceh</p><div className="account"><span>Nomor rekening</span><strong>1806190008</strong><small>Atas nama PT. Afwan Jaya Mandiri</small></div></article></div></section>

    <section className="safety section-pad"><div className="safety-mark"><ShieldCheck size={28}/><span className="mono">KESELAMATAN KERJA</span></div><div className="safety-content"><SectionLabel n="05">PERLINDUNGAN KARYAWAN</SectionLabel><h2>Orang adalah bagian<br/>penting dari <em>setiap pekerjaan.</em></h2><p>Setiap karyawan di lingkungan PT. Afwan Jaya Mandiri akan diikutsertakan dalam program Asuransi Kecelakaan Diri BPJS Ketenagakerjaan dan Asuransi Kesehatan di BPJS Kesehatan.</p></div></section>

    <section className="contact" id="kontak"><div className="contact-top"><SectionLabel n="06" light>HUBUNGI KAMI</SectionLabel><span className="mono">ACEH BESAR, INDONESIA</span></div><div className="contact-main"><h2>Mari mulai<br/><em>percakapan.</em></h2><a className="contact-button" href="mailto:afwan.jayamandiri@gmail.com">Hubungi perusahaan <ArrowUpRight/></a></div><div className="contact-info"><a href="tel:+628116877740"><Phone size={16}/><span><small>TELEPON</small>+628116877740</span><ArrowUpRight size={15}/></a><a href="mailto:afwan.jayamandiri@gmail.com"><Mail size={16}/><span><small>EMAIL</small>afwan.jayamandiri@gmail.com</span><ArrowUpRight size={15}/></a><div><MapPin size={16}/><span><small>ALAMAT PERUSAHAAN & WORKSHOP</small>Jl. Banda Aceh Meulaboh KM. 13 Gampong Lamkruet, Kecamatan Lhoknga, Kabupaten Aceh Besar</span></div></div><div className="signoff"><span>Aceh Besar, 18 Oktober 2025</span><span>PT. Afwan Jaya Mandiri</span><strong>Afwan Rizal</strong><small>Direktur Utama</small></div></section>
  </main><footer><a className="footer-brand" href="#top" aria-label="Kembali ke atas"><img src="/afwan-logo.png" alt="Logo Afwan Jaya Mandiri"/></a><span>PT. AFWAN JAYA MANDIRI</span><span>KONTRAKTOR · LEVERANSIR · SUPPLY LABOUR</span><a href="#top">KEMBALI KE ATAS ↑</a></footer></>;
}

createRoot(document.getElementById('root')).render(<App/>);
