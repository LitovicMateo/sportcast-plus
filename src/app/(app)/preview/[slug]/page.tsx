import { WordPressTemplate } from '@faustwp/core';

export default function Preview({ params}: { params: {slug: string}}) {
  console.log(params.slug);
  
  return <div>Preview page for {params.slug}</div>;
}