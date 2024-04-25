import { PostAPI } from '@/lib/api-types'
import React from 'react'
import BreakLine from '../UI/breakline'
import PostList from './post-list'

type CategorySectionProps = {
  label: string,
  posts: PostAPI[]
}

const CategorySection: React.FC<CategorySectionProps> = ({ label, posts }) => {

  const filteredPosts = posts
                        .filter((item) => item.categories.nodes[0].name.toLowerCase() === label)
                        .slice(0,6);

  return (
    <section className='w-full my-2'>
      <h2 className='mb-0 pb-0 px-4 md:px-0'>{label.toUpperCase()}</h2>
      <BreakLine />
      <PostList posts={filteredPosts} showCategory={false} />
    </section>
    
  )
}

export default CategorySection