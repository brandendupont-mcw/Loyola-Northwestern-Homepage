import { genPageMetadata } from 'app/seo';
import { Authors, allAuthors } from 'contentlayer/generated';
import { coreContent } from 'pliny/utils/contentlayer';
import { MDXLayoutRenderer } from 'pliny/mdx-components';

import AuthorLayout from '@/layouts/AuthorLayout';

export const metadata = genPageMetadata({ title: 'About' });

export default function Page() {
  const authors = allAuthors as Authors[]; // or filter if needed
  //const mainContent = coreContent(author);

  return (
  <>
    {authors.map((author) => {
      const mainContent = coreContent(author);

      return (
        <AuthorLayout key={author.slug} content={mainContent}>
          <MDXLayoutRenderer code={author.body.code} />
        </AuthorLayout>
      );
    })}
  </>
  );
}