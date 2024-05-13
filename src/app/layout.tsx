import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
  params: {
    locale

  }
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string
  }
}>) {
  return (
    <html lang={locale}>
      <body>
        <StoreProvider> 
        {children}</StoreProvider>
      </body>
    </html>
  )



}
