import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import { Footer, Header, Hero } from "components";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

type PageProps = {
  title: string;
};
export default function Page({ title }: PageProps) {
  return (
    <>
      <Head>
        <title>Empty Page with titlefromprops {title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <p>Empty Page with title {title}</p>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    props: { title: "Hard Coded Title" },
  });
}
