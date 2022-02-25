import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import { Footer, Header, Hero } from "components";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  return (
    <>
      <Head>
        <title>Empty Page with title {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <p>Empty Page with title {generalSettings.title}</p>
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
