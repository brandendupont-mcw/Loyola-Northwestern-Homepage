
"use client"
import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

function DataWrapChart({ title, src, ...props }) {
  const id = src.split('/').filter((str, i) => str.length === 5 && !!i)

  const [height, setState] = useState(500)

  const onMessage = useCallback(
    ({ data = {} }) => {
      if (typeof data === 'string') return
      const height = data['datawrapper-height'] && data['datawrapper-height'][id]
      if (height) {
        setState(height)
      }
    },
    [id, setState]
  )

  useEffect(() => {
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [id, height, setState, onMessage])

  return (
    <iframe
      scrolling="no"
      frameBorder="0"
      width="99%"
      {...props}
      title={title}
      src={src}
      height={height}
    />
  )
}

export default  DataWrapChart