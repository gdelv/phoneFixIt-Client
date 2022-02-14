import React, { useState } from "react";
import emailjs from 'emailjs-com'

import "./styles.css";

import { useForm, useField, splitFormProps } from "react-form";

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props);

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps
  } = useField(field, fieldOptions);

  // Build the field
  return (
    <>
      <input {...getInputProps({ ref, ...rest })} />

      {/*
        Let's inline some validation and error information
        for our field
      */}

      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <strong>{error}</strong>
      ) : message ? (
        <small>{message}</small>
      ) : null}
    </>
  );
});

function ContactForm() {
  const [message, setMessage] = useState('')
  const [telephone, setTelephone] = useState('')
  const [select, setSelect] = useState('New_Installation')
  const handleChange = (e) => {
      setMessage(e.target.value);
  }
  const handlePhoneChange = (e) => {
      setTelephone(e.target.value);
  }
  const handleSelect = (e) => {
      setSelect(e.target.value);
  }
  // const defaultValues = React.useMemo(
  //   () => ({
  //     name: "tanner",
  //     age: "29",
  //     email: "tanner@gmail.com",
  //     friends: ["jaylen"]
  //   }),
  //   []
  // );
  const {
    Form,
    // values,
    // pushFieldValue,
    // removeFieldValue,
    meta: { isSubmitting, isSubmitted, canSubmit, error }
  } = useForm({
    // defaultValues,
    validate: values => {
      if (values.name === "") {
        return "Please enter a name";
      }
      return false;
    },
    onSubmit: async (values, instance) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(values);
      console.log(message);
      var templateParams = {
            name: values.name,
            email: values.email,
            message,
            telephone,
            service: select
        };
        emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_US_ID)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(err) {
            console.log('FAILED...', err);
            });
    },
    debugForm: false
    // false to hide JSON
  });

  return (
    <Form>
    {/* telephone */}
    {/* //name (req)
//tel (req)
//email (opt)
//select service dropdown (req)
//msg (optional) */}
      <div>
        <label>
          Name:{" "}
          <InputField
            field="name"
            validate={value => (!value ? "Required" : false)}
          />
        </label>
      </div>
      {/* <div>
        <label>
          Age:{" "}
          <InputField
            field="age"
            type="number"
            validate={value =>
              value < 10 ? "You must be at least 10 years old" : false
            }
            min="1"
          />
        </label>
      </div> */}
      <div>
        <label>
          Email:{" "}
          <InputField
            field="email"
            validate={async value => {
              if (!value) {
                return "Email is required";
              }

              if (!validateEmail(value)) {
                return "Please enter a valid email addresss";
              }

              console.log(`Checking email: ${value}...`);

              // We're going to mock that for now
              await new Promise(resolve => setTimeout(resolve, 2000));

              return value === "1stcallhvacsolutions@gmail.com"
                ? "Email is already being used"
                : false;
            }}
          />
        </label>
      </div>
      {/* <div>
        <label>
          Username:{" "}
          <InputField
            field="username"
            validate={(value, { debounce, setMeta }) => {
              console.log("checkusername");
              if (!value) {
                return "Username is required";
              }

              return debounce(async () => {
                console.log("Checking username...");
                await new Promise(resolve => setTimeout(resolve, 2000));
                if (value === "tanner") {
                  setMeta({ error: "Username is unavailable", message: null });
                  return;
                }

                setMeta({ error: null, message: "Username is available!" });
              }, 2000);
            }}
          />
        </label>
      </div> */}
      {/* <div>
        <label>
          Notes:{" "}
          <InputField field="other.notes" defaultValue="This is a note." />
        </label>
      </div> */}
<div>
  <label for="phone">Enter your phone number:</label>
  <input type="tel" id="phone" name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
        onChange={handlePhoneChange}/>
</div>
<div>
  <small>Format: <b>123-456-7890</b></small>
</div>
<div>
    <label for="cars">Choose a service:</label>
    <select id="cars" onChange={handleSelect} value={select}>
      <option value="New_Installation" selected>New installation</option>
      <option value="Service_and_Repair">Service and Repair</option>
      <option value="Free_Estimate">Get a free estimate</option>
      {/* <option value="audi" selected>Audi</option> */}
    </select>
</div>
<div>
    <label for="message">Message: </label>
</div>
<div>
    <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter a message here" onChange={handleChange}>
    {/* {message} */}
    </textarea>
</div>
      {/* <div>
        Friends
        <div
          style={{
            border: "1px solid black",
            padding: "1rem"
          }}
        >
          {values.friends.map((friend, i) => (
            <div key={i}>
              <label>
                Friend: <InputField field={`friends.${i}`} />{" "}
                <button
                  type="button"
                  onClick={() => removeFieldValue("friends", i)}
                >
                  X
                </button>
              </label>
            </div>
          ))}
          <button type="button" onClick={() => pushFieldValue("friends", "")}>
            Add Friend
          </button>
        </div>
      </div> */}

      {isSubmitted ? <em>We received your email and will contact you ASAP</em> : null}

      {error ? <strong>{error}</strong> : null}

      {isSubmitting ? (
        "Submitting..."
      ) : (
        <div>
          <button type="submit" disable={!canSubmit.toString()}>
            Submit
          </button>
        </div>
      )}
    </Form>
  );
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export default ContactForm
