import Head from "next/head";

const HeadSeo = ({ siteTitle, title, siteDescription }: any) => {
    return (
        <>
            <Head>
                <title>{`${siteTitle.replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')} | ${title}`}</title>
                <meta name="title" content={title} />
                <meta name="description" content={siteDescription} />
                <meta name="googlebot" content="all" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            </Head>
        </>
    );
}

export default HeadSeo;