// src/admin/AdminUpload.jsx (or your existing file)
import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase' // your initialized Firestore

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

export default function AdminUpload() {
  const [files, setFiles] = useState([])
  const [clientTag, setClientTag] = useState('') // e.g., "client_123_john_doe"
  const [saving, setSaving] = useState(false)

  const uploadToCloudinary = async (file) => {
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', uploadPreset)
    // keep images grouped for zipping later
    data.append('tags', clientTag)
    data.append('folder', `clients/${clientTag}`)

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: 'POST',
      body: data
    })
    const json = await res.json()
    if (!res.ok) throw new Error(json?.error?.message || 'Upload failed')
    return {
      public_id: json.public_id,
      secure_url: json.secure_url,
      format: json.format,
      width: json.width,
      height: json.height,
      bytes: json.bytes
    }
  }

  const onSubmit = async () => {
    setSaving(true)
    try {
      // 1) Upload all images to Cloudinary
      const results = await Promise.allSettled(files.map(uploadToCloudinary))
      const uploaded = results
        .filter(r => r.status === 'fulfilled')
        .map(r => r.value)

      if (uploaded.length === 0) throw new Error('All uploads failed')

      // 2) Save gallery doc to Firestore
      await addDoc(collection(db, 'galleries'), {
        tag: clientTag,
        count: uploaded.length,
        createdAt: serverTimestamp(),
        images: uploaded.map(i => ({
          public_id: i.public_id,
          url: i.secure_url,
          w: i.width, h: i.height, bytes: i.bytes
        }))
      })
      alert('Gallery created!')
    } catch (e) {
      console.error('[AdminUpload] Upload error:', e)
      alert(e.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="p-4">
      <input placeholder="Client tag (e.g. client_123_john_doe)" value={clientTag} onChange={e => setClientTag(e.target.value)} />
      <input type="file" multiple accept="image/*" onChange={(e) => setFiles([...e.target.files])} />
      <button disabled={!files.length || !clientTag || saving} onClick={onSubmit}>
        {saving ? 'Uploading…' : 'Create Gallery'}
      </button>
    </div>
  )
}
