'use client';

import { useState, type FormEvent } from 'react';

import { Section, Wrap } from '../ui';
import { common } from '@/lib/copy/common';
import { pages } from '@/lib/copy/pages';
import type { Lang } from '@/lib/i18n';

export default function ContactPage({ lang }: { lang: Lang }) {
  const c = common[lang];
  const t = pages[lang].contato;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  // No backend is wired up yet — the form validates in the browser and confirms
  // receipt. Point this at the real endpoint when one exists.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    window.setTimeout(() => setStatus('sent'), 600);
  };

  const text = (
    id: string,
    label: string,
    placeholder: string,
    type = 'text',
    autoComplete?: string,
  ) => (
    <label className="field" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        className="input"
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={id === 'nome' || id === 'email'}
      />
    </label>
  );

  return (
    <Section pad="clamp(40px,5.5cqw,80px) clamp(20px,4cqw,56px)" bg="var(--grey)">
      <Wrap
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 'clamp(24px,3.5cqw,44px)',
          alignItems: 'start',
        }}
      >
        <form
          onSubmit={onSubmit}
          style={{ background: '#fff', borderRadius: 22, padding: 'clamp(24px,3.4cqw,40px)' }}
        >
          <p className="eyebrow" style={{ marginBottom: 8 }}>
            {t.eyebrow}
          </p>
          <h1
            style={{
              margin: '0 0 8px',
              font: '600 clamp(25px,3.4cqw,38px)/1.1 var(--display)',
              letterSpacing: '-.025em',
              color: 'var(--navy)',
            }}
          >
            {t.title}
          </h1>
          <p
            style={{
              margin: '0 0 26px',
              font: '400 15.5px/1.6 var(--sans)',
              color: 'var(--navy-70)',
            }}
          >
            {t.lead}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
              gap: 14,
            }}
          >
            {text('nome', t.fields.nome, t.fields.nomePh, 'text', 'name')}
            {text('empresa', t.fields.empresa, t.fields.empresaPh, 'text', 'organization')}
            {text('cargo', t.fields.cargo, t.fields.cargoPh, 'text', 'organization-title')}
            {text('email', t.fields.email, t.fields.emailPh, 'email', 'email')}
            {text('telefone', t.fields.telefone, t.fields.telefonePh, 'tel', 'tel')}
            <label className="field" htmlFor="segmento">
              <span>{t.fields.segmento}</span>
              <select id="segmento" name="segmento" className="select" defaultValue={t.segments[0]}>
                {t.segments.map((segment) => (
                  <option key={segment}>{segment}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="field" htmlFor="mensagem" style={{ marginTop: 14 }}>
            <span>{t.fields.mensagem}</span>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              className="textarea"
              placeholder={t.fields.mensagemPh}
            />
          </label>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              alignItems: 'center',
              marginTop: 22,
            }}
          >
            <button
              type="submit"
              className={`btn btn-lg ${status === 'sending' ? 'btn-disabled' : 'btn-primary'}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? t.sending : t.submit}
            </button>
            <a href="#" className="btn-link">
              {t.schedule}
            </a>
          </div>

          {status === 'sent' && (
            <p
              role="status"
              style={{
                margin: '18px 0 0',
                font: '500 14.5px/1.5 var(--sans)',
                color: 'var(--orange)',
              }}
            >
              {t.sent}
            </p>
          )}
        </form>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div
            style={{
              background: 'var(--deep)',
              borderRadius: 20,
              padding: 'clamp(22px,3cqw,32px)',
            }}
          >
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              {t.salesTitle}
            </p>
            <p
              style={{ margin: '0 0 6px', font: '500 16px/1.4 var(--sans)', color: '#fff' }}
            >
              {c.footer.email}
            </p>
            <p style={{ margin: '0 0 18px', font: '500 16px/1.4 var(--sans)', color: '#fff' }}>
              {c.footer.phone}
            </p>
            <p
              style={{
                margin: 0,
                font: '400 14.5px/1.6 var(--sans)',
                color: 'rgba(236,236,234,.65)',
              }}
            >
              {t.hours}
            </p>
          </div>

          <div style={{ background: '#fff', borderRadius: 20, padding: 'clamp(22px,3cqw,32px)' }}>
            <p className="eyebrow" style={{ marginBottom: 14 }}>
              {t.addressTitle}
            </p>
            <p
              style={{
                margin: 0,
                font: '400 15px/1.6 var(--sans)',
                color: 'rgba(29,63,122,.75)',
              }}
            >
              {t.address[0]}
              <br />
              {t.address[1]}
            </p>
            <div style={{ height: 1, background: 'var(--navy-line)', margin: '20px 0' }} />
            <p className="eyebrow" style={{ marginBottom: 12 }}>
              {t.socialTitle}
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {['in', 'ig', 'yt'].map((n) => (
                <a
                  key={n}
                  href="#"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    border: '1px solid rgba(29,63,122,.16)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    font: '600 12px/1 var(--sans)',
                    color: 'var(--navy)',
                    textDecoration: 'none',
                  }}
                >
                  {n}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </Section>
  );
}
