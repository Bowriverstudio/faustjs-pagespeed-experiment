import { getNextStaticProps, is404 } from "@faustjs/next";
import { client, Post } from "client";
import { Footer, Header, Hero } from "components-woc";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

export interface PostProps {
  post: Post | Post["preview"]["node"] | null | undefined;
}

export function PostComponent({ post }: PostProps) {
  const { useQuery } = client;
  const { title, description } = useQuery().generalSettings;

  const postTitle = post?.title();
  const bgImage = post?.featuredImage?.node?.sourceUrl();
  const html = post?.content() ?? "";

  return (
    <>
      <Header title={title} description={description} />

      <Head>
        <title>
          {postTitle} - {title}
        </title>
      </Head>

      <Hero title={postTitle} bgImage={bgImage} />

      <main className="content content-single">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </main>

      <Footer copyrightHolder={title} />
    </>
  );
}

export default function Page() {
  const { usePost } = client;
  const post = usePost();

  return <PostComponent post={post} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
