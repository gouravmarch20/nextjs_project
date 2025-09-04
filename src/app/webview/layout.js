import AuthProvider from "../../components_pgW/webview/AuthProvider";
import ClientHeader from "../../components_pgW/webview/ClientHeader";
export const metadata = {
  title: "WebView Demo",
  description: "Demo app for React Native WebView auth flow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"  antialiased"}>
        <ClientHeader />
        <AuthProvider>
          <main className="p-6">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
