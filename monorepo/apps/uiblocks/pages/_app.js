import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { routes } from '../layout/routes';
import Layout from '../layout/layout';
import PrimeReact from "primereact/api";
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';

export default function App({ Component }) {
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState("lara-light-indigo");
  const copyTooltipRef = useRef();

  const router = useRouter();

  useEffect(() => {
    copyTooltipRef &&
      copyTooltipRef.current &&
      copyTooltipRef.current.updateTargetEvents();
    if (
      router.pathname !== "/" &&
      router.pathname !== "/marketing" &&
      router.pathname !== "/application"
    ) {
      window.scrollTo(0, 0);
    }
    window.process = {
      ...window.process,
    };
  }, [router]);

  const props = {
    dark: dark,
    theme: theme,
    onThemeChange: (newTheme, dark) => {
      PrimeReact.changeTheme(theme, newTheme, 'theme-link', () => {
        setDark(dark);
        setTheme(newTheme);
      });
    },
    routes
  };

  if (Component.getLayout) {
    return Component.getLayout(<Component {...props} />);
  } else {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  }
}
