import Image from "next/image";
import styles from "../page.module.scss";
import { useLocale, useTranslations } from 'next-intl';
import Layout from "./layout";
import LayoutInner from "./layoutInner";
import { Card } from "antd";

import Link from "next/link";
export default function Home() {
  const t = useTranslations('Index');
  const localActive = useLocale();
  return (
    
    <LayoutInner>    <main  >
      <h1>  {t('title')}</h1>

      <div className="row">
        <div className="col-md-6">

          <Card title= {t('titleApp1')} >

            <div>
              <Link href={`${localActive}/sharp`}
                className="btn btn-primary"
              >
                Click</Link>
            </div>
          </Card>
        </div>
        <div className="col-md-6">

          <Card title= {t('titleApp2')}>

            <div>
              <Link href={`${localActive}/form`}
                className="btn btn-primary"
              >
                Click</Link>
            </div>
          </Card>
        </div>
      </div>
    </main></LayoutInner>


  );
}
