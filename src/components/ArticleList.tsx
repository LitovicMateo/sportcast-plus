import { FetchPostsAPI, PostAPI } from '@/lib/api-types'
import React from 'react'
import ArticleListItem from './ArticleListItem'

type ArticleListProps = {
    posts: PostAPI[]
}

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => {

  return (
    <section className='flex flex-col gap-10 md:gap-16 py-16 w-[1200px] max-w-full mx-auto'>
        {posts.map(post => <ArticleListItem post={post} key={post.slug} />)}
    </section>
  )
}

export default ArticleList