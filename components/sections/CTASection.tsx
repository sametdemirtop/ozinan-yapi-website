'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import IstanbulSkylineSVG from './IstanbulSkyline';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="pt-20 bg-gradient-to-b from-[#dbeafe] via-[#e0f2fe] to-[#f0f9ff] relative overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-20 px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-white/80 backdrop-blur-sm text-primary font-bold px-6 py-2 rounded-full uppercase tracking-wider text-xs shadow-sm border border-primary/20"
        >
          {t('badge')}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight"
        >
          {t('title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold text-primary border-b-2 border-primary inline-block pb-1"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 mb-16 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="https://wa.me/905324533802?text=Merhaba,%20web%20sitenizden%20ulaşıyorum.%20Acil%20tesisat%20hizmeti%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href={`tel:${t('phone').replace(/\s/g, '')}`}
            className="inline-flex items-center gap-3 bg-primary text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {t('phone')}
          </a>
        </motion.div>
      </div>

      {/* İstanbul Silüeti + Deniz Dalgaları + Martılar - Mobilde Gizli */}
      <div className="w-full relative hidden md:flex flex-col justify-center items-center mt-8 min-h-[500px]">
        {/* Deniz Dalgaları Animasyonu (Arka Plan) */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <WaveAnimation />
        </div>
        
        {/* İstanbul Skyline - SVG ile özel tasarım */}
        <div className="relative z-10 w-full max-w-6xl px-4">
          <IstanbulSkylineSVG />
        </div>
        
        {/* Martılar - İstanbul Silüetinin Üstünde */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <GullsAnimation />
        </div>
      </div>
      
      {/* Mobil için basit dalga */}
      <div className="w-full md:hidden mt-8 h-32">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#5b8bb3"
            fillOpacity="0.8"
            d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </div>
    </section>
  );
}

// Kuşlar Animasyonu Component'i - Gerçekçi Martılar
function GullsAnimation() {
  const GullSVG = () => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sol Kanat */}
      <path
        d="M100 80 Q60 60, 30 70 Q40 75, 60 72 Q80 70, 100 80"
        fill="#34495e"
        stroke="#2c3e50"
        strokeWidth="2"
      />
      {/* Sağ Kanat */}
      <path
        d="M100 80 Q140 60, 170 70 Q160 75, 140 72 Q120 70, 100 80"
        fill="#34495e"
        stroke="#2c3e50"
        strokeWidth="2"
      />
      {/* Gövde */}
      <ellipse cx="100" cy="90" rx="12" ry="18" fill="#7f8c8d" />
      {/* Baş */}
      <circle cx="100" cy="75" r="10" fill="#95a5a6" />
      {/* Gaga */}
      <path d="M100 75 L95 80 L100 82 Z" fill="#f39c12" />
      {/* Göz */}
      <circle cx="102" cy="73" r="2" fill="#2c3e50" />
    </svg>
  );

  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className={`gull gull-${i}`}>
          <GullSVG />
        </div>
      ))}
    </>
  );
}

