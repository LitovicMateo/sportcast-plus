import React from 'react'
import Tag from '../UI/tag'

type TagsProps = {
    tags: {
        name: string
    }[]
}

const Tags: React.FC<TagsProps> = ({tags}) => {
  return (
    <div className="flex gap-2 justify-start items-center">
    {tags.map((tag) => (
      <Tag tag={tag.name} key={tag.name} />
    ))}
  </div>
)
}

export default Tags