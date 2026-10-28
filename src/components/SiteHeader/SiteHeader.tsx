import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container/Container";
import { ChevronDown, ChevronRight } from "@/components/Icons/Icons";
import MobileNav from "@/components/MobileNav/MobileNav";
import ProductsMenu from "@/components/ProductsMenu/ProductsMenu";
import ServicesMenu from "@/components/ServicesMenu/ServicesMenu";
import styles from "./SiteHeader.module.css";

const navItems = ["Products", "Services", "Industries", "Resources", "About Us"];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link aria-label="EICE home" className={styles.logo} href="/">
          <Image alt="EICE" height={36} preload src="/assets/logos/eice-logo.png" width={100} />
        </Link>
        <nav aria-label="Main navigation" className={styles.nav}>
          {navItems.map((item) =>
            item === "Products" || item === "Services" ? (
              <div className={styles.navGroup} key={item}>
                <Link
                  aria-haspopup="true"
                  className={styles.navItem}
                  href={item === "Products" ? "/products" : "/#services"}
                >
                  {item}
                  <ChevronDown className={styles.navChevron} />
                </Link>
                <div className={styles.dropdown}>{item === "Products" ? <ProductsMenu /> : <ServicesMenu />}</div>
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
