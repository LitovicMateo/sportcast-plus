import { FetchPostsAPI, PostAPI } from '@/lib/api-types'
import React from 'react'
import ArticleListItem from './ArticleListItem'

type ArticleListProps = {
    posts: PostAPI[]
}

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => {

  return (
    <section className='flex flex-col w-full gap-6 md:gap-16 md:px-4 py-4 md:py-16 xl:w-[1200px] max-w-full mx-auto'>
        {posts.map(post => <ArticleListItem post={post} key={post.slug} />)}
    </section>
  )
}

export default ArticleList