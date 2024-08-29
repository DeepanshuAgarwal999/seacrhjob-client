
export default async function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <main className=" mx-auto ">
                {children}
            </main>
        </>
    );
}
