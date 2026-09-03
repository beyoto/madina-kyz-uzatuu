'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/invitation.css';

const BASE = process.env.NODE_ENV === 'production' ? '/madina-kyz-uzatuu' : '';

const TRANSLATIONS = {
  ky: {
    lang: 'Кырг',
    langAlt: 'Рус',
    introKicker: 'КЫЗ УЗАТУУ',
    introName: 'Мадина',
    introDate: '23.09.2026',
    introButton: 'Чакырууну ачуу',
    musicPlay: 'Музыканы коюу',
    musicPause: 'Музыканы өчүрүү',
    musicHint: 'музыканы коюу үчүн\nбасыңыз',
    heroName: 'Мадина',
    heroSubtitle: 'Кыз узатуу',
    messageHeading: 'Урматтуу биздин сыйлуу конокторубуз!',
    messageParagraph1:
      'Аздектеп кызды чоңойтуу — ата-эненин парзы экен,',
    messageParagraph2:
      'бой жетсе кызды узатуу — эзелтен келген салт экен.',
    messageParagraph3:
      'Сиздерди кызыбыз Мадинанын кыз узатуу аземине арналган салтанаттуу ак дасторкон үстүндө кадырлуу коногубуз болуп, ак батаңыздарды берип кетүүгө чакырабыз!',
    messageLead: 'Сиздерди сүйүктүү',
    messageBride: 'Мадина',
    messageBody: 'кызыбыздын узатуу тоюна арналган салтанаттуу ак дасторконубуздун кадырлуу коногу болууга чакырабыз!',
    messageRegards: 'Урматтоо менен,',
    messageHosts: 'Шайлообек менен Надира',
    dateHeading: 'Той өтө турган күн',
    calendarMonth: 'Сентябрь',
    calendarYear: '2026',
    calendarCaption: '23-сентябрь, 2026-жыл',
    calendarDays: ['Дш', 'Шш', 'Шр', 'Бш', 'Жм', 'Иш', 'Жк'],
    calendarTimeLabel: 'Саат:',
    calendarTime: '16:00',
    venueHeading: 'Той өтө турган жер:',
    venueName: '«Ырыскы» рестораны',
    venueAddress: 'Бишкек шаары,\Фрунзе көчөсү, 160',
    mapLinkLabel: 'Даректи Google Картадан жаңы өтмөктө ачуу',
    mapLinkHint: 'картаны ачуу үчүн\nбасыңыз',
    scheduleHeading: 'Тойдун\nпрограммасы',
    scheduleItems: [
      { time: '17:00', title: 'Конокторду тосуу' },
      { time: '18:00', title: 'Тойдун башталышы' },
      { time: '20:30', title: 'Кызды узатуу' },
    ],
    countdownHeading: 'Тойго саналуу\nкүндөр калды!',
    countdownLabels: ['күн', 'саат', 'мүнөт', 'секунд'],
    dresscodeHeading: 'Кийим үлгүсү',
    dresscodeNote: 'Сиздерди пудра, беж жана сүт түстөрүндөгү кийимде көрсөк кубанабыз',
    dresscodeSwatches: [
      { src: `${BASE}/_next/image?url=%2Fassets%2Fimages%2Fswatch-rose.webp&w=384&q=75`, alt: 'пудра-кызгылт' },
      { src: `${BASE}/_next/image?url=%2Fassets%2Fimages%2Fswatch-champagne.webp&w=384&q=75`, alt: 'шампан' },
      { src: `${BASE}/_next/image?url=%2Fassets%2Fimages%2Fswatch-ivory.webp&w=384&q=75`, alt: 'сүт түсү' },
    ],
    // rsvpHeading: 'Конок анкетасы',
    // rsvpSubtitle: 'Сураныч, той күнүнө чейин жооп бериңиз',
    // rsvpNameLabel: 'Атыңыз',
    // rsvpNamePlaceholder: 'Аты-жөнүңүз',
    rsvpHeading: 'Тойго катыша аласызбы?',
    rsvpSubtitle: 'Сураныч, той күнүнө чейин жооп бериңиз',
    rsvpNameLabel: 'Атыңыз',
    rsvpNamePlaceholder: 'Аты-жөнүңүз',
    rsvpAttendLabel: 'Тойго катыша аласызбы?',
    rsvpOptions: [
      { value: 'yes', label: 'Албетте, катышам' },
      { value: 'no', label: 'Тилекке каршы, катыша албайм' },
    ],
    rsvpGuestCountLabel: 'Адамдын саны',
    rsvpSubmit: 'Жөнөтүү',           // текст кнопки отправки

  },
  ru: {
    lang: 'Рус',
    langAlt: 'Кырг',
    introKicker: 'КЫЗ УЗАТУУ',
    introName: 'Мадина',
    introDate: '19.09.2026',
    introButton: 'Открыть приглашение',
    musicPlay: 'Включить музыку',
    musicPause: 'Выключить музыку',
    musicHint: 'нажмите, чтобы\nвключить музыку',
    heroName: 'Мадина',
    heroSubtitle: 'Кыз узатуу',
    messageHeading: 'Урматтуу биздин сыйлуу конокторубуз!',
    messageParagraph1:
      'Аздектеп кызды чоңойтуу — ата-эненин парзы экен,',
    messageParagraph2:
      'бой жетсе кызды узатуу — эзелтен келген салт экен.',
    messageParagraph3:
      'Сиздерди кызыбыз Мадинанын кыз узатуу аземине арналган салтанаттуу ак дасторкон үстүндө кадырлуу коногубуз болуп, ак батаңыздарды берип кетүүгө чакырабыз!',
    messageLead: 'Приглашаем вас на',
    messageBride: 'Мадина',
    messageBody: 'торжественное мероприятие по случаю проводов нашей любимой дочери!',
    messageRegards: 'С уважением,',
    messageHosts: 'Шайлообек Надира',
    dateHeading: 'Дата торжества',
    calendarMonth: 'Сентябрь',
    calendarYear: '2026',
    calendarCaption: '19 сентября, 2026',
    calendarDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    calendarTimeLabel: 'Время:',
    calendarTime: '16:00',
    venueHeading: 'Место проведения:',
    venueName: 'Ресторан «Ырыскы»',
    venueAddress: 'г. Бишкек,\nул. Фрунзе, 160',
    mapLinkLabel: 'Открыть адрес в Google Картах',
    mapLinkHint: 'нажмите, чтобы\nоткрыть карту',
    scheduleHeading: 'Программа\nторжества',
    scheduleItems: [
      { time: '17:00', title: 'Встреча гостей' },
      { time: '18:00', title: 'Начало торжества' },
      { time: '20:30', title: 'Проводы невесты' },
    ],
    countdownHeading: 'До торжества\nосталось!',
    countdownLabels: ['дней', 'часов', 'минут', 'секунд'],
    dresscodeHeading: 'Дресс-код',
    dresscodeNote: 'Будем рады видеть вас в одежде пудровых, бежевых и молочных тонов',
    dresscodeSwatches: [
      { src: `${BASE}/_next/image?url=%2Fassets%2Fimages%2Fswatch-rose.webp&w=384&q=75`, alt: 'пудровый' },
      { src: `${BASE}/_next/image?url=%2Fassets%2Fimages%2Fswatch-champagne.webp&w=384&q=75`, alt: 'шампань' },
      { src: `${BASE}/_next/image?url=%2Fassets%2Fimages%2Fswatch-ivory.webp&w=384&q=75`, alt: 'молочный' },
    ],
    rsvpHeading: 'Сможете прийти на свадьбу?',
    rsvpSubtitle: 'Пожалуйста, ответьте до дня свадьбы',
    rsvpNameLabel: 'Ваше имя',
    rsvpNamePlaceholder: 'Имя и фамилия',
    rsvpAttendLabel: 'Сможете прийти на свадьбу?',
    rsvpOptions: [
      { value: 'yes', label: 'Конечно, приду' },
      { value: 'no', label: 'К сожалению, не смогу' },
    ],
    rsvpGuestCountLabel: 'Количество гостей',
    rsvpSubmit: 'Отправить',
    footerMessage: 'Ждём вас с\nнетерпением!',
    footerDesign: 'Дизайн: @priglasi.design.kg',
  },
};

