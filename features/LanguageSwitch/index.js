import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const LanguageSwitch = () => {
  const select = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const activeLanguage = router?.locales?.find((el) => el === router.locale);
    select.current.value = activeLanguage;
  }, [router]);

  const handleChange = () => {
    window.location.href = `/${select.current.value}${router.asPath}`;
  };

  return (
    <select onChange={handleChange} ref={select}>
      {router?.locales?.map((language, index) => (
        <option key={index} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitch;
