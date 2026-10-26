import Image from "next/image";
import Container from "@/components/Container/Container";
import { ChevronDown, ChevronRight } from "@/components/Icons/Icons";
import MobileNav from "@/components/MobileNav/MobileNav";
import ProductsMenu from "@/components/ProductsMenu/ProductsMenu";
import styles from "./SiteHeader.module.css";

const navItems = ["Products", "Services", "Industries", "Resources", "About Us"];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a aria-label="EICE home" className={styles.logo} href="#">
          <Image alt="EICE" height={36} priority src="/assets/logos/eice-logo.png" width={100} />
        </a>
        <nav aria-label="Main navigation" className={styles.nav}>
          {navItems.map((item) =>
            item === "Products" ? (
              <div className={styles.navGroup} key={item}>
                <a aria-haspopup="true" className={styles.navItem} href="#products">
                  {item}
                  <ChevronDown className={styles.navChevron} />
                </a>
                <div className={styles.dropdown}>
                  <ProductsMenu />
                </div>
              </div>
            ) : (
              <a className={styles.navItem} href="#" key={item}>
                {item}
                <ChevronDown className={styles.navChevron} />
              </a>
            ),
          )}
        </nav>
        <a className={styles.enquiryButton} href="#contact">
          Submit Enquiry
          <ChevronRight className={styles.enquiryChevron} />
        </a>
        <MobileNav />
      </Container>
    </header>
  );
}
