import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";
interface LayoutProps {
    title?: string;
    /* children?: React.ReactNode; */
}

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children, title }) => {
  return (
    <>
    <Head>
        <title>{ title || 'Pokemon App'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`${title}, PokeDex, Aplication`} />
        <meta name="keywords" content={`${title}, Pokemon, Pokedex`} />
    </Head>

    <Navbar />

    <main style={{
      padding: '0 1rem',
    }}>
        { children }
    </main>

    </>
  );
};