import React from "react";

const Contact = () => {
  return (
    <div className="container mt-4">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or inquiries, please don't hesitate to contact
        us. Our dedicated customer support team is available 24/7 to assist you.
        You can reach us via phone, email, or by visiting our store during
        business hours. We look forward to hearing from you!
      </p>
      <div className="row">
        <div className="col-md-6">
          <h3>Visit Our Store</h3>
          <p>
            1234 Nikol road,
            <br />
            Ahmedabad, Gujarat 56789,
            <br />
            India
          </p>
        </div>
        <div className="col-md-6">
          <h3>Contact Information</h3>
          <p>
            Phone: +1 (123) 456-7890
            <br />
            Email: info@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
