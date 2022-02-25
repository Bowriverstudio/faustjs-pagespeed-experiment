import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import { Footer, Header, Hero } from "components";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Empty Page</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <p>EMpty Page</p>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
