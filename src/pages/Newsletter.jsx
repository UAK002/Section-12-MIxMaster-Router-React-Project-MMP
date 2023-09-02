import { Form, redirect } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);
  const response = await axios.post(newsletterUrl, data);
  toast.success(response.data.msg);
  console.log(response);
  // return null;
  return redirect('/');
};

const Newsletter = () => {
  return (
    // <form className="form" method="POST">
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '3rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          // required
          defaultValue="john"
        />
      </div>
      {/* lastName */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last Name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="smith"
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button className="btn btn-block" style={{ marginTop: '0.5rem' }}>
        submit
      </button>
    </Form>
  );
};
export default Newsletter;
