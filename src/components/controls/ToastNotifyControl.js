import React from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuid } from "uuid";

export const notify = (message) => {
  return toast(message, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const ToastVisual = ({ header, message, children }) => (
  <div>
    {header && (
      <h1>
        <strong>{header}</strong>
      </h1>
    )}
    <p>{message}</p>
    {children && <>{children}</>}
  </div>
);

// interface INotify {}
// export class Notify implements INotify {

export class Notify {
  static createToast = ({ type, props, options }) => {
    const uniqueToastId = uuid();

    const defaultOptions = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: uniqueToastId,
      icon: props.icon,
    };

    toast[type](
      <ToastVisual
        message={props.message}
        header={props.header}
        children={props.children}
      />,
      {
        ...defaultOptions,
        ...options,
      }
    );
  };

  static Information = (message) =>
    Notify.createToast({ type: "info", props: { message } });
  static Success = (message) =>
    Notify.createToast({ type: "success", props: { message } });
  static Error = (message) =>
    Notify.createToast({
      type: "error",
      props: { message, header: "Attention" },
    });
  static ErrorStationary = (message) =>
    Notify.createToast({
      type: "error",
      props: { message, header: "Attention" },
      options: { autoClose: false },
    });
  static Warning = (message) =>
    Notify.createToast({ type: "warning", props: { message } });
  static Media = (header, message, children) =>
    Notify.createToast({
      type: "info",
      props: { header, message, children },
      options: { autoClose: false },
    });
}

const ToastNotification = (props) => (
  <>
    {props.children}
    <ToastContainer />
  </>
);

export default ToastNotification;
