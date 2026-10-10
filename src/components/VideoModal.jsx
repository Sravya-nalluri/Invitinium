import { useEffect, useRef } from 'react'

export default function VideoModal({ template, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const d = dialogRef.current
    if (template && !d.open) d.showModal()   // native: Esc to close, focus trap, backdrop
    if (!template && d.open) d.close()
  }, [template])

  return (
    <dialog ref={dialogRef} className="video-modal" onClose={onClose}
      onClick={e => e.target === dialogRef.current && onClose()} aria-label={template?.name}>
      {template && (
        <>
          <button className="video-modal__close" onClick={onClose} aria-label="Close video">✕</button>
          <video src={template.video} controls autoPlay playsInline />
        </>
      )}
    </dialog>
  )
}