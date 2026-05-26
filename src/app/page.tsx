import { Suspense } from "react";
import { SpinLoader } from "../components/SpinLoader";
import { PostsList } from "../components/PostList";
import { PostFeatured } from "../components/PostFeatured";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}
