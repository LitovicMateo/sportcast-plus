import { SinglePostAPI } from '@/lib/api-types'
import React from 'react'

type ArticleContentProps = {
    post: SinglePostAPI
}

const ArticleContent: React.FC<ArticleContentProps> = ({post}) => {
  return (
    <article
    className="leading-8 text-[#413d3d] text-left"
    dangerouslySetInnerHTML={{ __html: post.data.post.content }}
  ></article>
)
}

export default ArticleContent