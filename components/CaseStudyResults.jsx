/**
 * Results section for a case study.
 *
 * Renders nothing unless real data is passed. Never invents or implies figures.
 *
 * @param {object|null} results             - null renders nothing (default).
 * @param {Array}       results.metrics     - [{ label, value, timeframe }]
 * @param {string}      results.quote       - client quote, verbatim
 * @param {string}      results.attribution - who said it
 * @param {string}      results.attributionRole - their role / company
 * @param {boolean}     showPending         - show a placeholder instead of nothing
 */
export default function CaseStudyResults({ results, showPending = false }) {
  const metrics = results?.metrics?.filter((m) => m && m.label && m.value) ?? []
  const quote = results?.quote?.trim()
  const hasData = metrics.length > 0 || Boolean(quote)

  if (!hasData) {
    if (!showPending) return null

    return (
      <section className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>
            ▶ RESULTS
          </p>
          <div
            className="border-2 border-dashed p-8 sm:p-12"
            style={{ borderColor: 'var(--b-border)' }}
          >
            <p className="font-mono text-sm leading-relaxed max-w-xl" style={{ color: 'var(--b-muted)' }}>
              Performance data pending client release. This section will be updated
              with figures supplied by Leather Hero — nothing is estimated here.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>
          ▶ RESULTS
        </p>
        <h2
          className="font-bebas leading-none mb-10 sm:mb-14"
          style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--b-text)' }}
        >
          WHAT IT DID
        </h2>

        {metrics.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="border-2 p-6 sm:p-8"
                style={{
                  borderColor: 'var(--b-border)',
                  boxShadow: '4px 4px 0px var(--b-border)',
                }}
              >
                <p
                  className="font-bebas leading-none"
                  style={{ fontSize: 'clamp(2.5rem,6vw,4rem)', color: 'var(--b-text)' }}
                >
                  {m.value}
                </p>
                <p
                  className="font-mono text-xs tracking-[0.2em] mt-3"
                  style={{ color: 'var(--b-text)' }}
                >
                  {m.label.toUpperCase()}
                </p>
                {m.timeframe && (
                  <p className="font-mono text-xs mt-2" style={{ color: 'var(--b-muted)' }}>
                    {m.timeframe}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {quote && (
          <figure
            className={`border-2 p-6 sm:p-10 ${metrics.length > 0 ? 'mt-6' : ''}`}
            style={{
              borderColor: 'var(--b-text)',
              backgroundColor: 'var(--b-subtle)',
            }}
          >
            <blockquote
              className="font-mono text-sm sm:text-base leading-relaxed"
              style={{ color: 'var(--b-text)' }}
            >
              “{quote}”
            </blockquote>
            {results.attribution && (
              <figcaption
                className="font-mono text-xs tracking-[0.2em] mt-5"
                style={{ color: 'var(--b-muted)' }}
              >
                — {results.attribution}
                {results.attributionRole ? `, ${results.attributionRole}` : ''}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  )
}
