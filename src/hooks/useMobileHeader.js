import { useEffect, useState } from "react";

const useMobileHeader = () => {
  const [toggleTab, setToggleTab] = useState("");
  const [active, setActive] = useState(false);
  const [activeProduct, setActiveProduct] = useState(() => {
    return localStorage.getItem("activeProduct") || "Flat Bottom Bags";
  });

  const handleProductClick = (selectedProduct) => {
    setActiveProduct(selectedProduct);
    localStorage.setItem("activeProduct", selectedProduct);
    window.dispatchEvent(new Event("localProductChange"));
    setActive(false);
    setToggleTab("");
  };

  useEffect(() => {
    const handleLocalChange = () => {
      setActiveProduct(localStorage.getItem("activeProduct"));
    };
    window.addEventListener("localProductChange", handleLocalChange);

    return () => window.removeEventListener("localProductChange", handleLocalChange);
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "activeProduct") {
        setActiveProduct(event.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return {
    toggleTab,
    setToggleTab,
    active,
    setActive,
    activeProduct,
    handleProductClick,
  };
};

export default useMobileHeader;
