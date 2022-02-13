// import React from 'react'
// import emailjs from 'emailjs-com'
// class ContactForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "",
//             email: "",
//             message: ""
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
   

//     handleSubmit() {
//         console.log('btn clicked');
//         var templateParams = {
//             name: 'James',
//             notes: 'Check this out!'
//         };
        
//         emailjs.send('service_r3zpirv','template_giusseppe_test', templateParams, 'user_BwvcdIZEnbCvCqLeiP433')
//             .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//             }, function(err) {
//             console.log('FAILED...', err);
//             });
//     }
//     render() {
//         // const { name, email, message } = this.state;
//         return (
//             <>
//                 <h1 className="title is-uppercase">Contact us</h1>
//                 <p className="subtitle">Located in Verma Plaza our location has ample parking</p>
//                 <div className='form-container'>
//                 </div>  
//             </>
//         )
//     }
// }

//name (req)
//tel (req)
//email (opt)
//select service dropdown (req)
//msg (optional)


// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function ContactForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 20})} />
//       <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
//       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
//       <select {...register("Title", { required: true })}>
//         <option value="Mr">Mr</option>
//         <option value="Mrs">Mrs</option>
//         <option value="Miss">Miss</option>
//         <option value="Dr">Dr</option>
//       </select>

//       <input {...register} type="radio" value="Yes" />
//       <input {...register} type="radio" value="No" />
//       <textarea {...register("Message", { maxLength: 200})} />
//       <input type="checkbox" placeholder="Emergency" {...register("Emergency", {})} />

//       <input type="submit" />
//     </form>
//   );
// }



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
  const [select, setSelect] = useState('')
  const handleChange = (e) => {
      setMessage(e.target.value);
  }
  const handlePhoneChange = (e) => {
      setTelephone(e.target.value);
  }
  const handleSelect = (e) => {
      setSelect(e.target.value);
  }
  const defaultValues = React.useMemo(
    () => ({
      name: "tanner",
      age: "29",
      email: "tanner@gmail.com",
      friends: ["jaylen"]
    }),
    []
  );
  const {
    Form,
    // values,
    // pushFieldValue,
    // removeFieldValue,
    meta: { isSubmitting, isSubmitted, canSubmit, error }
  } = useForm({
    defaultValues,
    validate: values => {
      if (values.name === "tanner" && values.age !== "29") {
        return "This is not tanner's correct age";
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
            message
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

              return value === "tanner@gmail.com"
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

<label for="phone">Enter your phone number:</label>

<input type="tel" id="phone" name="phone"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required
       onChange={handlePhoneChange}/>

<small>Format: 123-456-7890</small>
      <label for="cars">Choose a service:</label>

<select id="cars" onChange={handleSelect} value={select}>
  <option value="new_installation">New installation</option>
  <option value="service_and_repair">Service and Repair</option>
  <option value="free_estimate">Get a free estimate</option>
  <option value="audi" selected>Audi</option>
</select>
      <label for="message">Message: </label>

    <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter a message here" onChange={handleChange}>
    {/* {message} */}
    </textarea>
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

      {isSubmitted ? <em>Thanks for submitting!</em> : null}

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
