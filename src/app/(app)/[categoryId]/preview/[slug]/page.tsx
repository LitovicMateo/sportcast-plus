import { WordPressTemplate } from '@faustwp/core';

export default function Preview({props, params}: {props: any, params: {slug: string}}) {
  console.log(params.slug);
  
  return (
    <div>Preview</div>
  );
}