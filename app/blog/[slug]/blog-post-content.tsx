"use client"

import { MDXRemote } from "remote-mdx"
import { serialize } from "remote-mdx/serialize"
import { useEffect, useState } from "react"

export default function BlogPostContent({ content }: { content: string }) {
  const [mdxSource, setMdxSource] = useState<any>(null)

  useEffect(() => {
    async function prepareMDX() {
      const serialized = await serialize(content)
      setMdxSource(serialized)
    }
    prepareMDX()
  }, [content])

  if (!mdxSource) {
    return <div>Loading...</div>
  }

  return <MDXRemote {...mdxSource} />
}

