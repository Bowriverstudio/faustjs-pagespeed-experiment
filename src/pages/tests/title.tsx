import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import { Footer, Header, Hero } from "components";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

type PageProps = {
  title: string;
  description: string;
};
export default function Page({ title, description }: PageProps) {
  return (
    <>
      <Header title={title} description={description} />

      <Head>
        <title>Custom Page - {title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <p>Empty Page with title {title}</p>
          <p>Empty Page with description {description}</p>
        </div>
      </main>
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

  return getNextStaticProps(context, {
    Page,
    client,
    props: { title, description },
  });
}
