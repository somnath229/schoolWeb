import React from "react";
import ContactBg from "../../components/ContactComponents/ContactBg";
import ContactAddress from "../../components/ContactComponents/ContactAddress";
import SendUs from "../../components/ContactComponents/SendUs";
import ContactForm from "../../components/ContactComponents/ContactForm";

const index = () => {
  return (
    <>
      <ContactBg />
      <ContactAddress />
      <SendUs />
      <ContactForm />
    </>
  );
};

export default index;
