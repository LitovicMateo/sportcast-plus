import { SinglePostAPI } from '@/lib/api-types'
import React from 'react'

type ArticleContentProps = {
    post: SinglePostAPI
}

const ArticleContent: React.FC<ArticleContentProps> = ({post}) => {
  return (
    <article
    className="leading-8 text-[#6b6565] text-justify md:text-left"
    dangerouslySetInnerHTML={{ __html: post.data.post.content }}
  ></article>
)
}

export default ArticleContent