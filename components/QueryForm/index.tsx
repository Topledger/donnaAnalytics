"use client";

import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Script from "next/script";
import Image from "next/image";
import cx from "classnames";

import Button from "../Button";
import SvgIcon from "../SvgIcon";
import { postFeedback } from "@/queries";

import styles from "./index.module.scss";
import Icon from "../Icon";

const isValid = (value: any, validations: any[]) => {
  return validations.every((validation) => validation(value));
};

const Input = ({ icon, className, validations, name, ...inputProps }: any) => {
  const [valid, setIsValid] = useState<any>(!validations);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <span className={cx(styles.inputContainer, { [styles.focused]: focused })}>
      <SvgIcon name={icon} className={styles.inputIcon} />
      <input
        className={styles.input}
        name={name}
        {...inputProps}
        {...(validations && {
          onChange: (e) => setIsValid(isValid(e.target.value, validations)),
        })}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <input type="hidden" name={`${name}_valid`} value={valid} />
      {validations && (
        <span className={styles.check}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            fill="none"
            color={valid ? "#49b11f" : "#c7c8d9"}
          >
            <path fill="currentColor" d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0Z" />
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.95 4.65 6.638 5.963 5.325 7.275 4.2 6.15"
            />
          </svg>
        </span>
      )}
    </span>
  );
};

const FormRow = ({ label, optional, children }: PropsWithChildren<any>) => {
  return (
    <div className={styles.formRow}>
      {label && (
        <label className={styles.label}>
          {label}
          {optional && <span className={styles.optional}> (Optional)</span>}
        </label>
      )}
      {children}
    </div>
  );
};
const EMAIL_REGEX = RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
const validations = {
  isNotEmpty: (value: any) => !!value?.trim(),
  isEmail: (value: any) => EMAIL_REGEX.test(value),
};

const isInValidForm = (fields: any[], formValues: any) => {
  return fields.some((field) => formValues[`${field}_valid`] !== "true");
};

let grecaptcha: any;

const QueryForm = () => {
  const formRef = useRef(null);
  const captchaRef = useRef(null);
  const [formValues, setFormValues] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onScriptLoad = useCallback(() => {
    console.log("Script loaded", grecaptcha);
    grecaptcha.ready(() => {
      grecaptcha.render(captchaRef.current, {
        sitekey: "6LcmEmYpAAAAAOqbvQqTFakTlhMDuUneEm55ZJxE",
      });
    });
  }, []);

  const onFormChange = useCallback((e: any) => {
    const form = e.target.form;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData);

    console.log("values", values);

    setFormValues(values);
  }, []);

  const onFormSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      console.log("formValues", formValues);
      try {
        setIsLoading(true);
        await postFeedback(
          formValues,
          "AKfycbxlvja8uStuyNJ-AtGF78Any2DOvHH5TAWZ_0S2blnjBhyV6pLGL6Wzy81AMcYilmpqfA"
        );
        setIsLoading(false);
        setIsSubmitted(true);
      } catch (err) {
        console.log("error", err);
      }
    },
    [formValues]
  );

  useEffect(() => {
    let timer;
    const listenToCaptcha = () => {
      const form = formRef.current;
      if (form) {
        const formData = new FormData(form);
        const values = Object.fromEntries(formData);

        if (values["g-recaptcha-response"]) {
          setFormValues(values);
          // clearInterval(timer);
        }
      }
    };

    timer = setInterval(listenToCaptcha, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.ready(() => {
        grecaptcha.render(captchaRef.current, {
          sitekey: "6LcmEmYpAAAAAOqbvQqTFakTlhMDuUneEm55ZJxE",
        });
      });
    }
  }, []);

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        onLoad={onScriptLoad}
      ></Script>
      {!isSubmitted && (
        <form
          className={styles.formContainer}
          onChange={onFormChange}
          ref={formRef}
          onSubmit={onFormSubmit}
        >
          <div className={styles.leftSection}>
            <div className={styles.leftCardContainer}>
              <div className={styles.topSection}>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src="/assets/images/icon-rocket.png"
                    alt="rocket"
                    width={50}
                    height={50}
                  />
                </div>
                <h2 className={styles.title}>
                  Fuel decision-making <div>& skyrocket productivity</div>
                </h2>
              </div>
              <div className={styles.bottomSection}>
                <p>
                  Top Ledger tirelessly fosters a data-driven culture in your
                  organization
                </p>
                <ul className={styles.list}>
                  <li>
                    <SvgIcon
                      name="diamond-bullet"
                      color="#8692AD"
                      height={16}
                      width={16}
                    />{" "}
                    High-caliber team
                  </li>
                  <li>
                    <SvgIcon
                      name="diamond-bullet"
                      color="#8692AD"
                      height={16}
                      width={16}
                    />{" "}
                    Uncompromising analytics
                  </li>
                  <li>
                    <SvgIcon
                      name="diamond-bullet"
                      color="#8692AD"
                      height={16}
                      width={16}
                    />{" "}
                    Quick turnaround time
                  </li>
                  <li>
                    <SvgIcon
                      name="diamond-bullet"
                      color="#8692AD"
                      height={16}
                      width={16}
                    />{" "}
                    One-stop analytics platform
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.formInputs}>
              <FormRow label="Name">
                <Input
                  icon="user"
                  name="name"
                  placeholder="Your full name"
                  validations={[validations.isNotEmpty]}
                />
              </FormRow>
              <FormRow label="Email">
                <Input
                  icon="email"
                  name="email"
                  placeholder="Email"
                  validations={[validations.isNotEmpty, validations.isEmail]}
                />
              </FormRow>
              <FormRow label="Company">
                <Input
                  icon="company"
                  name="company"
                  placeholder="Your company"
                  validations={[validations.isNotEmpty]}
                />
              </FormRow>
              <FormRow label="Designation" optional>
                <Input
                  icon="designation"
                  name="designation"
                  placeholder="Your designation"
                />
              </FormRow>
            </div>
            <div className={styles.captcha}>
              <FormRow>
                <div
                  ref={captchaRef}
                  className={cx("g-recaptcha", styles.recaptcha)}
                  data-sitekey="6LcmEmYpAAAAAOqbvQqTFakTlhMDuUneEm55ZJxE"
                  data-callback={(token: any) => console.log(token)}
                ></div>
              </FormRow>
            </div>
            <div className={styles.submitRow}>
              <Button
                primary
                className={styles.submitButton}
                color="#085ED4"
                disabled={
                  isInValidForm(
                    ["name", "email", "company", "designation"],
                    formValues
                  ) ||
                  !formValues["g-recaptcha-response"] ||
                  isLoading
                }
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      )}
      {isSubmitted && (
        <div className={styles.submittedForm}>
          <div className={styles.submittedContainer}>
            <div className={styles.successImageContainer}>
              <SvgIcon
                className={styles.checkmark}
                name="checkmark"
                height={150}
                width={150}
              />
            </div>
            <div className={styles.successLine1}>
              We&apos;ve got your details!
            </div>
            <div className={styles.successLine2}>
              Our team will get back to you within a day!
            </div>
            <div className={styles.successLine3}>
              See what&apos;s possible with our public dashboards
            </div>
            <div className={styles.successLine4}>
              <Button.Link
                href="/dashboards"
                color="#085ED4"
                secondary
                target="_blank"
              >
                Public dashboards
              </Button.Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QueryForm;
