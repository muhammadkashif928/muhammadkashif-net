'use client'
// AI ad videos: a poster with a play button; the file is only downloaded once someone presses play.
import { useRef, useState } from 'react'

const src = slug => `/videos/ads/${slug}.mp4`
const poster = slug => `/videos/ads/${slug}.jpg`
const length = s => `0:${String(s).padStart(2, '0')}`

export function AdVideo({ video: v, vertical = false }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const play = () => {
    setStarted(true)
    // One ad at a time: starting this one pauses any other that is playing.
    document.querySelectorAll('video.advid__v').forEach(el => { if (el !== ref.current) el.pause() })
    ref.current?.play()
  }
  return (
    <article className={`advid${vertical ? ' advid--tall' : ''}`}>
      <div className="advid__frame">
        <video ref={ref} className="advid__v" src={src(v.slug)} poster={poster(v.slug)} preload="none" playsInline controls={started} aria-label={`${v.brand} ${v.title} ad video`} />
        {!started && (
          <button type="button" className="advid__play" onClick={play} aria-label={`Play the ${v.brand} ${v.title} ad`}>
            <span className="advid__btn" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" /></svg></span>
            <span className="advid__len">{length(v.seconds)}</span>
          </button>
        )}
      </div>
      <div className="advid__meta">
        <p className="advid__brand">{v.brand}</p>
        <h3 className="advid__title">{v.title}</h3>
        <p className="advid__text">{v.text}</p>
      </div>
    </article>
  )
}

export default function AdVideos({ videos }) {
  return (
    <div className="advids">
      {videos.map((v, i) => <div key={v.slug} className="rv" style={{ '--ry': '16px', '--rd': `${(i % 2) * 90}ms` }}><AdVideo video={v} /></div>)}
    </div>
  )
}
