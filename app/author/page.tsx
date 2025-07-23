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
  <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 pl-9">
            Researchers
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 pl-9">
            Below is a list of researchers and organization engaged in research about violence in Chicago. 
          </p>
        </div>
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