// Deniz Dalgaları Animasyonu Component'i - Daha Canlı ve Gerçekçi
function WaveAnimation() {
  return (
    <div className="w-full h-64 relative overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wave 1 - En alttaki dalga (koyu mavi) */}
        <motion.path
          fill="#5b8bb3"
          fillOpacity="0.9"
          d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,208C672,192,768,160,864,154.7C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
          animate={{
            d: [
              "M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,208C672,192,768,160,864,154.7C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
              "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,213.3C672,235,768,245,864,240C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
              "M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,208C672,192,768,160,864,154.7C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />
        
        {/* Wave 2 - Ortadaki dalga (orta mavi) */}
        <motion.path
          fill="#7ba5c9"
          fillOpacity="0.7"
          d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,240C672,245,768,235,864,218.7C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
          animate={{
            d: [
              "M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,240C672,245,768,235,864,218.7C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
              "M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,250.7C672,267,768,277,864,266.7C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
              "M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,240C672,245,768,235,864,218.7C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
        
        {/* Wave 3 - En üstteki dalga (açık mavi) */}
        <motion.path
          fill="#9bc0db"
          fillOpacity="0.5"
          d="M0,288L48,282.7C96,277,192,267,288,266.7C384,267,480,277,576,277.3C672,277,768,267,864,256C960,245,1056,235,1152,240C1248,245,1344,267,1392,277.3L1440,288L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
          animate={{
            d: [
              "M0,288L48,282.7C96,277,192,267,288,266.7C384,267,480,277,576,277.3C672,277,768,267,864,256C960,245,1056,235,1152,240C1248,245,1344,267,1392,277.3L1440,288L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
              "M0,320L48,309.3C96,299,192,277,288,277.3C384,277,480,299,576,304C672,309,768,299,864,282.7C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
              "M0,288L48,282.7C96,277,192,267,288,266.7C384,267,480,277,576,277.3C672,277,768,267,864,256C960,245,1056,235,1152,240C1248,245,1344,267,1392,277.3L1440,288L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: 1.6,
          }}
        />
        
        {/* Beyaz köpük efekti */}
        <motion.path
          fill="#ffffff"
          fillOpacity="0.4"
          d="M0,330L48,325.3C96,320,192,310,288,309.3C384,309,480,317,576,325.3C672,333,768,341,864,330.7C960,320,1056,290,1152,285.3C1248,280,1344,300,1392,310L1440,320L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
          animate={{
            d: [
              "M0,330L48,325.3C96,320,192,310,288,309.3C384,309,480,317,576,325.3C672,333,768,341,864,330.7C960,320,1056,290,1152,285.3C1248,280,1344,300,1392,310L1440,320L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
              "M0,350L48,340C96,330,192,310,288,314.7C384,320,480,350,576,360C672,370,768,360,864,345.3C960,330,1056,310,1152,309.3C1248,309,1344,330,1392,340L1440,350L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
              "M0,330L48,325.3C96,320,192,310,288,309.3C384,309,480,317,576,325.3C672,333,768,341,864,330.7C960,320,1056,290,1152,285.3C1248,280,1344,300,1392,310L1440,320L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </svg>
    </div>
  );
}

// İstanbul Silüeti Component'i artık kullanılmıyor (gerçek görsel kullanıyoruz)
// Ama eski fallback için bıraktım
function IstanbulSkyline() {
  return (
    <svg
      className="w-full max-w-5xl h-auto object-contain object-bottom relative z-0"
      viewBox="0 0 1200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified Istanbul skyline with iconic landmarks */}
      {/* Galata Tower */}
      <g opacity="0.9">
        <rect x="200" y="150" width="40" height="150" fill="#7a0004" />
        <polygon points="220,150 200,130 240,130" fill="#7a0004" />
      </g>

      {/* Kız Kulesi (Maiden's Tower) */}
      <g opacity="0.9">
        <rect x="500" y="180" width="30" height="120" fill="#7a0004" />
        <polygon points="515,180 500,165 530,165" fill="#7a0004" />
      </g>

      {/* Bridge */}
      <g opacity="0.8">
        <rect x="0" y="220" width="1200" height="8" fill="#7a0004" />
        <rect x="300" y="100" width="15" height="120" fill="#7a0004" />
        <rect x="700" y="100" width="15" height="120" fill="#7a0004" />
      </g>

      {/* Buildings */}
      <rect x="100" y="200" width="60" height="100" fill="#920407" opacity="0.7" />
      <rect x="320" y="180" width="50" height="120" fill="#920407" opacity="0.7" />
      <rect x="600" y="190" width="70" height="110" fill="#920407" opacity="0.7" />
      <rect x="800" y="200" width="55" height="100" fill="#920407" opacity="0.7" />
      <rect x="950" y="185" width="65" height="115" fill="#920407" opacity="0.7" />
    </svg>
  );
}
