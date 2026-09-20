export default function ProjectCTA({ title = 'Let’s give your product a stronger first impression.', text = 'Share your product and the next step for your brand. I’ll help you choose the right design support.' }) {
  return <section className="project-cta"><div className="studio-wrap project-cta-inner"><div><p className="studio-eyebrow">YOUR NEXT CHAPTER</p><h2>{title}</h2><p>{text}</p></div><a className="studio-button" href="/contact-me/">Get a project quote ↗</a></div></section>
}