type Lang = 'ky' | 'ru';

// function useCountdown(targetDate: Date) {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   useEffect(() => {
//     const tick = () => {
//       const now = new Date();
//       const diff = targetDate.getTime() - now.getTime();
//       if (diff <= 0) {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }
//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((diff % (1000 * 60)) / 1000);
//       setTimeLeft({ days, hours, minutes, seconds });
//     };
//     tick();
//     const id = setInterval(tick, 1000);
//     return () => clearInterval(id);
//   }, [targetDate]);

//   return timeLeft;
// }

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in');
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function InvitationPage() {
  const [lang, setLang] = useState<Lang>('ky');
  const [introOpen, setIntroOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [miniVisible, setMiniVisible] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpAttend, setRsvpAttend] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState('');
  const [rsvpStatusType, setRsvpStatusType] = useState<'success' | 'error' | ''>('');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  const [rsvpGuestCount, setRsvpGuestCount] = useState(1);

  const handleIncrement = () => setRsvpGuestCount((prev) => Math.min(prev + 1, 20));
  const handleDecrement = () => setRsvpGuestCount((prev) => Math.max(prev - 1, 1));


  const t = TRANSLATIONS[lang];
  const weddingDate = new Date('2026-09-19T18:00:00');
  // const countdown = useCountdown(weddingDate);
  useReveal();

  useEffect(() => {
    audioRef.current = new Audio(`${BASE}/assets/audio/background-music.mp3`);
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setMiniVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [introOpen]);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => { });
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const openInvitation = () => {
    setIntroOpen(false);
    if (audioRef.current) {
      audioRef.current.play().catch(() => { });
      setIsPlaying(true);
    }
  };

  const handleRsvpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!rsvpName.trim() || !rsvpAttend) {
      setRsvpStatus('Сураныч, бардык талааларды толтуруңуз');
      setRsvpStatusType('error');
      return;
    }

    setRsvpStatus('Жөнөтүлүүдө...');
    setRsvpStatusType('');

    try {
      const response = await fetch('https://product-production-1794.up.railway.app/guests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: rsvpName.trim(),
          attending: rsvpAttend === 'yes',
          guestsCount: rsvpAttend === 'yes' ? rsvpGuestCount : 0,
        }),
      });

      if (!response.ok) throw new Error('Сервер жооп берген жок');

      setRsvpStatus('Рахмат! Жообуңуз кабыл алынды 💛');
      setRsvpStatusType('success');
      setRsvpName('');
      setRsvpAttend('');
      setRsvpGuestCount(1);
    } catch (err) {
      console.error(err);
      setRsvpStatus('Ката кетти, кайра аракет кылыңыз');
      setRsvpStatusType('error');
    }
  };

  return (
    <>
      {/* Intro overlay */}
      <div
        className={`intro${introOpen ? '' : ' intro--closing'}`}
        role="dialog"
        aria-label={lang === 'ky' ? 'Чакырууну ачуу' : 'Открыть приглашение'}
        aria-modal="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE}/assets/images/hero-couple.webp`} // added by Nur
          alt="Улуттук кийимдеги жаштардын колдору, шырдактын үстүндө"
          className="intro__photo"
        />
        <div className="intro__veil" aria-hidden="true" />
        <div className="intro__inner">
          <p className="intro__kicker">{t.introKicker}</p>
          <h1 className="intro__name">{t.introName}</h1>
          <p className="intro__date">{t.introDate}</p>
          <button type="button" className="intro__button" onClick={openInvitation}>
            {t.introButton}
          </button>
        </div>
      </div>

      {/* Topbar */}
      <div className="topbar">
        <button
          type="button"
          className={`music-mini${miniVisible ? ' music-mini--visible' : ''}`}
          aria-label={isPlaying ? t.musicPause : t.musicPlay}
          aria-pressed={isPlaying}
          aria-hidden="true"
          tabIndex={-1}
          onClick={toggleMusic}
        >
          <span className={`vinyl${isPlaying ? ' vinyl--spinning' : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="vinyl__disc"
              src={`${BASE}/assets/images/vinyl-disc.webp`}
              width={574}
              height={572}
            />
          </span>
          <span className="vinyl__transport" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              {isPlaying ? (
                <>
                  <rect x="6" y="4" width="4.2" height="16" rx="1.4" />
                  <rect x="13.8" y="4" width="4.2" height="16" rx="1.4" />
                </>
              ) : (
                <polygon points="5,3 19,12 5,21" />
              )}
            </svg>
          </span>
        </button>
        <div className="lang" role="group" aria-label={lang === 'ky' ? 'Чакыруунун тили' : 'Язык приглашения'}>
          <button
            type="button"
            className="lang__option"
            aria-pressed={lang === 'ru'}
            onClick={() => setLang('ru')}
          >
            Рус
          </button>
          <button
            type="button"
            className="lang__option"
            aria-pressed={lang === 'ky'}
            onClick={() => setLang('ky')}
          >
            Кырг
          </button>
        </div>
      </div>

      {/* Main page */}
      <main className="page">
        {/* Hero */}
        <header className="hero" aria-label={lang === 'ky' ? 'Чакыруунун баш экраны' : 'Главный экран'} ref={heroRef}>
          <div className="hero__frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Улуттук кийимдеги жаштардын колдору, шырдактын үстүндө"
              className="hero__photo"
              src={`${BASE}/assets/images/hero-couple.webp`} // added by Nur
            />
            <div className="hero__veil" aria-hidden="true" />
            <div className="hero__caption">
              <h1 className="hero__name">
                {t.heroName}
                <span className="hero__hearts" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="hero__heart hero__heart--lead"
                    src={`${BASE}/assets/images/heart.png`} // added by Nur
                    width={375}
                    height={375}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="hero__heart hero__heart--trail"
                    src={`${BASE}/assets/images/heart.png`} // added by Nur
                    width={375}
                    height={375}
                  />
                </span>
              </h1>
              <p className="hero__subtitle">{t.heroSubtitle}</p>
            </div>
          </div>

          {/* Music strip */}
          <div className="hero__strip">
            <div className="music">
              <button
                type="button"
                className="music__button"
                aria-label={isPlaying ? t.musicPause : t.musicPlay}
                aria-pressed={isPlaying}
                onClick={toggleMusic}
              >
                <svg className="vinyl__ring" viewBox="0 0 200 200" aria-hidden="true">
                  <defs>
                    <path
                      id="music-ring-path"
                      fill="none"
                      d="M100 100m-86 0a86 86 0 1 1 172 0a86 86 0 1 1-172 0"
                    />
                  </defs>
                  <text>
                    <textPath href="#music-ring-path">
                      музыканы коюу · музыканы коюу · музыканы коюу · музыканы коюу · музыканы коюу · музыканы коюу · музыканы коюу ·{' '}
                    </textPath>
                  </text>
                </svg>
                <span className={`vinyl${isPlaying ? ' vinyl--spinning' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="vinyl__disc"
                    src={`${BASE}/assets/images/vinyl-disc.webp`}
                    width={574}
                    height={572}
                  />
                </span>
                <span className="vinyl__transport" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    {isPlaying ? (
                      <>
                        <rect x="6" y="4" width="4.2" height="16" rx="1.4" />
                        <rect x="13.8" y="4" width="4.2" height="16" rx="1.4" />
                      </>
                    ) : (
                      <polygon points="5,3 19,12 5,21" />
                    )}
                  </svg>
                </span>
              </button>
              <p className="music__hint" aria-hidden="true">
                <svg className="music__arrow" viewBox="0 0 60 34" focusable="false">
                  <path
                    d="M2 6c6 14 18 20 34 20 8 0 14-3 16-8-3 6-9 9-16 9-9 0-16-5-19-13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 6 1 15M2 6l8 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{t.musicHint}</span>
              </p>
            </div>
          </div>
        </header>

        {/* Message section */}
        <section className="section section--message" aria-labelledby="message-heading">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            aria-hidden="true"
            className="section__watermark"
            src={`${BASE}/assets/images/heart.png`} // added by Nur
            width={375}
            height={375}
          />

          <h2 className="reveal script-heading">
            <span id="message-heading">{t.messageHeading}</span>
          </h2>

          <div className="message__text">
            <p
              className="reveal message__paragraph"
              style={{ transitionDelay: '90ms' }}
            >
              {t.messageParagraph1}
            </p>

            <p
              className="reveal message__paragraph"
              style={{ transitionDelay: '130ms' }}
            >
              {t.messageParagraph2}
            </p>

            <span className="rule" aria-hidden="true" />

            <p
              className="reveal message__paragraph message__paragraph--invite"
              style={{ transitionDelay: '170ms' }}
            >
              {t.messageParagraph3}
            </p>
          </div>

          <div
            className="reveal message__signature"
            style={{ transitionDelay: '230ms' }}
          >
            <p className="message__regards">{t.messageRegards}</p>
            <p className="message__hosts">{t.messageHosts}</p>
          </div>
        </section>

        {/* Date section */}
        <section className="section section--date" aria-labelledby="date-heading">
          <img
            alt=""
            aria-hidden="true"
            className="section__watermark section__watermark--date"
            src={`${BASE}/assets/images/heart.png`}
            width={375}
            height={375}
          />
          <h2 className="visually-hidden" id="date-heading">{t.dateHeading}</h2>
          <div className="reveal calendar">
            <p className="calendar__month">
              {t.calendarMonth}
              <span className="calendar__year">{t.calendarYear}</span>
            </p>
            <table className="calendar__grid">
              <caption className="visually-hidden">{t.calendarCaption}</caption>
              <thead>
                <tr>
                  {t.calendarDays.map((d) => (
                    <th key={d} scope="col">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {[21, 22, 23, 24, 25, 26, 27].map((day) => (
                    <td key={day}>
                      <span className={`calendar__day${day === 23 ? ' calendar__day--event' : ''}`}>
                        {day === 23 && (
                          <img
                            alt=""
                            aria-hidden="true"
                            className="calendar__heart"
                            src={`${BASE}/assets/images/heart.png`}
                            width={375}
                            height={375}
                          />
                        )}
                        <span className="calendar__number">{day}</span>
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <p className="calendar__time">
              <span className="calendar__time-label">{t.calendarTimeLabel}</span> {t.calendarTime}
            </p>
          </div>
        </section>

        <section className="section section--venue" aria-labelledby="venue-heading">
          <div className="reveal venue">
            <div className="venue__pin" aria-hidden="true">
              <img
                alt=""
                className="venue__pin-image"
                src={`${BASE}/assets/images/venue-pin.webp`}
                width={400}
                height={477}
              />
            </div>
            <div className="venue__body">
              <h2 className="label" id="venue-heading">{t.venueHeading}</h2>
              <p className="venue__name">{t.venueName}</p>
              <p className="venue__address">{t.venueAddress}</p>
            </div>
            <a
              className="map-link"
              href="https://2gis.kg/bishkek/firm/70000001039821790"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.mapLinkLabel}
            >
              <svg className="map-link__arrow" viewBox="0 0 60 34" aria-hidden="true" focusable="false">
                <path
                  d="M2 6c6 14 18 20 34 20 8 0 14-3 16-8-3 6-9 9-16 9-9 0-16-5-19-13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M2 6 1 15M2 6l8 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <span>{t.mapLinkHint}</span>
            </a>
          </div>
        </section>


        <section className="section section--rsvp" aria-labelledby="rsvp-heading">
          <div className="reveal">
            <h2 className="serif-heading" id="rsvp-heading">{t.rsvpHeading}</h2>
            <p className="rsvp__subtitle">{t.rsvpSubtitle}</p>
            <form className="rsvp" noValidate onSubmit={handleRsvpSubmit}>
              <div className="rsvp__field">
                <label className="rsvp__label" htmlFor="rsvp-name">{t.rsvpNameLabel}</label>
                <input
                  id="rsvp-name"
                  type="text"
                  autoComplete="name"
                  maxLength={120}
                  className="rsvp__input"
                  placeholder={t.rsvpNamePlaceholder}
                  name="guestName"
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                />
              </div>

              <fieldset className="rsvp__field rsvp__fieldset">
                <legend className="rsvp__legend">{t.rsvpAttendLabel}</legend>
                {t.rsvpOptions.map((opt) => (
                  <label key={opt.value} className="rsvp__choice">
                    <input
                      type="radio"
                      name="attendance"
                      value={opt.value}
                      checked={rsvpAttend === opt.value}
                      onChange={() => setRsvpAttend(opt.value)}
                    />
                    <span className="rsvp__choice-mark" aria-hidden="true" />
                    <span className="rsvp__choice-text">{opt.label}</span>
                  </label>
                ))}
              </fieldset>

              {rsvpAttend === 'yes' && (
                <div className="rsvp__field rsvp__counter">
                  <span className="rsvp__label">{t.rsvpGuestCountLabel}</span>
                  <div className="rsvp__counter-control">
                    <button
                      type="button"
                      className="rsvp__counter-btn"
                      onClick={handleDecrement}
                      aria-label="Азайтуу"
                    >
                      −
                    </button>
                    <span className="rsvp__counter-value" aria-live="polite">
                      {rsvpGuestCount}
                    </span>
                    <button
                      type="button"
                      className="rsvp__counter-btn"
                      onClick={handleIncrement}
                      aria-label="Көбөйтүү"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              <button type="submit" className="rsvp__submit">{t.rsvpSubmit}</button>
              <p
                className={`rsvp__status${rsvpStatusType === 'success' ? ' rsvp__status--success' : rsvpStatusType === 'error' ? ' rsvp__status--error' : ''}`}
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                <span className="visually-hidden">Жөнөтүүнүн абалы: </span>
                {rsvpStatus}
              </p>
            </form>
          </div>
        </section>

      </main>
    </>
  );
}
