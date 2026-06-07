"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

// ─── EASING OFICIAL DINTELL ──────────────────────────────────────────────────
const EASE_OUT_QUAD: [number, number, number, number] = [0, 0, 0.58, 1];
const EASE_IN_OUT_CUBIC: [number, number, number, number] = [0.37, 0, 0.63, 1];
const EASE_CLIP: [number, number, number, number] = [0.4, 0.6, 0.4, 1];

// ─── HERO STAGGER CONTAINER (Animação 1) ─────────────────────────────────────
export function HeroStagger({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={{ perspective: 1200, ...style }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

// ─── HERO STAGGER ITEM (filho do HeroStagger) ────────────────────────────────
export function HeroStaggerItem({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden:  { opacity: 0, scale: 1.05, rotateX: 30 },
        visible: {
          opacity: 1, scale: 1, rotateX: 0,
          transition: { duration: 0.8, ease: EASE_OUT_QUAD }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── FADE UP SCROLL (Animações 4, 13, 18) ────────────────────────────────────
export function FadeUpScroll({ children, delay = 0, distance = 30, className, style }: {
  children: ReactNode; delay?: number; distance?: number;
  className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_QUAD }}
    >
      {children}
    </motion.div>
  );
}

// ─── FADE ONLY SCROLL (Animação 19) ─────────────────────────────────────────
export function FadeScroll({ children, delay = 0, className, style }: {
  children: ReactNode; delay?: number;
  className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_QUAD }}
    >
      {children}
    </motion.div>
  );
}

// ─── STAGGER SCROLL CONTAINER (Animações 4, 13, 18) ─────────────────────────
export function StaggerScroll({ children, className, style, distance = 30 }: {
  children: ReactNode; className?: string;
  style?: React.CSSProperties; distance?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerScrollItem({ children, className, style, distance = 30 }: {
  children: ReactNode; className?: string;
  style?: React.CSSProperties; distance?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden:  { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_QUAD } }
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── HOVER LIFT CARD (Animação 7) ────────────────────────────────────────────
export function HoverLiftCard({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={{ willChange: 'transform', ...style }}
      whileHover={{ y: -3, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.35, ease: EASE_IN_OUT_CUBIC }}
    >
      {children}
    </motion.div>
  );
}

// ─── SWITCH TEXT BUTTON (Animação 8) ─────────────────────────────────────────
export function SwitchTextButton({
  text, href, className, style, primary = false
}: {
  text: string; href: string; className?: string;
  style?: React.CSSProperties; primary?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className={className}
      style={{ overflow: 'hidden', position: 'relative',
               display: 'inline-flex', alignItems: 'center', ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        animate={{ y: hovered ? '-200%' : '0%' }}
        transition={{ duration: 0.85, ease: [0.15, 0.85, 0.31, 1] }}
        style={{ display: 'block' }}
      >
        {text}
      </motion.span>
      <motion.span
        style={{
          position: 'absolute', left: '50%',
          transform: 'translateX(-50%)', whiteSpace: 'nowrap',
        }}
        animate={{ y: hovered ? '0%' : '100%', opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.8, opacity: { duration: 0.5, delay: hovered ? 0.1 : 0 } }}
      >
        {text}
      </motion.span>
    </a>
  );
}

// ─── HOVER SWITCH ICON BUTTON (Animação 9) ───────────────────────────────────
export function HoverIconButton({
  label, href, className, style
}: {
  label: string; href: string; className?: string; style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center',
               overflow: 'hidden', gap: 6, position: 'relative', ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        animate={{ x: hovered ? 6 : 0 }}
        transition={{ duration: 0.6, delay: hovered ? 0.1 : 0, ease: [0.1, 0.75, 0.25, 1] }}
      >
        {label}
      </motion.span>
      <motion.span
        animate={{ x: hovered ? 10 : 0, opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.6, delay: hovered ? 0 : 0.25 }}
      >→</motion.span>
      <motion.span
        style={{ position: 'absolute', right: 0 }}
        animate={{ x: hovered ? 0 : -10, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.6, delay: hovered ? 0.225 : 0 }}
      >→</motion.span>
    </a>
  );
}

// ─── CLIENT LOGO HOVER (Animação 12) ─────────────────────────────────────────
export function ClientLogo({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={{ cursor: 'default', ...style }}
      initial={{ opacity: 0.5 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// ─── HIGHLIGHT TEXT CLIP-PATH (Animação 15) ──────────────────────────────────
export function HighlightReveal({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <span ref={ref} className={className}
      style={{ position: 'relative', display: 'inline-block', ...style }}>
      {children}
      <motion.span
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
        transition={{ duration: 1, ease: EASE_CLIP }}
        style={{
          position: 'absolute', bottom: -4, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #2563EB, #00059B)',
          borderRadius: 2,
        }}
      />
    </span>
  );
}

// ─── SCROLL PROGRESS INDICATOR (Animação 3) ──────────────────────────────────
export function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      style={{
        opacity,
        position: 'fixed', right: 24, top: '50%',
        transform: 'translateY(-50%)', zIndex: 50,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 8,
        mixBlendMode: 'difference',
        pointerEvents: 'none',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 10,
        color: '#fff', letterSpacing: '0.1em',
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        opacity: 0.6,
      }}>Scroll</span>
      <div style={{
        width: 1, height: 60,
        background: 'rgba(255,255,255,0.15)',
        position: 'relative', borderRadius: 1,
      }}>
        <motion.div style={{
          width: 1, background: '#fff',
          position: 'absolute', top: 0, borderRadius: 1,
          height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
        }} />
      </div>
    </motion.div>
  );
}

// ─── PROGRESS BAR (Animação 5) ───────────────────────────────────────────────
export function AnimatedProgressBar({ value, label, color = 'var(--kl-blue-bright)' }: {
  value: number; label: string; color?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ marginBottom: '1.2rem' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginBottom: '0.4rem',
        fontFamily: 'var(--font-body)', fontSize: '0.78rem',
        color: 'var(--kl-silver)',
      }}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div style={{
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 50, height: 6, overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{ height: '100%', background: color, borderRadius: 50 }}
        />
      </div>
    </div>
  );
}

export function AnimateOnScroll({ children, delay = 0, className, style }: Props) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateStagger({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateStaggerItem({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
