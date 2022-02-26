import { getNextStaticProps } from "@faustjs/next";
import { client, OrderEnum, PostObjectsConnectionOrderbyEnum } from "client";
import { Footer, Header, Pagination, Posts } from "components-woc";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styles from "scss/pages/posts.module.scss";

const POSTS_PER_PAGE = 6;
type PageProps = {
  title: string;
  description: string;
};

export default function Page({ title, description }: PageProps) {
  const { query = {} } = useRouter();
  const { postSlug, postCursor } = query;
  const { usePosts, useQuery } = client;
  const isBefore = postSlug === "before";
  const posts = usePosts({
    after: !isBefore ? (postCursor as string) : undefined,
    before: isBefore ? (postCursor as string) : undefined,
    first: !isBefore ? POSTS_PER_PAGE : undefined,
    last: isBefore ? POSTS_PER_PAGE : undefined,
  });

  if (useQuery().$state.isLoading) {
    return null;
  }

  return (
    <>
      <Header title={title} description={description} />

      <Head>
        <title>
          {title} - {description}
        </title>
      </Head>

      <main className="content content-index">
        <Posts
          posts={posts.nodes}
          heading="Blog Posts"
          headingLevel="h2"
          postTitleLevel="h3"
          id={styles.post_list}
        />
        <Pagination pageInfo={posts.pageInfo} basePath="/posts-woc" />
      </main>

      <Footer copyrightHolder={title} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { title, description } = await client.client.inlineResolved(() => {
    return {
      title: client.client.query.generalSettings?.title,
      description: client.client.query.generalSettings?.description,
    };
  });

  const values = await client.client.inlineResolved(() => {
    return client.client.query
      .posts({
        first: 5,
      })
      ?.nodes?.map((node) => node?.uri);
  });
  const paths = [];

  return getNextStaticProps(context, {
    Page,
    client,
    props: { title, description },
  });
}
