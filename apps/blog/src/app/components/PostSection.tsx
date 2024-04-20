'use server';

import { Spacing } from '@guesung/ui';
import PostList from './PostList';

export default async function PostSection() {
  // Server Data Fetching

  return (
    <section className="max-w-1000 flex flex-col items-center text-center">
      <div className="">
        <p className="text-title1 py-50">ALL POSTS.</p>
        <p className="flex gap-10">
          <span>All Posts</span>
          <span>Typescript</span>
          <span>Javascript</span>
          <span>React.js</span>
          <span>Next.js</span>
        </p>
      </div>

      <Spacing size={50} />

      <div>
        <PostList />
      </div>
    </section>
  );
}