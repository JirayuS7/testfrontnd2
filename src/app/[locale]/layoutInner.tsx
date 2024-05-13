"use client";
import { Breadcrumb, Layout, Menu, Select, theme } from "antd";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { usePathname } from 'next/navigation'
import { Provider } from "react-redux";
 
const { Header, Content, Footer } = Layout;



export default function LayoutInner({
    children,
}: {
    children: React.ReactNode;
}) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const router = useRouter();
    const pathname = usePathname()
    const pathnameArr = pathname.split("/")[2]

    const localActive = useLocale();
    const [isPending, startTransition] = useTransition();

    const MenuItem = ({ link, text }: { link: string, text: string }) => {
        return <Link href={link} className={`text-white px-3
        ${pathnameArr === link.split("/")[2] ? "bg-primary" : ""}
        `}
        >{text}</Link>
    }

    const items = [
        {
            key: "1",
            label: <MenuItem link={`/${localActive}`} text={"Home"} />,
        },
        {
            key: "2",
            label: <MenuItem link={`/${localActive}/sharp`} text={"Option1"} />,
        },
        {
            key: "3",
            label:  <MenuItem link={`/${localActive}/form`} text={"Option2"} />,
        },
    ];

    function handleSelect(e: string) {


        startTransition(() => {
            router.replace(`/${e}/${pathnameArr || ""}`);
        });
    }

    return (
     
        <Layout>
            <Header style={{ display: "flex", alignItems: "center" }}>
                <h1 className="text-white h2 me-3">JIRAYU SRIPUD</h1>
                {/* <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                /> */}

                {items.map((item) => { return item.label }

                )}



                <div className="ms-auto">
                    <Select
                        defaultValue="En"
                        disabled={isPending}
                        style={{ width: 120 }}
                        value={localActive}
                        onChange={(e) => handleSelect(e as string)}
                        options={[
                            { value: "en", label: "En" },

                            { value: "th", label: "Th" },
                        ]}
                    />
                </div>
            </Header>
            <Content style={{ padding: "0 48px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>
                        <Link href={`/${localActive}`}>
                            Home</Link></Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                ©{new Date().getFullYear()} Created by Jirayu{" "}
                <span className="ms-4"> Contact me :</span>{" "}
                <a href="mail@jirayudesign@gmail.com">jirayudesign@gmail.com</a>
            </Footer>
        </Layout>
        
    );
}
